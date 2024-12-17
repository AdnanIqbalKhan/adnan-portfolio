import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import { emphasizeHero } from "../../../utils/emphasize";

const TRANSITION_DATA = {
  span: {
    delay: 10.4,
    duration: 0.2,
  },
  h1: {
    delay: 10.5,
    duration: 0.2,
  },
  h2: {
    delay: 10.6,
    duration: 0.2,
  },
  h3: {
    delay: 10.7,
    duration: 0.2,
  },
  div: {
    delay: 10.8,
    duration: 0.2,
  },
};
const DEFAULT_VALUE = {
  delay: 0,
  duration: 0,
};
// Define a type for the properties of 'opacity' and 'y'
type TransitionDetails = {
  delay: number;
  duration: number;
};
// Define the main type, where keys can be any string (matching the structure of DATA)
type TransitionType = {
  [key in keyof typeof TRANSITION_DATA]: {
    opacity: TransitionDetails;
    y: TransitionDetails;
  };
};

export default function MyName(props: Readonly<{ finishedLoading: boolean }>) {
  const { t } = useTranslation();
  const transition: TransitionType = (() => {
    return Object.entries(TRANSITION_DATA).reduce(
      (prev, [key, value]) => ({
        ...prev,
        [key]: {
          opacity: props.finishedLoading ? DEFAULT_VALUE : value,
          y: props.finishedLoading ? DEFAULT_VALUE : value,
        },
      }),
      {} as TransitionType
    );
  })();

  return (
    <div
      className="h-full flex flex-col justify-center
      px-8 2xl:px-72 xl:px-56 lg:px-32  md:px-28 sm:px-8 py-32 sm:py-52  "
    >
      <motion.span
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={transition.span}
        className="text-AAsecondary font-mono"
      >
        {t("home:hero_lead")}
      </motion.span>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={transition.h1}
        className="text-gray-300 font-bold text-3xl lg:text-7xl sm:text-5xl md:text-6xl mt-4"
      >
        {t("home:hero_title")}
      </motion.h1>
      <motion.h2
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={transition.h2}
        className="text-gray-400 font-bold text-3xl lg:text-7xl sm:text-5xl md:text-6xl mt-4"
      >
        {t("home:hero_subheading")}
      </motion.h2>

      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={transition.h3}
        className="text-gray-400 font-Header text-sm md:text-lg sm:text-md mt-10 tracking-wider"
      >
        {emphasizeHero(t("home:hero_description"))}
      </motion.h3>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={transition.div}
        className="mt-12"
      >
        <a href={"/resume.pdf"} target={"_blank"} rel="noreferrer">
          <button className="bg-AAprimary text-AAsecondary border rounded px-4 sm:px-8 py-3 sm:py-4 border-AAsecondary">
            {t("home:hero_cta")}
          </button>
        </a>
      </motion.div>
    </div>
  );
}
