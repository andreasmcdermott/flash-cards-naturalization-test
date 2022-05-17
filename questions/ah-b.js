export const getQuestions = () =>
  [
    {
      text: "What territory did the United Statews buy from France in 1803",
      answers: ["Louisiana"]
    },
    {
      text: "Name one war fought by the United States in the 1800s",
      answers: [
        "War of 1812",
        "Mexican-American war",
        "Civil War",
        "Spanish-American war"
      ]
    },
    {
      text: "Name the US war between the North and the South",
      answers: ["the Civil War"]
    },
    {
      text: "Name one problem that led to the Civil War",
      answers: ["Slavery", "States' rights"]
    },
    {
      text: "What was one important thing that Abraham Lincoln did?",
      answers: ["Freed the slaves (Emanicipation Proclamation)"]
    },
    {
      text: "What did the Emancipation Proclamation do?",
      answers: ["Freed the slaves in the Confederate states"]
    },
    {
      text: "What did Susan B Anthony do?",
      answers: ["Fought for women's rights"]
    }
  ].map((q) => ({
    ...q,
    category: "American History",
    subcategory: "B: 1800s"
  }));
