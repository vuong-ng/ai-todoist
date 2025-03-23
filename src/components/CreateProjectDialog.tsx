'use client'
import React from 'react'
import { PlusCircleIcon } from 'lucide-react'
import { Dialog, DialogTrigger } from '@radix-ui/react-dialog'

type Props = {}

const CreateProjectDialog = (props: Props) => {
    return (
    <Dialog>
        <DialogTrigger>
            <div className='flex w-35 h-35 items-center justify-center rounded-2xl border-dashed border-neutral-500 border-2 sm:flex-col hover:shadow-xl transition hover:-translate-x-1 hover:-translate-y-1 p-5'>
                <PlusCircleIcon className='w-10 h-10' strokeWidth={2} style={{color: "oklch(0.556 0 0)"}} />
            </div>
        </DialogTrigger>
    </Dialog>
  )
}

export default CreateProjectDialog;