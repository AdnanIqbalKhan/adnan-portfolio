import React, { useState } from "react";
import Link from "next/link";
import ArrowIcon from "../../Icons/ArrowIcon";
import Img from "../../smallComp/image/Img";
import GithubIcon from "../../Icons/GithubIconForSomethingIveBuild";
import ExternalLink from "../../Icons/ExternalLink";
import { PROJECTS_DATA, TProject } from "../../../utils/data/projects";
import { emphasize } from "../../../utils/emphasize";

const WebsitePreview = ({ project }: { project: TProject }) => {
  return (
    <div className="w-full h-full bg-AAtertiary rounded p-6 flex flex-col justify-center">
      {project.url && (
        <div className="relative w-full h-64 bg-gray-800 rounded overflow-hidden">
          <iframe
            src={project.url}
            className="w-full h-full"
            style={{ pointerEvents: "none" }}
            title={project.title}
          />
          <div className="absolute inset-0" />
        </div>
      )}
    </div>
  );
};
const ProjectCard = ({ project, isRight = false }) => {
  const [imageError, setImageError] = useState(false);
  const contentClass = isRight
    ? "md:items-end md:text-right"
    : "items-start text-left";
  const imageClass = isRight ? "col-span-7" : "col-start-6 col-span-7";

  return (
    <div
      data-aos="fade-up"
      className="relative md:grid md:grid-cols-12 w-full md:h-96"
    >
      {/* Image Section */}
      <div className="hidden bg-AAprimary z-10 py-4 absolute md:grid grid-cols-12 w-full h-full content-center">
        <div className={`relative rounded w-full h-full ${imageClass}`}>
          <Link href={project.url || "#"}>
            <div className="absolute w-full h-full rounded bg-AAsecondary transition-opacity opacity-20 hover:opacity-0 hover:cursor-pointer duration-300" />
          </Link>
          {imageError ? (
            <WebsitePreview project={project} />
          ) : (
            <Img
              src={project.imageUrl}
              alt={project.title}
              className="w-full rounded h-full"
              onError={() => setImageError(true)}
            />
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="md:absolute py-4 md:grid md:grid-cols-12 w-full h-full content-center">
        {/* Mobile Background */}
        <div className="absolute w-full h-full bg-opacity-70 z-0">
          <div className="relative w-full h-full">
            <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10" />
            <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10" />
            <Img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full"
            />
          </div>
        </div>

        <div
          className={`px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 ${
            isRight ? "xl:col-start-7 col-start-5" : ""
          } 
          col-span-8 flex flex-col ${contentClass} space-y-3`}
        >
          <div
            className={`flex flex-col space-y-1 z-10 ${
              isRight ? "md:items-end" : ""
            }`}
          >
            <span className="text-AAsecondary text-base">Recent Project</span>
            <Link href={project.url || "#"}>
              <span className="md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                {project.title}
              </span>
            </Link>
          </div>

          <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6 z-10">
            <p className={`text-gray-300 md:text-gray-400 ${contentClass}`}>
              {emphasize(
                project.description.text,
                project.description.keywords
              )}
            </p>
          </div>

          <ul
            className={`flex flex-wrap w-full text-gray-300 md:text-gray-400 text-sm font-Text2 ${
              isRight ? "md:justify-end" : "md:justify-start"
            }`}
          >
            {project.keywords.map((keyword) => (
              <span key={keyword} className="pr-4 z-10">
                {keyword}
              </span>
            ))}
          </ul>

          <div className="z-10 flex fle-row space-x-5">
            {project.githubUrl && <GithubIcon link={project.githubUrl} />}
            {project.url && <ExternalLink url={project.url} />}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <div
      id="SomethingIveBuiltSection"
      className="flex flex-col space-y-12 bg-AAprimary w-full 2xl:px-72 lg:px-24 md:px-16 sm:px-16 py-32 px-4"
    >
      <div data-aos="fade-up" className="flex flex-row items-center md:px-0">
        <ArrowIcon className="flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px] text-AAsecondary" />
        <div className="flex-none flex-row space-x-2 items-center pr-2">
          <span className="text-AAsecondary font-sans text-sm sm:text-xl">
            03.
          </span>
          <span className="font-bold tracking-wider text-gray-200 text-lg md:text-2xl w-44 md:w-56 opacity-85">
            Some Things I&apos;ve Built
          </span>
        </div>
        <div className="bg-gray-400 h-[0.2px] w-full xl:w-1/3 md:w-1/2" />
      </div>

      <div className="flex flex-col space-y-8 md:space-y-28">
        {PROJECTS_DATA.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            isRight={index % 2 !== 0}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
