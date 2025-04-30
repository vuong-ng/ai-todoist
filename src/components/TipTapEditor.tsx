'use client'
import React, { useEffect } from 'react'
import { useEditor } from '@tiptap/react';
import { StarterKit } from '@tiptap/starter-kit';
import { EditorContent } from '@tiptap/react';
import TipTapMenuBar from './TipTapMenuBar';
import { useDebounce } from '@/lib/db/useDebounce';
// import { Button } from './ui/button';

type Props = {
    value: string,
    onChange: (value:string) => void
}

const TipTapEditor = ({value, onChange}: Props) => {
    // const [editorState, setEditorState] = useState('');
    const debouncedEditorState = useDebounce(value, 500);
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
            {editor &&  <TipTapMenuBar editor={editor} />}
          </div>
          <div>
              <EditorContent editor={editor} className=''/>
          </div>
    </>
  )
}
export default TipTapEditor;