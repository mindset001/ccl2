import React from 'react'
export const slides = [
    {
      title: 'Engage',
      content: 'Assess, analyze to understand needs and priorities by generously listening and get to the core problem to solve, and to establish partnership principles of trust, mutuality, transparency, and sustainable results.',
    },
    {
      title: 'Establish Baseline',
      content: 'Baseline and measures of success while clarifying expectations, roles, and responsibilities.',
    },
    {
      title: 'Contextualize',
      content: 'Solutioning by facilitating locally led implementation, based on analysis of need, context, priorities and comparing with what has worked or failed in similar situations. We then facilitate joint development of solutioning plans and adapting global best practice appropriate for the context to address local challenges.',
    },
    {
      title: 'Delivering',
      content: 'Solutioning plans using appropriate approaches and prioritizing the resolution of client’s pain points/needs, enhancing capacity, fostering learning, optimizing impact, and ensuring sustainability while leveraging innovative solutions and global best practices.',
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
        <div className='lg:w-full mt-20 '>
      <h1 className="text-center text-black text-4xl font-bold capitalize">Our Approach- the ABCDE +S Approach</h1>
     <div className='grid lg:grid-cols-3 gap-4 mt-4'>
     {slides.map((slide, index) => (
        <div className=' bg-[#0E1729] rounded-[20px] p-4 '>
            {/* <h2>{slide .title}</h2> */}
            <p className='text-[#fff]'>{slide.content}</p>
        </div>
     ))}
     </div>
    </div>
        </div>
    </div>
  )
}

export default Approach