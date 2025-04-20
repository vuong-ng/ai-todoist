'use client'
import { useState } from 'react'
import { Loader2, PlusCircleIcon } from 'lucide-react'
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogHeader, DialogDescription } from '@/components/ui/dialog'
import { Input } from './ui/input'
import { Button } from './ui/button'
import axios from 'axios'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

type Props = {}

const CreateProjectDialog = (props: Props) => {
    const [projectName, setProjectName] = useState('');
    const [description, setDescription] = useState('');
    const router = useRouter();
    
    const createProject = useMutation({
        mutationFn: async () => {
            const response = await axios.post('/api/createProject', {
                    name: projectName,
                    description: description,
                })
            return response.data;
        }
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (projectName == '') {
            window.alert('Project name is required');
            return;
        }
        createProject.mutate(undefined,
            {
                onSuccess: ({project_id}) => {
                    console.log("Created new project ", { project_id });
                    router.push(`/project/${project_id}`);
                },
                
                onError: (error) => {
                    console.error(error.message);
                    window.alert('Failed to create a new project');
                }

            }
        )
        return;
    }

    
    return (
    <Dialog>
        <DialogTrigger>
            <div className='flex w-35 h-35 items-center justify-center rounded-2xl border-dashed border-neutral-500 border-2 sm:flex-col hover:shadow-xl transition hover:-translate-x-1 hover:-translate-y-1 p-5'>
                <PlusCircleIcon className='w-10 h-10' strokeWidth={2} style={{color: "oklch(0.556 0 0)"}} />
            </div>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Create a new project
                    </DialogTitle>
                    <DialogDescription>
                        Create a new project to start planning your work
                    </DialogDescription>
                        <div className='h-4'></div>
                        <form action="submit" onSubmit={handleSubmit}>
                            <label htmlFor="">Name:</label>
                            <Input
                                value={projectName}
                                placeholder='Project name'
                                onChange={(e) => {setProjectName(e.target.value)}}
                            />
                            <div className='h-3'></div>
                            <label htmlFor="">Description</label>
                            
                            <Input
                                value={description}
                                onChange={(e) => { setDescription(e.target.value) }}
                                placeholder='Project description'
                            />
                            <div className='h-4'></div>
                            <div className='flex gap-3'>
                                <Button type='reset' variant={'secondary'} className=''>Cancel</Button>
                            <Button type='submit' className='bg-slate-900'>
                                {createProject.isPending && (
                                    <Loader2 className='w-4 h-4 mr-2 animate-spin'/>
                                )}
                                Create</Button>
                            </div>
                            

                        </form>
                    
                </DialogHeader>
            </DialogContent>
    </Dialog>
  )
}

export default CreateProjectDialog;