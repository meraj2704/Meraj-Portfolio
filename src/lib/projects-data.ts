export const projectsData = [
  {
    id: 1,
    name: "Disability Inclusion Resource Hub Bangladesh",
    overview:
      "An international platform where organizations can create accounts, upload disability-related resources, and share accessible content with the public. Includes resources, events, news, and admin-controlled modules.",
    longDescription: `
The Disability Inclusion Resource Hub Bangladesh is an international project completed under Handicap International at ATI Limited.  
The platform is designed to **centralize disability-related resources**, making them accessible to organizations, NGOs, and the public.

Organizations can **register and create accounts**, upload disability-focused resources, and make them available for viewing or downloading.  
The system also includes **events**, **news**, and **content moderation**, all managed by a **Super Admin** to ensure accuracy and trust.

🔧 **My Role:**  
I worked as the **Backend Developer**, where I developed the full backend using **Nest.js and PostgreSQL**.  
I also collaborated with the frontend team, assigning tasks and ensuring smooth integration between backend APIs and UI features.

📌 **Version 2:**  
A complete **Course Module** will be added in the next version to expand the learning resources for disability inclusion.

This project demonstrates my ability to build secure, scalable backend systems and contribute to international development initiatives.
  `,
    thumbnail: "/projects/disability/home.png",
    images: [
      "/projects/disability/home.png",
      "/projects/disability/resource.png",
      "/projects/disability/events.png",
      "/projects/disability/news.png",

    ],
    liveDemo: "https://disabilityinclusionresourcehub.com/en", // international project, not publicly accessible
    githubLink: null, // private repo
    Technology: [
      { name: "Nest.js" },
      { name: "PostgreSQL" },
      { name: "Prisma" },
      { name: "Node.js" }
    ],
    startDate: "2025-06-10",
    endDate: "2025-11-15",
    status: "Completed",
    featured: true
  },
  {
    id: 2,
    name: "Ejazah.com",
    overview:
      "A modern travel agency platform offering seamless flight, hotel, and visa booking services for global travelers.",
    longDescription: `
Ejazah.com is a full-featured travel booking platform designed to simplify trip planning. 
It provides a one-stop solution for booking **flights, hotels, and visas**, ensuring a smooth and hassle-free travel experience.  
The platform offers secure payments, real-time availability checks, and personalized travel recommendations.  

Our team focused on creating a **user-friendly and responsive frontend** with intuitive navigation, clean UI, and fast performance, 
making the booking process simple for travelers worldwide.
    `,
    thumbnail: "/projects/ejazah/ejazah-thumbnail.png",
    images: [
      "/projects/ejazah/ejazah-thumbnail.png",
      "/projects/ejazah/ejazah-login.png",
      "/projects/ejazah/ejazah-search.png",
      "/projects/ejazah/ejazah-flights.png",
      "/projects/ejazah/ejazah-flight-responsive.png",
    ],
    liveDemo: "https://dev.ejazah.com/", // replace with actual live link if available
    githubLink: null, // private repo
    Technology: [
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "Shadcn" },
      { name: "React Query" },
    ],
    startDate: "2025-01-01",
    endDate: "Finished",
    status: "Contract Finished",
    featured: true,
  },
  {
    id: 3,
    name: "EMR (Electronic Medical Record)",
    overview:
      "A production-ready healthcare solution that enables doctors to create prescriptions, manage patient records, and access medical history — already deployed in 3 hospitals.",
    longDescription: `
The EMR system is a modern healthcare platform designed to simplify doctors’ workflow and improve patient care.  
It enables doctors to **create prescriptions digitally**, access complete **patient medical history**, and manage healthcare data securely.  

Key features include:  
- **Prescription Management** – doctors can create and edit prescriptions with ease.  
- **Patient Records** – maintain comprehensive patient profiles with medical history.  
- **Medicine Database** – integrated list of all medicines for quick selection.  
- **Test Database** – doctors can choose from predefined tests and add them to prescriptions.  
- **Previous History Access** – view patients' past prescriptions and test results.  
- **Data Accuracy & Security** – ensures sensitive patient data is stored and accessed safely.  

✅ **Business Impact:**  
The solution has already been **successfully sold and implemented in 3 hospitals**, where it is being actively used by doctors to digitize healthcare processes.  

This project demonstrates not only technical execution but also real-world adoption, making it a proven and scalable healthcare solution.
    `,
    thumbnail: "/projects/emr/emr-thumbnail.png",
    images: [
      "/projects/emr/emr-thumbnail.png",
      "/projects/emr/emr-rx-with-header.png",
      "/projects/emr/emr-rx.png",
      "/projects/emr/emr-medication.png",
      "/projects/emr/emr-pdf.png",
    ],
    liveDemo: null, // internal healthcare system, not public
    githubLink: null, // private repo
    Technology: [
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "Shadcn" },
      { name: "Redux" },
      { name: "Express.js" },
      { name: "MongoDB" },
    ],
    startDate: "2024-06-01",
    endDate: "2025-01-30",
    status: "Completed",
    featured: true,
  },
  {
    id: 4,
    name: "My Kitchen",
    overview:
      "A modern portfolio website for My Kitchen, showcasing company details, services, and project highlights with a clean and responsive UI.",
    longDescription: `
My Kitchen is a portfolio website designed to represent the brand identity and showcase its wide range of projects.  
The platform highlights **company details, services, and completed works** in a visually engaging way.  

I developed the **frontend** using **Next.js, Tailwind CSS, and Shadcn**, focusing on:  
- A **responsive design** optimized for mobile and desktop.  
- A **projects showcase section** highlighting My Kitchen’s completed works.  
- **Clean UI components** built with Shadcn for consistency and accessibility.  
- **Fast-loading pages** with smooth navigation and modern animations.  

The site reflects the company’s professionalism while providing visitors with an easy way to explore its services and achievements.
    `,
    thumbnail: "/projects/my-kitchen/my-kitchen-thumbnail.png",
    images: [
      "/projects/my-kitchen/my-kitchen-thumbnail.png",
      "/projects/my-kitchen/my-kitchen-home.png",
      "/projects/my-kitchen/my-kitchen-products.png",
      "/projects/my-kitchen/my-kitchen-image-gallery.png",
      "/projects/my-kitchen/my-kitchen-product-details.png",
    ],
    liveDemo: "https://www.mykitchen-bd.com/", // replace with actual link if available
    githubLink: null, // private repo
    Technology: [
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "Shadcn" },
    ],
    startDate: "2024-05-01",
    endDate: "2024-07-10",
    status: "Completed",
    featured: false,
  },
  {
    id: 5,
    name: "Her Power",
    overview:
      "A government-backed platform empowering women through education, career guidance, and resources in Bangladesh.",
    longDescription: `
Her Power is a comprehensive platform launched under the Bangladesh Government ICT initiative. 
It is designed to empower women by providing access to courses, career placement support, events, blogs, and other resources. 
The platform includes 6 main modules: Shop Now, Course, Career Placement, Events, Blogs, Resources, Success Stories, and Challenges. 
Our team successfully completed the **frontend development** using modern technologies, ensuring a responsive, user-friendly, and interactive experience.
    `,
    thumbnail: "/projects/her-power/her-power-thumbnail.png",
    images: [
      "/projects/her-power/her-power-thumbnail.png",
      "/projects/her-power/her-power-home.png",
      "/projects/her-power/her-power-shop-now.png",
      "/projects/her-power/her-power-course.png",
    ],
    liveDemo: "https://portal.herpower.gov.bd/en", // if no live demo yet
    githubLink: null, // if not public
    Technology: [
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "Shadcn" },
      { name: "React Query" },
    ],
    startDate: "2024-07-01",
    endDate: "2024-09-15",
    status: "Completed",
    featured: true,
  },

  {
    id: 6,
    name: "ATI Limited Website",
    overview:
      "The official corporate website of ATI Limited, featuring career opportunities, job applications, and contact management with a secure backend.",
    longDescription: `
ATI Limited's official website was developed to provide an interactive and professional online presence.  
It showcases company services, career opportunities, and allows visitors to engage directly through job applications and contact forms.  

I worked on developing the **backend APIs** for the platform, including:  
- **Job Application Management** – candidates can apply for positions, and HR can track applications.  
- **Career Section** – displays open roles and manages applicant data.  
- **Contact Module** – enables secure communication with the company.  
- **Additional APIs** – for services, inquiries, and admin functionalities.  

The backend was built with **Express.js and MongoDB**, ensuring secure data handling, scalability, and smooth integration with the frontend.
    `,
    thumbnail: "/projects/ati-limited/ati-limited-thumbnail.png",
    images: [
      "/projects/ati-limited/ati-limited-thumbnail.png",
      "/projects/ati-limited/ati-home.png",
      "/projects/ati-limited/ati-about.png",
      "/projects/ati-limited/ati-blog.png",
    ],
    liveDemo: "https://atilimited.net", // replace with actual live link if needed
    githubLink: null, // private repo
    Technology: [
      { name: "Express.js" },
      { name: "MongoDB" },
      { name: "Node.js" },
      { name: "Mongoose" },
    ],
    startDate: "2025-03-01",
    endDate: "2025-04-15",
    status: "Completed",
    featured: false,
  },



  {
    id: 7,
    name: "SFMS (Smart Fertilizer Management System)",
    overview:
      "A government project for managing nationwide fertilizer allocation and distribution across Bangladesh with complete tracking, analytics, and role-based access.",
    longDescription: `
SFMS — Smart Fertilizer Management System — is a high-impact digital platform developed for the Government of Bangladesh.  
The system manages and monitors **fertilizer allocation, distribution, and usage across the entire country**, ensuring transparency, accuracy, and efficient supply chain operations.

The platform is used by government officials, district-level officers, factories, dealers, and administrators to:  
- Track **national fertilizer allocation** by type (Urea, TSP, DAP, etc.)  
- Manage **distribution across all districts and factories**  
- Handle **dealer allotments and stock management**  
- Monitor **real-time supply chain data**  
- Provide **reporting, analytics, and auditing features**  
- Ensure **centralized and error-free resource distribution**

🔧 **My Role:**  
I worked as a **Frontend Developer**, responsible for building the full user interface using **Next.js, Tailwind CSS, and Shadcn**.  
My contributions included:  
- Developing responsive UI screens for allocation, distribution, and reporting  
- Implementing interactive components with Shadcn  
- Building reusable and scalable frontend architecture  
- Ensuring performance, accessibility, and pixel-perfect design  
- Collaborating with backend and government teams for seamless integration

This project demonstrates expertise in **large-scale government systems**, modern frontend development, and building reliable interfaces for critical national operations.
  `,
    thumbnail: "/projects/sfms/sfms-1.png",
    images: [
      "/projects/sfms/sfms-1.png",
      "/projects/sfms/sfms-2.png",
      "/projects/sfms/sfms-3.png",
    ],
    liveDemo: null, // government internal system
    githubLink: null, // private gov project
    Technology: [
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "Shadcn" }
    ],
    startDate: "2024-05-01",
    endDate: "Paused",
    status: "Paused",
    featured: false
  },
  {
    id: 8,
    name: "MERN Task",
    overview:
      "An internal team task management system where team leads assign tasks to developers, track progress, and manage workflows efficiently.",
    longDescription: `
MERN Task is an internal project developed to streamline task assignment and progress tracking within our development team.  
The system allows team leads to **assign tasks**, set deadlines, monitor updates, and manage developer activities in one centralized platform.

Developers can **view assigned tasks**, update progress, submit completions, and maintain transparency in daily workflows.  
The platform ensures smooth coordination between team leads and team members.

🔧 **My Role:**  
I worked as the **Backend Developer**, where I built the full backend architecture using **Nest.js, PostgreSQL, and Prisma ORM**.  
My key contributions included:  
- Designing and implementing the **task management database schema**  
- Developing **secure and scalable APIs** for tasks, users, roles, and activity updates  
- Implementing **authentication and role-based access control (RBAC)**  
- Ensuring smooth frontend-backend communication  
- Writing clean, maintainable, and optimized backend code

This project highlights my backend expertise and my ability to build robust systems for internal team productivity and workflow automation.
  `,
    thumbnail: "/projects/mern/mern-1.png",
    images: [
      "/projects/mern/mern-1.png",
      "/projects/mern/mern-2.png",
      "/projects/mern/mern-3.png",
    ],
    liveDemo: null, // internal company system
    githubLink: null, // private repo
    Technology: [
      { name: "Nest.js" },
      { name: "PostgreSQL" },
      { name: "Prisma" },
      { name: "Node.js" }
    ],
    startDate: "2025-06-01",
    endDate: "2025-07-01",
    status: "Completed",
    featured: false
  },
  {
    id: 9,
    name: "Apple Products E-Commerce (Frontend)",
    overview:
      "A modern and premium-quality frontend design for an Apple products e-commerce website featuring devices like iPhones, MacBooks, iPads, and accessories.",
    longDescription: `
This project is a **frontend-only e-commerce platform** designed specifically for showcasing and selling Apple products.  
The goal was to create a **premium, clean, and Apple-inspired UI** that reflects the brand's minimalistic and elegant design approach.

The frontend includes:
- A modern **home page** with featured Apple products  
- Product listing pages for **iPhones, MacBooks, iPads, and accessories**  
- A sleek **product details page** with specs, descriptions, and images  
- A responsive navigation bar and category filters  
- A fully mobile-friendly layout optimized for all devices  

🔧 **My Role:**  
I was responsible for the **entire frontend development**, where I used **Next.js, Tailwind CSS, and Shadcn** to build fast, responsive, and reusable UI components.  
My work focused on:
- Pixel-perfect UI matching Apple’s design style  
- Smooth animations and interactions  
- Clean component architecture  
- High-performance rendering with Next.js  

This project highlights my ability to build polished, modern, and high-end UI experiences for e-commerce platforms.
  `,
    thumbnail: "/projects/apple/apple-1.png",
    images: [
      "/projects/apple/apple-1.png",
      "/projects/apple/apple-2.png",
      "/projects/apple/apple-3.png",
      "/projects/apple/apple-4.png",

    ],
    liveDemo: "https://apple-products-sigma.vercel.app/", // not publicly deployed
    githubLink: null, // private repo or internal demo
    Technology: [
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "Shadcn" }
    ],
    startDate: "2025-02-01",
    endDate: "2025-02-25",
    status: "Completed",
    featured: false
  }




];