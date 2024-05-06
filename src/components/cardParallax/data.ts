import { color } from 'three/examples/jsm/nodes/Nodes.js';

export type Job = {
    title: string;
    location: string;
    position: string;
    jobType: string
    year: string;
    description: string;
    stack: { tech: string; url: string }[];
    color: string;
};

export const jobExperiences: Job[] = [
  {
    title: "STAQWISE SOLUTIONS",
    location: "Pune, India",
    position: "Fullstack Developer",
    jobType: 'In Office',
    year: "Jan 2019 - Nov 2019",
    description:
      "Developed and designed web and mobile applications across various projects, utilizing JAMstack architecture.",
    stack: [
      { tech: "React-Native", url: "react.png" },
      { tech: "Redux", url: "redux.png" },
      { tech: "Strapi", url: "strapi.png" },
      { tech: "GraphQL", url: "graphql.png" },
      { tech: "Hasura", url: "hasura.png" },
      { tech: "Angular", url: "angular.png" },
    ],
    color: "#EFBC9B",
  },
  {
    title: "Western Union",
    location: "Pune, India",
    position: "Backend Developer",
    jobType: 'Remote',
    year: "Jan 2020 - Dec 2021",
    description:
      "Modernized legacy applications by migrating to microservices architecture with Spring Boot and Micronaut. Implemented secure API gateways and JWT authentication for enhanced system access. Championed innovation by developing a successful POC using GraalVM and Micronaut to improve cold-start performance on AWS Lambda.",
    // , GraphqlDGS, Apollo Federation, Micronaut, EKS, Lambda, API-gateway, Cloudwatch, Docker.
    stack: [
      { tech: "Spring-boot", url: "spring-boot.png" },
      { tech: "GraphqlDGS", url: "dgs-graphql.png" },
      { tech: "Apollo Federation", url: "apollo-graphql.png" },
    //   { tech: "Micronaut", url: "micronaut.png" },
    //   { tech: "AWS (Lambda, EKS, API Gateway, Cloudwatch, S3)", url: "" }, //TODO: seperate it out
      { tech: "", url: "aws-lambda.png" }, //TODO: seperate it out
      { tech: "", url: "aws-api-gateway.png" },
      { tech: "", url: "s3.png" },

      { tech: "Docker", url: "docker.png" },
    ],
    color: "#FBF3D5",
  },
  {
    title: "Pixibo",
    location: "Singapore",
    position: "Fullstack Developer",
    jobType: 'Remote',
    year: "Dec 2021 - Feb 2022",
    description:
      "Contributed to a startup by implementing new features, resolving bugs, and building a data analytics function using Node.js and AWS Lambda",
    stack: [
      { tech: "React", url: "react.png" },
      { tech: "NextJS", url: "nextjs.png" },
      { tech: "GraphQL", url: "graphql.png" },
      { tech: "AWS Lambda", url: "aws-lambda.png" },
    ],
    color: "#D6DAC8",
  },
  {
    title: "Encora",
    location: "Pune, India",
    position: "Fullstack Developer",
    jobType: 'Remote',
    year: "Feb 2022 - Feb 2023",
    description:
      "Led the development of a comprehensive IoT dashboard with data visualization and backend architecture using React, Java (Micronaut), Docker, and cloud services (Lambda, ECS, RDS). Mentored an intern and established a development roadmap for efficient code management.",
    stack: [
      { tech: "React", url: "react.png" },
      { tech: "Typescript", url: "typescript.png" },
      { tech: "Java (Micronaut)", url: "micronaut.png" },
      { tech: "Docker", url: "docker.png" },
    //   { tech: "AWS (Lambda, ECS, RDS)", url: "" },
    //   { tech: "Third-party Vendors", url: "" },
    ],
    color: "#9CAFAA",
  },
  {
    title: "Encora",
    location: "Pune, India",
    position: "Fullstack Developer",
    jobType: 'Remote',
    year: "Feb 2023 - Present",
    description:
      "Enhanced and maintained a PLM tool, tackling problems at scale. Crafted Cypress end-to-end (e2e) test cases to ensure quality.",
    stack: [
      { tech: "React", url: "react.png" },
      { tech: "MobX", url: "mobx.png" },
      { tech: "Cypress", url: "cypress.png" },
      { tech: "Elasticsearch", url: "elasticSearch.png" },
      { tech: "Docker", url: "docker.png" },
    //   { tech: "AWS (Lambda, Cloudwatch, SQS)", url: "" },
      { tech: "NestJS", url: "nestjs.png" },
    ],
    color: "#9CAFAA",
  },
];

// export const projects: ParallaxCardProps[] = [
//     {
//       title: "STAQWISE SOLUTIONS",
//       description: "Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.",
//       src: "rock.jpg",
//       link: "https://pixabay.com/illustrations/domain-names-domain-extension-domain-1772242/",
//       color: "#BBACAF"
//     },
//     {
//       title: "WESTERN UNION",
//       description: "This is a story on the border between reality and imaginary, about the contradictory feelings that the insularity of a rocky, arid, and wild territory provokes”—so French photographer Clément Chapillon describes his latest highly captivating project Les rochers fauves (French for ‘The tawny rocks’).",
//       src: "tree.jpg",
//       link: "https://www.ignant.com/2022/09/30/clement-chapillon-questions-geographical-and-mental-isolation-with-les-rochers-fauves/",
//       color: "#977F6D"
//     },
//     {
//       title: "PIXIBO",
//       description: "Though he views photography as a medium for storytelling, Zissou’s images don’t insist on a narrative. Both crisp and ethereal, they’re encoded with an ambiguity—a certain tension—that lets the viewer find their own story within them.",
//       src: "water.jpg",
//       link: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
//       color: "#C2491D"
//     },
//     {
//       title: "ENCORA",
//       description: "The coastlines of Denmark are documented in tonal colors in a pensive new series by Danish photographers Ulrik Hasemann and Mathias Svold; an ongoing project investigating how humans interact with and disrupt the Danish coast.",
//       src: "house.jpg",
//       link: "https://www.ignant.com/2019/03/13/a-photographic-series-depicting-the-uncertain-future-of-denmarks-treasured-coastlines/",
//       color: "#B62429"
//     },
//     {
//       title: "Mark Rammers",
//       description: "Dutch photographer Mark Rammers has shared with IGNANT the first chapter of his latest photographic project, ‘all over again’—captured while in residency at Hektor, an old farm in Los Valles, Lanzarote. Titled ‘Beginnings’, the mesmerizing collection of images is a visual and meditative journey into the origins of regrets and the uncertainty of stepping into new unknowns.",
//       src: "cactus.jpg",
//       link: "https://www.ignant.com/2023/04/12/mark-rammers-all-over-again-is-a-study-of-regret-and-the-willingness-to-move-forward/",
//       color: "#88A28D"
//     }
//   ]