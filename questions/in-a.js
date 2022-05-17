export const getQuestions = () =>
  [
    {
      text: "Name one of the two longest rivers in the United States",
      answers: ["Missouri", "Mississippi"]
    },
    {
      text: "What ocean is on the West Coast of the United States?",
      answers: ["Pacific Ocean"]
    },
    {
      text: "What ocean is on the East Coast of the United States?",
      answers: ["Atlantic Ocean"]
    },
    {
      text: "Name on US territory",
      answers: ["Puerto Rico", "Guam", "American Samoa", "US Virgin Islands"]
    },
    {
      text: "Name one state that borders Canada",
      answers: [
        "Washington",
        "Idaho",
        "Montanta",
        "Alaska",
        "Vermont",
        "North Dakota",
        "New York",
        "Minnesota",
        "Michican",
        "Ohio",
        "Pennsylvania",
        "New Hampshire",
        "Maine"
      ]
    },
    {
      text: "Name one state that borders Mexico",
      answers: ["California", "New Mexico", "Arizonta", "Texas"]
    },
    {
      text: "What is the capital of the United States?",
      answers: ["Washington DC"]
    },
    {
      text: "Where is the Statue of Liberty?",
      answers: ["New York", "Libery Island"]
    }
  ].map((q) => ({
    ...q,
    category: "Integrated Civics",
    subcategory: "A: Geography"
  }));
