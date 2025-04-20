import { auth } from '@clerk/nextjs/server';
import React from 'react'
import { redirect } from 'next/navigation';
import { project } from '@/lib/db/schema';
import { db } from '@/lib/db';
import { and, eq } from 'drizzle-orm';
import { clerkClient } from '@clerk/nextjs/server';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import DeleteButton from '@/components/DeleteButton';
import CreateTaskDialog from '@/components/CreateTaskDialog';
type Props = {
  params: {
    project_id: string;
  }
}

const ProjectPage =  async ({ params: { project_id } }: Props) => {
  const { userId } = await auth();
  if (!userId) {
    return redirect('/dashboard');
  };
  const client = await clerkClient();
  const user = await client.users.getUser(userId);

  const projects = await db
    .select()
    .from(project)
    .where(and(eq(project.project_id, parseInt(project_id)), eq(project.user_id, userId)));
  
  const this_project = projects[0];
  
  
  if (projects.length != 1) {
    return redirect('/dashboard');
  };

  
  return (
    <div className='min-h-screen grainy p-8'>
      <div className='max-w-4xl mx-auto'>
        <div className='border shadow-xl border-stone-200 rounded-lg flex items-center p-4'>
          <Link href='/dashboard'>
            <Button className='bg-purple-700 text-white font-semibold hover:bg-purple-900'>Back</Button>
          </Link>
          <div className='w-3'></div>
          <span className='font-semibold'>
            {user.firstName} {user.lastName}
          </span>
          <span className='inline-block mx-1'>/</span>
          <span className='text-stone-500 font-semibold'>{this_project.project_name}</span>
          <div className='ml-auto'>
            <DeleteButton user_id={this_project.user_id} project_id={this_project.project_id} />
          </div>
        </div>
        <div className='h-4'></div>
        <div className='border-stone-200 shadow-xl border rounded-lg px-16 py-8 w-full'>
          {/* TipTap */}
          <CreateTaskDialog/>
        </div>
      </div>

    </div>
  )
}

export default ProjectPage;

