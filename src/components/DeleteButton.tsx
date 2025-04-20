'use client'
import React from 'react'
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { Button } from './ui/button';
import { Trash } from 'lucide-react';

type Props = {
    user_id: string,
    project_id: number,
}

const DeleteButton = ({ user_id, project_id }: Props) => {
    const router = useRouter();
    const deleteNote = useMutation({
        mutationFn: async () => {
            const response = await axios.post('/api/deleteProject', {
                user_id,
                project_id
            })
            return response.data;
        }
    });
    
  return (
      <Button
          variant={'destructive'}
          size='sm'
          disabled={deleteNote.isPending}
          onClick={() => {
              const confirm = window.confirm("Are you sure you want to delete this note");
              if (!confirm) return;
              deleteNote.mutate(undefined, {
                  onSuccess: () => {
                      router.push('/dashboard');
                  },
                  onError: (err) => {
                      console.error(err);
                  }
              })
          }}>
          <Trash/>
          
    </Button>
  )
}

export default DeleteButton;