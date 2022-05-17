export const getQuestions = () =>
  [
    {
      text: "When do we celebrate Independence Day?",
      answers: ["July 4"]
    },
    {
      text: "Name two national US holidays",
      answers: [
        "Independence Day",
        "New Year's Day",
        "Labor Day",
        "Memorial Day",
        "Thanksgiving",
        "Christmas"
      ]
    }
  ].map((q) => ({
    ...q,
    category: "Integrated Civics",
    subcategory: "C: Holidays"
  }));
