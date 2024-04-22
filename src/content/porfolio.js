const portfolioContent = [
  {
    component: "hero",
    title: "portfolio.",
    intro: "Check out some of my latest UI/UX design case studies.",
    description:
      "I've worked at start-ups, tech companies and corporates on a range of different projects, including design systems, websites and apps.",
  },
  {
    component: "projects-display",
    title: "My Works",
    mainProject: {
      title: "Recording Academy - awards page",
      description: "This is the description",
      image: {
        src: "/portfolio.jpg",
        alt: "alt",
      },
      link: "https://www.recordingacademy.com/awards",
    },
    featuredProjects: [
      {
        title: "Grammy Awards",
        description: "description",
        image: {
          src: "/portfolio.jpg",
          alt: "alt",
        },
        link: "https://www.grammy.com/",
      },
      {
        title: "Recording Academy",
        description: "This is the last description",
        image: {
          src: "/portfolio.jpg",
          alt: "alt",
        },
        link: "https://www.recordingacademy.com/",
      },
    ],
  },
];

export default portfolioContent;
