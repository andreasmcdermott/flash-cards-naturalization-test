export const getQuestions = () =>
  [
    {
      text: "What is one reason colonists came to America?",
      answers: [
        "freedom",
        "political liberty",
        "religious freedom",
        "economic opportunity",
        "escape persecution"
      ],
      prio: 2
    },
    {
      text: "Who lived in America before the Europeans arrived?",
      answers: ["Native Americans"]
    },
    {
      text: "What group of people was taken to America and sold as slaves?",
      answers: ["Africans"]
    },
    {
      text: "Why did the colonists fight the British?",
      answers: [
        "Because of high taxes (taxes without representation)",
        "Lack of self-government"
      ]
    },
    {
      text: "Who wrote the declaration of independence?",
      answers: ["Thomas Jefferson"],
      prio: 2
    },
    {
      text: "When was the declaration of independence adopted?",
      answers: ["July 4, 1776"],
      prio: 2
    },
    {
      text: "There were 13 original states. Name three.",
      answers: [
        "New Hampshire",
        "Massachusetts",
        "Rhode Island",
        "Connecticut",
        "New York",
        "New Jersey",
        "Pennsylvania",
        "Delaware",
        "Maryland",
        "Virginia",
        "North Carolina",
        "South Carolina",
        "Georgia"
      ],
      prio: 2
    },
    {
      text: "What happened at the constitutional convention?",
      answers: ["The constitution was written by the founding fathers"]
    },
    {
      text: "When was the constitution written?",
      answers: ["1787"],
      prio: 2
    },
    {
      text:
        "The federalist papers supported the passage of the US constitution. Name one of the writers.",
      answers: ["Alexander Hamilton", "James Madison"],
      prio: 2,
      prio: 2
    },
    {
      text: "What is one thing Benjamin Franklin is famous for?",
      answers: [
        "US Diplomat",
        "First postmaster general of the united states",
        "started the first free libraries"
      ],
      prio: 2
    },
    {
      text: 'Who is the "Father of our Country"?',
      answers: ["George Washington"]
    },
    {
      text: "Who was the first President?",
      answers: ["George Washington"]
    }
  ].map((q) => ({
    ...q,
    category: "American History",
    subcategory: "A: Colonial Period and Independence"
  }));
