const INTRO_EMPHASIZE_WORDS = [
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
const into1 =
  "Fast-forward to today, I’ve had the opportunity to work on diverse projects, including AI-based platforms, Salesforce Progressive Web Apps, and cloud-based solutions, while collaborating with startups and established companies like Systems Ltd. I specialize in full-stack development, leveraging technologies like React, Node.js, PostgreSQL, and AWS to deliver impactful solutions. Whether it’s integrating third-party APIs, optimizing performance, or deploying scalable applications, I thrive in turning ideas into robust, functional products.";
const emphasize = (text, keywords) => {
  let parts = [];
  let lastIndex = 0;

  keywords.forEach((word) => {
    const wordIndex = text.indexOf(word, 0);
    if (word === "Systems Ltd") {
      console.log(word, wordIndex, lastIndex);
    }
    if (wordIndex !== -1) {
      // Add the text before the emphasized word
      if (wordIndex > lastIndex) {
        parts.push(text.slice(lastIndex, wordIndex));
      }

      // Add the emphasized word with React JSX
      parts.push([
        "span",
        {
          key: wordIndex,
          className: "text-AAsecondary",
        },
        word,
      ]);
      lastIndex = wordIndex + word.length;
    }
  });

  // Add any remaining text after the last word
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return ["", null, parts];
};

console.log(emphasize(into1, INTRO_EMPHASIZE_WORDS));
