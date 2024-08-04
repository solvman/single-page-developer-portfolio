import HeroImage from "@/components/HeroImage";
import {
  IconFrontendMentor,
  IconGitHub,
  IconLinkedIn,
  IconTwitter,
} from "@/components/Icons";

export default function Home() {
  return (
    <>
      <header>
        <nav className="mt-5 sm:mt-[1.875rem]">
          <ul className="flex flex-row flex-wrap justify-center gap-5 sm:gap-8">
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
      </header>
      <main>
        <section></section>
        <h1 className="heading-xl">Nice to meet you! I&apos;m Adam Keyes.</h1>
        Based in the UK, I&apos;m a front-end developer passionate about
        building accessible web apps that users love. Contact me HTML 4 Years
        Experience CSS 4 Years Experience JavaScript 4 Years Experience
        Accessibility 4 Years Experience React 3 Years Experience Sass 3 Years
        Experience Projects Contact me Design portfolio HTML CSS View project
        View code E-learning landing page HTML CSS View project View code Todo
        web app HTML CSS JavaScript View project View code Entertainment web app
        HTML CSS JavaScript View project View code Memory Game HTML CSS
        JavaScript View project View code Art gallery showcase HTML CSS
        JavaScript View project View code Contact I would love to hear about
        your project and how I could help. Please fill in the form, and I’ll get
        back to you as soon as possible. Name Email Message Send message
        adamkeyes
      </main>
    </>
  );
}
