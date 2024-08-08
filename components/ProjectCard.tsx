import Image, { StaticImageData } from "next/image";

type PropsType = {
  thumbnail: string | StaticImageData;
  title: string;
  description: string;
  projectUrl: string;
  codeUrl: string;
};

function ProjectCard({
  thumbnail,
  title,
  description,
  projectUrl,
  codeUrl,
}: PropsType) {
  return (
    <article>
      <div className="group relative">
        <Image src={thumbnail} alt={title} className="group mb-5" />
        <div className="absolute inset-0 hidden cursor-pointer flex-col items-center justify-center gap-12 bg-black/75 opacity-0 transition-all duration-300 group-hover:opacity-100 has-[:focus-visible]:opacity-100 has-[focus-visible]:opacity-100 lg:flex">
          <a href={projectUrl} className="btn-regular">
            View project
          </a>
          <a href={codeUrl} className="btn-regular">
            View code
          </a>
        </div>
      </div>
      <h3 className="heading-md uppercase">{title}</h3>
      <p className="body-lg mb-5 uppercase text-secondary">{description}</p>
      <div className="flex flex-row gap-8 lg:hidden">
        <a href={projectUrl} className="btn-regular">
          View project
        </a>
        <a href={codeUrl} className="btn-regular">
          View code
        </a>
      </div>
    </article>
  );
}
export default ProjectCard;
