import React from "react";

export const HERO_EMPHASIZE_WORDS = [
  "software engineer",
  "problem-solving mindset",
  "innovative solutions",
  "web development",
  "cloud-based",
];
export const INTRO_EMPHASIZE_WORDS = [
  "Hafiz Adnan Iqbal Khan",
  "software engineer",
  "5 years",
  //   "web",
  //   "mobile applications",
  //   "hybrid mobile applications",
  "React Native",
  //   "backend systems",
  "Express.js",
  "Next.js",
  "React",
  //   "Node.js",
  //   "PostgreSQL",
  //   "full-stack development",
  "real-world problems",
  "interactive solutions",
  "clean, efficient code",
  "user-centric designs",
  "experience",
  "AI-based platforms",
  "Systems Ltd",
  //   "cloud-based solutions",
  //   "Salesforce Progressive Web Apps",
  "AWS",
  //   "integrating third-party APIs",
  //   "optimizing performance",
  //   "deploying scalable applications",
  "robust, functional products",
];

interface EmphasizeProps {
  text: string;
  keywords: string[];
  emphasisClassName?: string;
}

const emphasize = (
  text: string,
  keywords: string[],
  emphasisClassName: string = "text-AAsecondary"
): React.ReactNode => {
  if (!keywords.length) return text;

  // Create a regex pattern that matches any of the keywords
  const pattern = new RegExp(
    `(${keywords
      .map((k) => k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
      .join("|")})`,
    "gi"
  );

  // Split the text into parts
  const parts = text.split(pattern);
  return React.createElement(
    React.Fragment,
    null,
    parts.map((part, index) => {
      // Check if this part matches any keyword (case-insensitive)
      const isKeyword = keywords.some(
        (keyword) => part.toLowerCase() === keyword.toLowerCase()
      );

      return isKeyword
        ? React.createElement(
            "span",
            {
              key: part + index,
              className: emphasisClassName,
            },
            part
          )
        : part;
    })
  );
};

export const emphasizeIntro = (text: string): React.ReactNode =>
  emphasize(text, INTRO_EMPHASIZE_WORDS);

export const emphasizeHero = (text: string): React.ReactNode =>
  emphasize(text, HERO_EMPHASIZE_WORDS);
