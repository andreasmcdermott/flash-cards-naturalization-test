export const getQuestions = () =>
  [
    {
      text: "Name one war fought by the United Staes in the 1900s",
      answers: [
        "World War I",
        "World War II",
        "Vietname War",
        "Gulf War",
        "Korean War"
      ]
    },
    {
      text: "Who was President during World War I?",
      answers: ["Woodrow Wilson"],
      prio: 2
    },
    {
      text: "Who was President during the Great Depression and World War II?",
      answers: ["Franklin Roosevelt"],
      prio: 2
    },
    {
      text: "Who did the United States fight in World War II?",
      answers: ["Japan, Germany, and Italy"],
      prio: 2
    },
    {
      text:
        "Before he was President, Eisenhower was a general. What war was he in?",
      answers: ["World War II"]
    },
    {
      text:
        "During the Cold War, what was the main concern of the United States?",
      answers: ["Communism"]
    },
    {
      text: "What movement tried to end racial discrimination?",
      answers: ["Civil Rights Movement"]
    },
    {
      text: "What did Martin Luther King, Jr. do?",
      answers: ["Fought for civil rights (equality for all Americans)"]
    },
    {
      text:
        "What major event happened on September 11, 2001 in the United States?",
      answers: ["Terrorists attacked the United States"]
    },
    {
      text: "Name one American Indian tribe in the United States",
      answers: ["Cherokee", "Navajo", "Shawnee", "Cheyenne", "Apache"]
    }
  ].map((q) => ({
    ...q,
    category: "American History",
    subcategory:
      "C: Recent American History and Other Important Historical Information"
  }));
