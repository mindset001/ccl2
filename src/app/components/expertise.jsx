'use client'
import { useState } from 'react';

export function Expertise() {
  return (
    <div className="w-full flex flex-col justify-center items-center px-8">
      <div className="lg:w-[85%] flex flex-col items-center mt-10">
        <div>
          <h1 className="text-align text-black text-4xl font-bold mt-10">Our Areas of Work</h1>
        </div>
        <div className='grid lg:grid-cols-3 gap-4 mt-4'>
          {projects.map((project, i) => (
            <div key={i} className='bg-[#0E1729] text-[#fff] rounded-[20px] p-6'>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const ProjectCard = ({ project }) => {
  const [expanded, setExpanded] = useState(false);

  const [short, setShort] = useState(true)

  const toggleExpand = () => {
    setExpanded(true);
    setShort(false)
  };

  const toggleShort = () => {
    setExpanded(false);
    setShort(true)
  };

  return (
    <div className="my-8 w-full overflow-hidden">
      <div className='flex flex-col justify-between '>
        <div>
        <h2 className="h- text-xl text-[#fff] font-[800] mb-10 ">{project.title}</h2>
        </div>
       <div>
       {short && <div>
          <p className='h-52'>{project.description}</p>
        </div>}
        {expanded && <div>
          <p className='h-52'>{project.fullDescription}</p>
        </div>}
       </div>
        <div className='mt-4'>
          {short && <button onClick={toggleExpand}>Read more</button>}
          {expanded && <button onClick={toggleShort}>Read less</button>}
        </div>
      
      </div>
     
    </div>
  );
};



export const projects = [
  {
    title: "Program Management",
    description:
      "We enable institutions and communities to implement development and humanitarian programs. We ensure timely delivery, within scope, budget, and quality standards, while fostering learning and growth and achieving maximum impact. ",
    fullDescription:
      "We enable institutions and communities to implement development and humanitarian programs. We ensure timely delivery, within scope, budget, and quality standards, while fostering learning and growth and achieving maximum impact. We support organizations in all phases of the project life cycle from design through implementation and closeout. This includes delivering a full suite of services to co-create responsive, locally relevant, development projects and programs, enabling timely, quality delivering of projects within budgets in full compliance with required policies and connecting partnerships with likeminded stakeholders including ensuring effective, end-to-end management of grants."
  },
 
  {
    title: "Organizational Capacity Strengthening",
    description:
      "We facilitate organizations to assess, develop and implement institutional capacity strengthening initiatives using diverse and multiple approaches focusing on meeting their priority need, enabling growth, optimizing impact, and fostering sustainability. ",
    fullDescription:
      "We facilitate organizations to assess, develop and implement institutional capacity strengthening initiatives using diverse and multiple approaches focusing on meeting their priority need, enabling growth, optimizing impact, and fostering sustainability. We support strategy development for populations and organizations in the health, humanitarian and social sector domains. We foster values-based leadership development to enhance the capacity of leaders to scan and respond to challenges and opportunities. We help them mobilize and align their teams and stakeholders to a shared purpose and to drive lasting, inclusive, values-based change."
  },
  {
    title: "Health Systems Strengthening and Health Service Delivery",
    description:
      "We bring extensive local knowledge of health systems and global best practices to support the development, implementation and evaluation of health systems strengthening interventions across the domains of leadership, management, and governance, service delivery, human resources for health, health financing and health management information and data systems. ",
    fullDescription:
      "We bring extensive local knowledge of health systems and global best practices to support the development, implementation and evaluation of health systems strengthening interventions across the domains of leadership, management, and governance, service delivery, human resources for health, health financing and health management information and data systems. Our service delivery expertise promotes, people-centered, context appropriate, locally led, and sustainable strategies that prioritizes equity, quality, and resource optimization. We have exceptionally deep experience of strengthening Primary Health Care systems and improving Reproductive, Maternal, Newborn, Child Health, Nutrition, and Infectious disease programs with private and public sector partners across multiple geographies. We bring exceptional understanding of government systems and its processes and are well positioned to work with them to identify and solve challenges."
  },
  {
    title: "Technical Assistance",
    description:
      "We provide targeted, collaborative, flexible and result-driven support to organizations to identify, select and deliver solutions to address a development need or institutional challenge. ",
    fullDescription:
      "We provide targeted, collaborative, flexible and result-driven support to organizations to identify, select and deliver solutions to address a development need or institutional challenge. We enable organizations access specialized services or skills they currently lack but need to meet a deliverable/project, operate more effectively, or strengthen their sustainability. Our support draws on multiple, diverse approaches that are delivered in-person, remotely or hybrid of both depending on the need of the organization and nature of the assignment. "
  },
  {
    title: "Program Learning, Growth, and Sustainability",
    description:
      "We bring deep expertise in health and social-science program learning and research to enable organizations to continuously learn, adapt, grow and sustain results. ",
    fullDescription:
      "We bring deep expertise in health and social-science science program learning and research to enable organization continuously learn, adapt, grow and sustain results.  We are committed to delivering excellent program learning and research services in line with the clients' needs and problems and depending on the context using evidence based qualitative and quantitative methodologies. Our team of experts conduct a formative assessment, mid-term reviews, implementation research, summative evaluations of projects and programs and market research, in different sectors. We utilize state-of-the-art software and technology to analyze the qualitative and quantitative data and subsequently present valid information and assist in the use of the information for decision-making. We apply learning to facilitate adapting best practice, fostering replication and for sustainability through incorporation within policies and programs"
  },



 
];
