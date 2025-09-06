export const projectsData = [
  {
    id: 1,
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
    liveDemo: "https://ejazah.com", // replace with actual live link if available
    githubLink: null, // private repo
    Technology: [
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "Shadcn" },
      { name: "React Query" },
    ],
    startDate: "2024-04-01",
    endDate: "2024-06-30",
    status: "Completed",
    featured: true,
  },
  {
    id: 2,
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
    liveDemo: null, // if no live demo yet
    githubLink: null, // if not public
    Technology: [
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "Shadcn" },
      { name: "React Query" },
    ],
    startDate: "2024-01-01",
    endDate: "2024-03-15",
    status: "Completed",
    featured: true,
  },
];
