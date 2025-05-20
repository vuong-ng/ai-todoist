'use client'
import { useState } from "react";
import React from 'react';
import { Popover, PopoverContent,PopoverTrigger } from "./ui/popover";
import { Calendar as CalendarIcon } from 'lucide-react';
import { Calendar } from "./ui/calendar";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogHeader, DialogDescription } from '@/components/ui/dialog'
import { PlusIcon } from "lucide-react";
import TipTapEditor from "./TipTapEditor";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import {format } from 'date-fns'
import { useMutation } from "@tanstack/react-query";
import axios from 'axios';
import { auth } from "@clerk/nextjs/server";


type Props = {
  userId: string,
  projectId : number,
}
// add TipTapEditor in here
const CreateTaskDialog = ({userId, projectId}: Props) => {
  const [task, setTask] = useState('');
  const [dueDate, setDueDate] = useState<Date>();
  const [taskName, setTaskName] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    return;
  }
  return (
    <Dialog>
      <DialogTrigger className="flex justify-items-center">
      <div className='flex w-200 h-15 items-center justify-center rounded-2xl border-solid border-neutral-300 border-2 sm:flex-col hover:shadow-xl transition hover:-translate-x-1 hover:-translate-y-1 p-5'>
                <PlusIcon className='w-10 h-10' strokeWidth={2} style={{color: "oklch(0.556 0 0)"}} />
            </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit task</DialogTitle>
          <DialogDescription>
            Edit your task below
          </DialogDescription>
          <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="">Task name:</label>
                <Input
                    value={taskName}
                    placeholder='Project name'
                    onChange={(e) => {setTaskName(e.target.value)}}
                />
            </div>

            <div>
              <label>Task description</label>
              <TipTapEditor userId={userId} projectId={projectId} value={task} onChange={setTask}></TipTapEditor>
            </div>

            <div>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={'outline'}
                    className={cn(
                      'w-[280px] justify-start text-left font-normal',
                      !dueDate && 'text-muted-forground'
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {dueDate ? format(dueDate, "PPP") : <span>Pick a date</span> }
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode='single'
                    selected={dueDate}
                    onSelect={setDueDate}
                  initialFocus/>
                </PopoverContent>
              </Popover>
            </div>
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default CreateTaskDialog