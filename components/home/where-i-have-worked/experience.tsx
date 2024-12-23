import React from "react";
import { EXPERIENCE_DATA, TExperienceId } from "../../../utils/data/experience";
import { emphasize } from "../../../utils/emphasize";

const Experience = ({ id }: { id: TExperienceId }) => {
  const job = EXPERIENCE_DATA[id];
  if (!job) return <></>;
  return (
    <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0 md:min-w-[500px]">
      <div className="flex flex-col space-y-5">
        {/* Title */}
        <div className="flex flex-col space-y-2">
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            {job.title.text}{" "}
            <a
              href={job.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-AAsecondary"
            >
              @ {job.company}
            </a>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            {job.date.start} - {job.date.end}
          </span>
        </div>
        {/* Tasks */}
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {job.tasks.map((task) => (
            <div key={task.text} className="flex flex-row space-x-2">
              <span className="h-5 w-4 text-AAsecondary flex-none">➜</span>
              <span className="text-gray-500 sm:text-sm text-xs">
                {emphasize(task.text, task.keywords)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
