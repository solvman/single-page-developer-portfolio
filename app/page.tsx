import HeroImage from "@/components/HeroImage";
import {
  IconFrontendMentor,
  IconGitHub,
  IconLinkedIn,
  IconTwitter,
} from "@/components/Icons";
import patternCircle from "@/assets/images/pattern-circle.svg";
import patternRings from "@/assets/images/pattern-rings.svg";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header>
        <div className="wrapper">
          <nav className="relative z-10 mt-5 sm:mt-[1.875rem]">
            <ul className="flex flex-row flex-wrap justify-center gap-5 sm:gap-8 lg:mr-8">
              <li className="flex-shrink-0 flex-grow basis-full text-center sm:me-auto sm:basis-0 sm:text-left">
                <a
                  href=""
                  className="[font-size:_clamp(1.5rem,0.7925rem+3.0189vw,2rem)]"
                >
                  adamkeyes
                </a>
              </li>
              <li>
                <a href="">
                  <IconGitHub />
                </a>
              </li>
              <li>
                <a href="">
                  <IconFrontendMentor />
                </a>
              </li>
              <li>
                <a href="">
                  <IconLinkedIn />
                </a>
              </li>
              <li>
                <a href="">
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
              <h1 className="heading-xl mb-6 sm:mb-16">
                Nice to
                <br className="hidden sm:block lg:hidden" /> meet you! I&apos;m{" "}
                <span className="underline decoration-accent decoration-4 underline-offset-[6px]">
                  Adam Keyes
                </span>
                .
              </h1>
              <p className="mb-6 text-secondary sm:mb-9 lg:max-w-[27rem]">
                Based in the UK, I&apos;m a front-end developer passionate about
                building accessible web apps that users love.
              </p>
              <a
                href=""
                className="text-base font-bold uppercase leading-[1.625] tracking-[2.286px] underline decoration-accent decoration-2 underline-offset-[10px]"
              >
                Contact me
              </a>
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
              <div>
                <h3 className="heading-lg md:mb-[0.875rem]">HTML</h3>
                <p className="text-secondary">4 Years Experience</p>
              </div>
              <div>
                <h3 className="heading-lg md:mb-[0.875rem]">HTML</h3>
                <p className="text-secondary">4 Years Experience</p>
              </div>
              <div>
                <h3 className="heading-lg md:mb-[0.875rem]">CSS</h3>
                <p className="text-secondary">4 Years Experience</p>
              </div>
              <div>
                <h3 className="heading-lg md:mb-[0.875rem]">JavaScript</h3>
                <p className="text-secondary">4 Years Experience</p>
              </div>
              <div>
                <h3 className="heading-lg md:mb-[0.875rem]">Accessibility</h3>
                <p className="text-secondary">4 Years Experience</p>
              </div>
              <div>
                <h3 className="heading-lg md:mb-[0.875rem]">React</h3>
                <p className="text-secondary">3 Years Experience</p>
              </div>
            </div>
            <hr className="sm:hidden" />
          </div>
        </section>
        Projects Contact me Design portfolio HTML CSS View project View code
        E-learning landing page HTML CSS View project View code Todo web app
        HTML CSS JavaScript View project View code Entertainment web app HTML
        CSS JavaScript View project View code Memory Game HTML CSS JavaScript
        View project View code Art gallery showcase HTML CSS JavaScript View
        project View code Contact I would love to hear about your project and
        how I could help. Please fill in the form, and I’ll get back to you as
        soon as possible. Name Email Message Send message adamkeyes
      </main>
    </>
  );
}
