import { getInterviewsById } from '@/lib/actions/general.action';
import { redirect } from 'next/navigation';
import React from 'react'

const Page = async({ params }: RouteParams) => {
    const {id} = await params;
    const interview = await getInterviewsById(id);

    if(!interview) redirect('/');
    
  return (
    <div>Page</div>
  )
}

export default Page