export const getQuestions = () =>
  [
    {
      text: "Why does the flag have 13 stripes?",
      answers: ["They represent the original 13 colonies"]
    },
    {
      text: "Why does the flag have 50 stars?",
      answers: ["Each star represent one of the 50 states"]
    },
    {
      text: "What is the name of the national anthem?",
      answers: ["The star-spangled banner"]
    }
  ].map((q) => ({
    ...q,
    category: "Integrated Civics",
    subcategory: "B: Symbols"
  }));
