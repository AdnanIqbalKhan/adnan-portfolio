import React from "react";
import { useRouter } from "next/router";
import GithubIcon from "../Icons/GithubIcon";
import LinkedinIcon from "../Icons/LinkedinIcon";

const ClickableIcon = (props: { href: string; Icon: any }) => {
  return (
    <a href={props.href} target="_blank" rel="noreferrer">
      <props.Icon
        className="w-5 h-5 text-gray-400 hover:text-AAsecondary fill-current hover:cursor-pointer"
      />
    </a>
  );
};

const IconsData = [
  { href: "https://github.com/AdnanIqbalKhan", Icon: GithubIcon },
  { href: "https://www.linkedin.com/in/adnaniqbalkhan/", Icon: LinkedinIcon },
];

export default function Footer(
  props: Readonly<{
    githubUrl: string;
    hideSocialsInDesktop: boolean;
  }>
) {
  const router = useRouter();
  const { locale, locales, asPath } = router;

  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    router.push(asPath, asPath, { locale: nextLocale });
  };

  return (
    <div className="bg-AAprimary flex flex-col justify-center items-center py-8 space-y-6">
      {/* Social Icons */}
      <div
        className={`flex flex-row space-x-8 ${
          props.hideSocialsInDesktop ? "lg:hidden" : ""
        }`}
      >
        {IconsData.map((iconData, index) => (
          <ClickableIcon
            key={index}
            href={iconData.href}
            Icon={iconData.Icon}
          />
        ))}
      </div>

      {/* Language Switcher */}
      <div className="flex items-center space-x-2">
        <select
          value={locale}
          onChange={changeLanguage}
          className="bg-AAprimary border border-gray-600 text-gray-400 text-xs px-3 py-1 rounded focus:outline-none focus:border-AAsecondary"
        >
          {locales?.map((lng) => (
            <option key={lng} value={lng}>
              {lng === "en" ? "English" : "اردو"}
            </option>
          ))}
        </select>
      </div>

      {/* Credits */}
      <a href={props.githubUrl} target="_blank" rel="noreferrer">
        <div className="group flex flex-col font-mono justify-center items-center text-gray-400 text-sm space-y-2">
          <span className="group-hover:text-AAsecondary sm:text-sm text-xs">
            Designed & Built by Adnan Khan
          </span>

          <span className="text-xs flex flex-row items-center space-x-2 group-hover:text-AAsecondary">
            <GithubIcon className="w-4 h-4 fill-current" />
            <span>Source code - Github</span>
          </span>

          <span className="text-xs group-hover:text-AAsecondary">
            inspired by{" "}
            <a
              href="https://www.anaflous.com/"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              anaflous.com
            </a>
          </span>
        </div>
      </a>
    </div>
  );
}
