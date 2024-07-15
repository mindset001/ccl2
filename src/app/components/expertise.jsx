'use client'
import { useState } from 'react';
import { HoverEffect } from "../../components/ui/card-hover-effect";

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

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="my-8 w-full overflow-hidden">
      <div className='flex flex-col justify-between'>
        <div>
        <h2 className="h- text-xl text-[#fff] font-[800] mb-4">{project.title}</h2>
        </div>
       <div>
       <p className="text-[#fff]  overflow-hidden">{expanded ? project.fullDescription : truncateDescription(project.description)}</p>
       </div>
       <div>
     {project.description.length > 120 && (
          <button onClick={toggleExpand} className="text-blue-500 hover:text-blue-700 focus:outline-none mt-4">
            {expanded ? "Read less" : "Read more"}
          </button>
        )}
     </div>
      </div>
     
    </div>
  );
};

// Function to truncate description to about 120 characters
const truncateDescription = (description) => {
  if (description.length <= 120) return description;
  return description.substring(0, 120) + '...';
};

export const projects = [
 
  {
    title: "Organizational Capacity Strengthening",
    description:
      "We facilitate organizations to assess, develop and implement institutional capacity strengthening initiatives using diverse and multiple approaches focusing on meeting their priority need, enabling growth, optimizing impact, and fostering sustainability. Read more",
    fullDescription:
      "We support strategy development for populations and organizations in the health, humanitarian and social sector domains. We foster values-based leadership development to enhance the capacity of leaders to scan and respond to challenges and opportunities. We help them mobilize and align their teams and stakeholders to a shared purpose and to drive lasting, inclusive, values-based change."
  },
  {
    title: "Health Systems Strengthening and Health Service Delivery",
    description:
      "We bring extensive local knowledge of health systems and global best practices to support the development, implementation and evaluation of health systems strengthening interventions across the domains of leadership, management, and governance, service delivery, human resources for health, health financing and health management information and data systems. Read more",
    fullDescription:
      "Our service delivery expertise promotes people-centered, context-appropriate, locally led, and sustainable strategies that prioritize equity, quality, and resource optimization. We have exceptionally deep experience in strengthening Primary Health Care systems and improving Reproductive, Maternal, Newborn, Child Health, Nutrition, and Infectious disease programs with private and public sector partners across multiple geographies. We bring an exceptional understanding of government systems and their processes and are well-positioned to work with them to identify and solve challenges."
  },
 
  {
    title: "Program Learning, Growth, and Sustainability",
    description:
      "We bring deep expertise in health and social-science program learning and research to enable organizations to continuously learn, adapt, grow and sustain results. Read more",
    fullDescription:
      "We are committed to delivering excellent program learning and research services in line with the clients' needs and problems and, depending on the context, using evidence-based qualitative and quantitative methodologies. Our team of experts conducts formative assessments, mid-term reviews, implementation research, summative evaluations of projects and programs, and market research in different sectors. We utilize state-of-the-art software and technology to analyze qualitative and quantitative data and subsequently present valid information and assist in using the information for decision-making. We apply learning to facilitate adapting best practices, fostering replication, and ensuring sustainability through incorporation within policies and programs."
  },

  {
    title: "Technical Assistance",
    description:
      "We provide targeted, collaborative, flexible and result-driven support to organizations to identify, select and deliver solutions to address a development need or institutional challenge. Read more",
    fullDescription:
      "We enable organizations to access specialized services or skills they currently lack but need to meet a deliverable/project, operate more effectively, or strengthen their sustainability. Our support draws on multiple diverse approaches that are delivered in-person, remotely, or a hybrid of both depending on the organization's needs and the nature of the assignment."
  },

  {
    title: "Program Management",
    description:
      "We enable institutions and communities to implement development and humanitarian programs. We ensure timely delivery, within scope, budget, and quality standards, while fostering learning and growth and achieving maximum impact. Read more",
    fullDescription:
      "We support organizations in all phases of the project life cycle from design through implementation and closeout. This includes delivering a full suite of services to co-create responsive, locally relevant, development projects and programs, enabling timely, quality delivery of projects within budgets in full compliance with required policies and connecting partnerships with like-minded stakeholders including ensuring effective, end-to-end management of grants."
  },
];
