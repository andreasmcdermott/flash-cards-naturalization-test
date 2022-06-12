export const getQuestions = () =>
  [
    {
      text: "What is the supreme law of the land?",
      answers: ["The Constitution"]
    },
    {
      text: "What does the constitution do?",
      answers: ["Defines the Government", "Protects basic rights of Americans"],
      prio: 1
    },
    {
      text:
        "The idea of self-government is in the first three words of the Constitution. What are these words?",
      answers: ["We the People"],
      prio: 1
    },
    {
      text: "What is an amendment?",
      answers: [
        "a change (to the Constitution)",
        "an addition (to the Constitution)"
      ]
    },
    {
      text: "What do we call the first ten amendments to the Consitution",
      answers: ["the Bill of Rights"],
      prio: 1
    },
    {
      text: "What is one right or freedom from the first Amendment",
      answers: [
        "Speech",
        "Religion",
        "Assembly",
        "Press",
        "Petition the government"
      ],
      prio: 1
    },
    {
      text: "How many amendments does the Constitution have?",
      answers: ["27"],
      prio: 1
    },
    {
      text: "What did the Declaration of Independence do?",
      answers: ["Declared our independency from Great Britain"]
    },
    {
      text: "What are two rights in the Declaration of Independence?",
      answers: ["Life", "Liberty", "Pursuit of Happiness"],
      prio: 1
    },
    {
      text: "What is freedom of Religion?",
      answers: ["You can practice any or no religion"]
    },
    {
      text: "What is the economic system in the United States?",
      answers: ["Capitalist economy", "Market economy"]
    },
    {
      text: 'What is the "rule of law"?',
      answers: [
        "Everyone must follow the law",
        "Leaders must obey the law",
        "Government must obey the law",
        "No one is above the law"
      ],
      prio: 1
    }
  ].map((q) => ({
    ...q,
    category: "American Government",
    subcategory: "A: Principles of American Democracy"
  }));
