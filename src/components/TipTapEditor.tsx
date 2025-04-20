'use client'
import React, { useState } from 'react'
import { useEditor , BubbleMenu} from '@tiptap/react';
import { StarterKit } from '@tiptap/starter-kit';

type Props = {}

const TipTapEditor = (props: Props) => {
    const [editorState, setEditorState] = useState('');
    const editor = useEditor({
        autofocus: true,
        extensions: [StarterKit],
        content: editorState,
        onUpdate: ({ editor }) => {
            setEditorState(editor.getHTML())
        }
    })
  return (
    <div>TipTapEditor</div>
  )
}
export default TipTapEditor;