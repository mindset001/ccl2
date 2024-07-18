import React from 'react'
export const slides = [
    {
      title: 'Engage',
      content: 'Engage Assess, analyze to understand needs and priorities by generously listening and get to the core problem to solve, and to establish partnership principles of trust, mutuality, transparency, and sustainable results.',
    },
    {
      title: 'Establish Baseline',
      content: 'Establish Baseline and measures of success while clarifying expectations, roles, and responsibilities.',
    },
    {
      title: 'Contextualize',
      content: 'Contextualize solutioning by facilitating locally led implementation, based on analysis of need, context, priorities and comparing with what has worked or failed in similar situations. We then facilitate joint development of solutioning plans and adapting global best practice appropriate for the context to address local challenges.',
    },
    {
      title: 'Delivering',
      content: 'Delivering Solutioning plans using appropriate approaches and prioritizing the resolution of client’s pain points/needs, enhancing capacity, fostering learning, optimizing impact, and ensuring sustainability while leveraging innovative solutions and global best practices.',
    },
    {
      title: 'Evaluate',
      content: 'Regularly and jointly evaluate, learn, and improve solutioning plan and delivery process.',
    },
    {
      title: 'Improve and Sustain',
      content: 'Improve and sustain results and partnership by fostering a culture of continuous learning and improvement and approaching every interaction as an opportunity for growth and for advancing greater impact for all.',
    },
  ];
function Approach() {
  return (
    <div className='flex justify-center'>
        <div className='w-[85%]'>
        <div className='lg:w-full mt-0 '>
      <h1 className="text-center text-black text-4xl font-bold capitalize">Our Approach- the ABCDE +S Approach</h1>
     <div className='grid lg:grid-cols-3 gap-4 mt-4'>
     
        <div className=' bg-[#0E1729] rounded-[20px] p-4 '>
            
            <p className='text-[#f2f2f2] font-[300]'>Engage <span className='font-[800]'>Assess, analyze</span> to understand needs and priorities by generously listening and getting to the core of the problems that need solving, and to establish partnership principles of trust, mutuality, transparency, and sustainable results. </p>
        </div>
        <div className=' bg-[#0E1729] rounded-[20px] p-4 '>
            
            <p className='text-[#f2f2f2] font-[300]'>Establish <span className='font-[800]'>Baseline</span> and measures of success while clarifying expectations, roles, and responsibilities.</p>
        </div>
        <div className=' bg-[#0E1729] rounded-[20px] p-4 '>
            
            <p className='text-[#f2f2f2] font-[300]'><span className='font-[800]'>Contextualize</span> solutioning by facilitating locally led cocreation, based on analysis of need, context, priorities and comparing with what has worked or failed in similar situations. We then facilitate joint development of solutioning plans and adapting global best practices appropriate for the context to address local challenges.</p>
        </div>
        <div className=' bg-[#0E1729] rounded-[20px] p-4 '>
            
            <p className='text-[#f2f2f2] font-[300]'><span className='font-[800]'>Delivering</span> solutioning plans using appropriate approaches and prioritizing the resolution of client’s pain points/needs, enhancing capacity, fostering learning, optimizing impact, and ensuring sustainability while leveraging innovative solutions and global best practices.</p>
        </div>
        <div className=' bg-[#0E1729] rounded-[20px] p-4 '>
            
            <p className='text-[#f2f2f2] font-[300]'>Regularly and jointly <span className='font-[800]'>Evaluate,</span> learn, and improve solutioning plan and delivery process.</p>
        </div>
        <div className=' bg-[#0E1729] rounded-[20px] p-4 '>
            
            <p className='text-[#f2f2f2] font-[300]'>Improve <span className='font-[800]'>and Sustain</span> results and partnership by fostering a culture of continuous learning and improvement and approaching every interaction as an opportunity for growth and for advancing greater impact for all.</p>
        </div>
  
     </div>
    </div>
        </div>
    </div>
  )
}

export default Approach