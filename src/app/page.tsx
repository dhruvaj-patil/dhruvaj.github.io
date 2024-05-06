import Image from "next/image";
import styles from "./page.module.css";
// import Scene from "@/components/Scene";
import dynamic from "next/dynamic";
import { Text3dProps } from "@/components/3dText/index";
import Contact from "@/components/contactUs";
// import Text3d from "@/components/3dText/Text3d";

const GlassEffect = dynamic(() => import("@/components/glassEffect/index"), {
  ssr: false,
});
const TextOpacity = dynamic(
  () => import("@/components/textOpacityScroll/index"),
  { ssr: false }
);
const CardParallax = dynamic(() => import("@/components/cardParallax/index"), {
  ssr: false,
});
const TrailingPixel = dynamic(
  () => import("@/components/trailingPixels/index"),
  { ssr: false }
);
const RotatingPhone = dynamic(
  () => import("@/components/rotatingPhone/index"),
  { ssr: false }
);
const Text3d = dynamic(() => import("@/components/3dText/index"), {
  ssr: false,
});
const TiltCard = dynamic(() => import("@/components/tiltCard/index"), {
  ssr: false,
});

// const GlassEffect = dynamic(() => import('@/components/glassEffect/index'), {ssr: false})

// Highly skilled Full-Stack Developer with 5 years of experience building and deploying complex web applications.

// Proven ability to design, develop, and maintain both front-end and back-end systems.

// Extensive experience with modern technologies like React, Node.js, Java, AWS, and cloud-based solutions.

// Strong leadership qualities, including mentoring junior developers and establishing technical roadmaps.
const paragraph =
  "Full-Stack Developer with 4+ years of experience building and deploying complex web applications. \nProven ability to design, develop, and maintain both front-end and back-end systems.";

const contactDetails: Text3dProps[] = [
  {
    primary: "Call",
    secondary: "(+91)7219080002",
    url: "tel:+917219080002",
  },
  {
    primary: "Email",
    secondary: "dhruvaj.patil@gmail.com",
    url: "mailto:dhruvaj.patil@gmail.com",
  },
];

export default function Home() {
  return (
    <main className="h-full">
      {/* <GlassEffect
        title="Dhruvaj Patil"
        subtitle="Full-stack Software Developer"
      /> */}
      <TrailingPixel />

      <div id="about_me" className={`${styles.section}`}>
        <div>
          <h1 className={`${styles.sectionHeader}`}>
            Introduction
          </h1>
        </div>
        <TextOpacity paragraph={paragraph} />
      </div>
      {/* <div className="h-full">
      </div> */}
      <div id="experience"className={`${styles.section}`}>
        <h1 className={`${styles.sectionHeader}`}>
          Experience
        </h1>
        <CardParallax />
      </div>
      <div id="contact" className={`${styles.section} h-2/3`}>
        <h1 className={`${styles.sectionHeader}`}>
          Contact
        </h1>
        <div>
          <Contact url={"mailto:dhruvaj.patil@gmail.com"} />
        </div>
      </div>
      {/* <div className="w-full h-full p-40">
        <TiltCard />
      </div> */}

      {/* 
      <div id="footer" className="mt-40 ">
        <h1 className={`${styles.sectionHeader}`}>
          Footer
        </h1>
      </div> */}
    </main>
  );
}
