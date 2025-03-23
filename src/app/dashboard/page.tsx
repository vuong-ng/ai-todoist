import React from 'react'
import { UserButton } from '@clerk/nextjs'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { useState } from 'react'
import { DialogContent } from '@radix-ui/react-dialog'
import CreateProjectDialog from '@/components/CreateProjectDialog'

type Props = {}

const page = (props: Props) => {
  // const [projects, setProjects] = useState([]);
  return (
      <div className='min-h-screen grainy'>
          <div className='flex justify-center max-w-7xl mx-auto p-auto'>
              <div className='h-14'></div>
              <div className='flex justify-between items-center md:flex-row flex-col'>
                  <h1 className='title text-3xl font-semibold text-center'>Welcome to dashboard</h1>
                  <div className='w-4'></div>
                  <UserButton/>
              </div>
              <div>
                  <div className=''></div>
            </div>
          </div>
            <Separator/>
          <div>
              <div className='text-center'>No projects created.</div>
              <Separator/>
      </div>
      <div className='grid justify-center sm:grid-cols-3 md:grid-cols-5 grid-cols-1 gap-3'>
        <div className='flex justify-center m-8'>
          <CreateProjectDialog/>
        </div>

      </div>
          <div className='flex h-screen justify-center mt-8'>
              <Button><ArrowLeft/>Back</Button>
          </div>
    </div>
  )
 }
export default page;