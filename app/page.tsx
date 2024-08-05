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
              <p className="mb-6 sm:mb-9 lg:max-w-[27rem]">
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
        HTML 4 Years Experience CSS 4 Years Experience JavaScript 4 Years
        Experience Accessibility 4 Years Experience React 3 Years Experience
        Sass 3 Years Experience Projects Contact me Design portfolio HTML CSS
        View project View code E-learning landing page HTML CSS View project
        View code Todo web app HTML CSS JavaScript View project View code
        Entertainment web app HTML CSS JavaScript View project View code Memory
        Game HTML CSS JavaScript View project View code Art gallery showcase
        HTML CSS JavaScript View project View code Contact I would love to hear
        about your project and how I could help. Please fill in the form, and
        I’ll get back to you as soon as possible. Name Email Message Send
        message adamkeyes
      </main>
    </>
  );
}
