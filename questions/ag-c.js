export const getQuestions = () =>
  [
    {
      text:
        "There are four amendments to the Constitution about who can vote. Describe one of them.",
      answers: [
        "Citizens 18 and older can vote",
        "You don't have to pay a poll tax to vote",
        "Any citizen can vote (men and women)",
        "A male citizen of any race can vote"
      ]
    },
    {
      text:
        "What is one responsibility that is only for United States citizens?",
      answers: ["Serve on a jury", "Vote in federal elections"]
    },
    {
      text: "Name one right only for United State citizens",
      answers: ["Vote in federal elections", "Run for federal office"]
    },
    {
      text: "What are two rights of everyone living in the United States?",
      answers: [
        "Freedom of expression",
        "Freedom of speech",
        "Freedom of assembly",
        "Freedom to petition the government",
        "Freedom of religion",
        "The right to bear arms"
      ]
    },
    {
      text: "What do we show loyalty to when we say the Pledge of Allegiance?",
      answers: ["The United States", "The Flag"]
    },
    {
      text:
        "What is one promise you make when you become a United States citizen?",
      answers: [
        "Obey the laws of the United States",
        "Be loyal to the United States",
        "Give up loyalty to other countries"
      ]
    },
    {
      text: "How old do citizens have to be to vote for President?",
      answers: ["18 or older"]
    },
    {
      text:
        "What are two ways that Americans can participate in their democracy?",
      answers: ["Vote", "Join a political party", "Run for office"]
    },
    {
      text: "When is the last day you can send in federal income tax forms?",
      answers: ["April 15"]
    },
    {
      text: "When must all men register for the Selective Service?",
      answers: ["At age 18", "between 18 and 26"]
    }
  ].map((q) => ({
    ...q,
    category: "American Government",
    subcategory: "C: Rights and Responsibilities"
  }));
