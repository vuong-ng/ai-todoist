import React from 'react'
import { UserButton } from '@clerk/nextjs'
import { Separator } from '@/components/ui/separator'
type Props = {}

const page = (props: Props) => {
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
          <div >
              <div className='text-center'>No notes yet.</div>
              
          </div>
    </div>
  )
 }
export default page;