"use client";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

import HeroImage from "@/components/HeroImage";
import ProjectCard from "@/components/ProjectCard";
import ContactForm from "@/components/ContactForm";
import {
  IconFrontendMentor,
  IconGitHub,
  IconLinkedIn,
  IconTwitter,
} from "@/components/Icons";

import patternCircle from "@/assets/images/pattern-circle.svg";
import patternRings from "@/assets/images/pattern-rings.svg";
import thumbnailProject1 from "@/assets/images/thumbnail-project-1-large.webp";
import thumbnailProject2 from "@/assets/images/thumbnail-project-2-large.webp";
import thumbnailProject3 from "@/assets/images/thumbnail-project-3-large.webp";
import thumbnailProject4 from "@/assets/images/thumbnail-project-4-large.webp";
import thumbnailProject5 from "@/assets/images/thumbnail-project-5-large.webp";
import thumbnailProject6 from "@/assets/images/thumbnail-project-6-large.webp";

type ProjectType = {
  id: number;
  title: string;
  description: string;
  thumbnail: string | StaticImageData;
};

const projects: ProjectType[] = [
  {
    id: 1,
    title: "Design portfolio",
    description: "HTML CSS",
    thumbnail: thumbnailProject1,
  },
  {
    id: 2,
    title: "E-learning landing page",
    description: "HTML CSS",
    thumbnail: thumbnailProject2,
  },
  {
    id: 3,
    title: "Todo web app",
    description: "HTML CSS Javascript",
    thumbnail: thumbnailProject3,
  },
  {
    id: 4,
    title: "Entertainment web app",
    description: "HTML CSS Javascript",
    thumbnail: thumbnailProject4,
  },
  {
    id: 5,
    title: "Memory Game",
    description: "HTML CSS Javascript",
    thumbnail: thumbnailProject5,
  },
  {
    id: 6,
    title: "Art gallery showcase",
    description: "HTML CSS Javascript",
    thumbnail: thumbnailProject6,
  },
];

function animateSideways(delay: number, side: "left" | "right" = "left") {
  return {
    hidden: { x: side === "left" ? -100 : 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay } },
  };
}

function animateDown(delay: number) {
  return {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, delay } },
  };
}

export default function Home() {
  return (
    <>
      <header>
        <div className="wrapper">
          <nav className="relative z-10 mt-5 sm:mt-[1.875rem]">
            <ul className="flex flex-row flex-wrap justify-center gap-5 sm:gap-8 lg:mr-8">
              <li className="flex-shrink-0 flex-grow basis-full text-center sm:me-auto sm:basis-0 sm:text-left">
                <a
                  href="#"
                  className="[font-size:_clamp(1.5rem,0.7925rem+3.0189vw,2rem)]"
                >
                  adamkeyes
                </a>
              </li>
              <li>
                <a href="#">
                  <IconGitHub />
                </a>
              </li>
              <li>
                <a href="#">
                  <IconFrontendMentor />
                </a>
              </li>
              <li>
                <a href="#">
                  <IconLinkedIn />
                </a>
              </li>
              <li>
                <a href="#">
                  <IconTwitter />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        {/* Hero Section */}
        <section>
          <div className="wrapper lg:relative lg:pt-[1px]">
            <HeroImage />
            <Image
              src={patternCircle}
              alt=""
              className="absolute right-0 top-[255px] translate-x-1/2 sm:top-[470px] lg:bottom-[144px] lg:right-[445px] lg:top-auto"
            />
            <Image
              src={patternRings}
              alt=""
              className="absolute -left-1/2 top-[127px] -z-30 sm:left-0 sm:top-[86px] sm:-translate-x-1/2 lg:top-[66px]"
            />
            <div className="mb-20 mt-[331px] text-center sm:mb-[3.75rem] sm:mt-28 sm:max-w-[58vw] sm:text-left lg:mb-52 lg:mt-32 lg:max-w-[45rem]">
              <motion.h1
                variants={animateSideways(0.5)}
                initial="hidden"
                animate="visible"
                className="heading-xl mb-6 sm:mb-16"
              >
                Nice to
                <br className="hidden sm:block lg:hidden" /> meet you! I&apos;m{" "}
                <span className="underline decoration-accent decoration-4 underline-offset-[6px]">
                  Adam Keyes
                </span>
                .
              </motion.h1>
              <motion.p
                variants={animateSideways(0.75)}
                initial="hidden"
                animate="visible"
                className="mb-6 text-secondary sm:mb-9 lg:max-w-[27rem]"
              >
                Based in the UK, I&apos;m a front-end developer passionate about
                building accessible web apps that users love.
              </motion.p>
              <motion.a
                href="#"
                variants={animateSideways(1)}
                initial="hidden"
                animate="visible"
                className="btn-regular"
              >
                Contact me
              </motion.a>
            </div>
            <hr />
          </div>
        </section>
        {/* Skills Section */}
        <section>
          <h2 className="sr-only">Skills</h2>
          <div className="wrapper mb-20">
            <div className="relative grid gap-6 py-10 text-center sm:grid-cols-2 sm:gap-[3.25rem] sm:py-[3.25rem] sm:text-left lg:grid-cols-3 lg:gap-[3.625rem] lg:py-[4.5rem]">
              <Image
                src={patternRings}
                alt=""
                className="absolute bottom-0 right-0 -z-10 translate-x-1/2 translate-y-1/2 lg:translate-x-3/4 lg:translate-y-0"
              />
              <motion.div
                variants={animateDown(0.25)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h3 className="heading-lg md:mb-[0.875rem]">HTML</h3>
                <p className="text-secondary">4 Years Experience</p>
              </motion.div>
              <motion.div
                variants={animateDown(0.5)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h3 className="heading-lg md:mb-[0.875rem]">CSS</h3>
                <p className="text-secondary">4 Years Experience</p>
              </motion.div>
              <motion.div
                variants={animateDown(0.75)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h3 className="heading-lg md:mb-[0.875rem]">JavaScript</h3>
                <p className="text-secondary">4 Years Experience</p>
              </motion.div>
              <motion.div
                variants={animateDown(0.25)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h3 className="heading-lg md:mb-[0.875rem]">Accessibility</h3>
                <p className="text-secondary">4 Years Experience</p>
              </motion.div>
              <motion.div
                variants={animateDown(0.5)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h3 className="heading-lg md:mb-[0.875rem]">React</h3>
                <p className="text-secondary">3 Years Experience</p>
              </motion.div>
              <motion.div
                variants={animateDown(0.75)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h3 className="heading-lg md:mb-[0.875rem]">Sass</h3>
                <p className="text-secondary">3 Years Experience</p>
              </motion.div>
            </div>
            <hr className="sm:hidden" />
          </div>
        </section>
        {/* Projects Section */}
        <section>
          <div className="wrapper">
            <header className="mb-10 flex flex-row items-center justify-between">
              <motion.h2
                variants={animateSideways(0.25)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="heading-xl"
              >
                Projects
              </motion.h2>
              <a className="btn-regular">Contact me</a>
            </header>
            <div className="grid grid-cols-1 gap-10 pb-20 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-14 sm:pb-24 lg:gap-y-16 lg:pb-28">
              {projects.map((project: ProjectType) => {
                const direction = project.id % 2 === 0 ? "right" : "left";
                const delay = direction === "left" ? 0.25 : 0.5;

                return (
                  <motion.div
                    variants={animateSideways(delay, direction)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    key={project.id}
                  >
                    <ProjectCard
                      title={project.title}
                      description={project.description}
                      thumbnail={project.thumbnail}
                      projectUrl=""
                      codeUrl=""
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
        {/* Contact section */}
        <section className="bg-background-secondary">
          <div className="wrapper relative">
            <Image
              src={patternRings}
              alt=""
              className="absolute bottom-[106px] left-0 -translate-x-1/3 sm:bottom-5 lg:bottom-16 lg:-translate-x-2/3"
            />
            <div className="flex flex-col items-center gap-12 pt-[3.75rem] lg:flex-row lg:items-start lg:justify-between lg:pt-[5.25rem]">
              <div className="flex max-w-[27.8125rem] flex-grow flex-col gap-5 text-center lg:text-left">
                <motion.h2
                  variants={animateSideways(0.25)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="heading-xl"
                >
                  Contact
                </motion.h2>
                <motion.p
                  variants={animateSideways(0.5)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="text-secondary"
                >
                  I would love to hear about your project and how I could help.
                  Please fill in the form, and I’ll get back to you as soon as
                  possible.
                </motion.p>
              </div>
              <motion.div
                variants={animateSideways(0.75, "right")}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="w-full max-w-[27.8125rem]"
              >
                <ContactForm />
              </motion.div>
            </div>
          </div>
        </section>
        {/* Footer */}
        <footer className="bg-background-secondary">
          <div className="wrapper">
            <hr />
            <nav className="relative z-10 pb-16 pt-10 sm:pb-10 sm:pt-8 lg:pb-24 lg:pt-12">
              <ul className="flex flex-row flex-wrap justify-center gap-5 sm:gap-8 lg:mr-8">
                <li className="flex-shrink-0 flex-grow basis-full text-center sm:me-auto sm:basis-0 sm:text-left">
                  <a
                    href="#"
                    className="[font-size:_clamp(1.5rem,0.7925rem+3.0189vw,2rem)]"
                  >
                    adamkeyes
                  </a>
                </li>
                <li>
                  <a href="#">
                    <IconGitHub />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <IconFrontendMentor />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <IconLinkedIn />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <IconTwitter />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </footer>
      </main>
    </>
  );
}
