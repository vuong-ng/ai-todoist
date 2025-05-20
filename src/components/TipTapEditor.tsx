'use client'
import React, { useEffect } from 'react'
import { useEditor } from '@tiptap/react';
import { StarterKit } from '@tiptap/starter-kit';
import { EditorContent } from '@tiptap/react';
import TipTapMenuBar from './TipTapMenuBar';
import { useDebounce } from '@/lib/db/useDebounce';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { Button } from './ui/button';
// import { Button } from './ui/button';

type Props = {
    projectId: number,
    userId: string,
    value: string,
    onChange: (value:string) => void
}

const TipTapEditor = ({projectId, userId, value, onChange}: Props) => {
    // const [editorState, setEditorState] = useState('');
    const debouncedEditorState = useDebounce(value, 500);
    const saveTask = useMutation({
        mutationFn: async () => {
          const response = await axios.post("/api/createTasks", {
            userId: userId,
            editorValue: value,
            project_id: projectId
          });
          return response.data;
        }
      })
    const editor = useEditor({
        autofocus: true,
        extensions: [StarterKit],
        content: value,
        onUpdate: ({ editor }) => {
            onChange(editor.getHTML());
        }
    });
    useEffect(() => {
        console.log(debouncedEditorState);

    }, [debouncedEditorState]);
  return (
      <>
          <div className='flex'>
              {editor && <TipTapMenuBar editor={editor} />}
              <Button disabled variant={"outline"}>
                  {saveTask.isPending ? "Saving..." : "Saved"}
              </Button>
          </div>
          <div>
              <EditorContent editor={editor} className=''/>
          </div>
    </>
  )
}
export default TipTapEditor;