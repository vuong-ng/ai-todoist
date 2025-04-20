'use client'
import React from 'react'
import { useEditor } from '@tiptap/react';
import { StarterKit } from '@tiptap/starter-kit';
import { EditorContent } from '@tiptap/react';

type Props = {
    value: string,
    onChange: (value:string) => void
}

const TipTapEditor = ({value, onChange}: Props) => {
    // const [editorState, setEditorState] = useState('');
    const editor = useEditor({
        autofocus: true,
        extensions: [StarterKit],
        content: value,
        onUpdate: ({ editor }) => {
            onChange(editor.getHTML());
        }
    })
  return (
      <div>
          <div>
              <EditorContent editor={editor} className=''/>
          </div>
    </div>
  )
}
export default TipTapEditor;