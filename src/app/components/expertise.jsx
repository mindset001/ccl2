import { HoverEffect } from "../../components/ui/card-hover-effect";

export function Expertise() {
  return (
    <div className="w-full flex flex-col justify-center items-center px-8">
     <div className="w-[90%] flex flex-col items-center">
        <div>
            <h1 className="text-align text-black text-4xl font-bold mt-10">Our Expertise</h1>
        </div>
     <HoverEffect items={projects} />
     </div>
    </div>
  );
}
export const projects = [
  {
    title: "Program Management",
    description:
      "We enable institutions and communities to implement development and humanitarian programs. We ensure timely delivery, within scope, budget, and quality standards, while fostering learning and growth and achieving maximum impact. We support organizations in all phases of the project life cycle from design through implementation and closeout. This includes delivering a full suite of services to co-create responsive, locally relevant, development projects and programs, enabling timely, quality delivering of projects within budgets in full compliance with required policies and connecting partnerships with likeminded stakeholders including ensuring effective, end-to-end management of grants.",
  
  },
  {
    title: "Organizational Capacity Strengthening",
    description:
      "We facilitate organizations to assess, develop and implement institutional capacity strengthening initiatives using diverse and multiple approaches focusing on meeting their priority need, enabling growth, optimizing impact, and fostering sustainability. We support strategy development for populations and organizations in the health, humanitarian and social sector domains. We foster values-based leadership development to enhance the capacity of leaders to scan and respond to challenges and opportunities. We help them mobilize and align their teams and stakeholders to a shared purpose and to drive lasting, inclusive, values-based change.",
 
  },
  {
    title: "Health Systems Strengthening and Health Service Delivery",
    description:
      "We bring extensive local knowledge of health systems and global best practices to support the development, implementation and evaluation of health systems strengthening interventions across the domains of leadership, management, and governance, service delivery, human resources for health, health financing and health management information and data systems. Our service delivery expertise promotes, people-centered, context appropriate, locally led, and sustainable strategies that prioritizes equity, quality, and resource optimization. We have exceptionally deep experience of strengthening Primary Health Care systems and improving Reproductive, Maternal, Newborn, Child Health, Nutrition, and Infectious disease programs with private and public sector partners across multiple geographies. We bring exceptional understanding of government systems and its processes and are well positioned to work with them to identify and solve challenges. ",
    
  },
  {
    title: "Technical Assistance",
    description:
      "We provide targeted, collaborative, flexible and result-driven support to organizations to identify, select and deliver solutions to address a development need or institutional challenge. We enable organizations access specialized services or skills they currently lack but need to meet a deliverable/project, operate more effectively, or strengthen their sustainability. Our support draws on multiple, diverse approaches that are delivered in-person, remotely or hybrid of both depending on the need of the organization and nature of the assignment. ",
  
  },
  {
    title: "Program Learning, Growth, and Sustainability",
    description:
      "We bring deep expertise in health and social-science science program learning and research to enable organization continuously learn, adapt, grow and sustain results.  We are committed to delivering excellent program learning and research services in line with the clients' needs and problems and depending on the context using evidence based qualitative and quantitative methodologies. Our team of experts conduct a formative assessment, mid-term reviews, implementation research, summative evaluations of projects and programs and market research, in different sectors. We utilize state-of-the-art software and technology to analyze the qualitative and quantitative data and subsequently present valid information and assist in the use of the information for decision-making. We apply learning to facilitate adapting best practice, fostering replication and for sustainability through incorporation within policies and programs.",

  },
  
];
