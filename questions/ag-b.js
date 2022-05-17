export const getQuestions = () =>
  [
    {
      text: "Name one branch or part of the government",
      answers: [
        "Congress",
        "Legislative",
        "President",
        "Executive",
        "The Courts",
        "Judicial"
      ]
    },
    {
      text: "What stops one branch of government from becoming too powerful?",
      answers: ["Checks and balances", "Separation of powers"]
    },
    {
      text: "Who is in charge of the executive branch?",
      answers: ["The President"]
    },
    {
      text: "Who makes the federal laws?",
      answers: [
        "Congress",
        "Senate and House of Representatives",
        "U.S. or national legislature"
      ]
    },
    {
      text: "What are the two parts of the US Congress",
      answers: ["the Senate and the House of Represenatives"]
    },
    {
      text: "How many US senators are there?",
      answers: ["100"]
    },
    {
      text: "We elect a US Senator for how many years?",
      answers: ["6"]
    },
    {
      text: "Who is one of your state's US Senators now?",
      answers: ["Jeff Wilson", "Claire Wilson", "Lynda Wilson"]
    },
    {
      text: "The House of Representatives has how many voting members?",
      answers: ["435"]
    },
    {
      text: "We elect a US representative for how many years?",
      answers: ["2"]
    },
    {
      text: "Name your US Representative",
      answers: ["Pramila Jayapal"]
    },
    {
      text: "Who does a US Senator represent?",
      answers: ["All people of the state"]
    },
    {
      text: "Why do some states have more representatives than other states?",
      answers: ["Because of the state's population"]
    },
    {
      text: "We elect a President for how many years?",
      answers: ["4"]
    },
    {
      text: "In what month do we vote for President",
      answers: ["November"]
    },
    {
      text: "What is the name of the President of the United Stats now?",
      answers: ["Joe Biden", "Joseph Robinette Biden Jr"]
    },
    {
      text: "What is the name of the Vice President of the United States now?",
      answers: ["Kamala Harris"]
    },
    {
      text: "If the President can no longer serve, who becomes President?",
      answers: ["the Vice President"]
    },
    {
      text:
        "If both the President and the Vice President can no longer serve, who becomes President?",
      answers: ["the Speaker of the House"]
    },
    {
      text: "Who is the Commander in Chief of the military?",
      answers: ["the President"]
    },
    {
      text: "Who signs bills to become laws?",
      answers: ["the President"]
    },
    {
      text: "Who vetoes bills?",
      answers: ["the President"]
    },
    {
      text: "What does the President's Cabinet do?",
      answers: ["Advises the President"]
    },
    {
      text: "What are two Cabinet-level positions?",
      answers: [
        "Secretary of Agriculture",
        "Secretary of Commerce",
        "Secretary of Defense",
        "Secretary of Education",
        "Secretary of Energy",
        "Secretery of Health and Human Services",
        "Secretary of Homeland Security",
        "Secretary of Housing and Urban Development",
        "Secretary of the Interior",
        "Secretary of Labor",
        "Secretary of State",
        "Secretary of Transportation",
        "Secretary of the Treasury",
        "Secretary of Veterans Affairs",
        "Attorney General",
        "Vice President"
      ]
    },
    {
      text: "What does the judicial branch do?",
      answers: [
        "Reviews laws",
        "Explains laws",
        "Resolves disputes",
        "Decides ifa law goes against the Constitution"
      ]
    },
    {
      text: "What is the highest court in the United States?",
      answers: ["the Supreme Court"]
    },
    {
      text: "How many justices are on the Supreme Court?",
      answers: ["9"]
    },
    {
      text: "Who is the Chief Justice of the United States now?",
      answers: ["John G. Roberts"]
    },
    {
      text:
        "Under our Constitution, some powers belong to the federal government. What is one power of the federal government?",
      answers: [
        "to Print money",
        "to declare war",
        "to create an army",
        "to make treaties"
      ]
    },
    {
      text:
        "Under our Constitution, some powers belong to the states. What is one power of the states?",
      answers: [
        "Provide schooling and education",
        "provide protection (police)",
        "provide safety (fire departments)",
        "Give a driver's license",
        "Approve zoning and land use"
      ]
    },
    {
      text: "Who is the governor of your state now?",
      answers: ["Jay Inslee"]
    },
    {
      text: "What is the capital of your state?",
      answers: ["Olympia"]
    },
    {
      text: "What are the two major parties in the United States?",
      answers: ["Democratic and Republican"]
    },
    {
      text: "What is the political party of the President now?",
      answers: ["Democratic"]
    },
    {
      text:
        "What is the name of the Speaker of the House of Representatives now?",
      answers: ["Nancy Pelosi"]
    }
  ].map((q) => ({
    ...q,
    category: "American Government",
    subcategory: "B: System of Government"
  }));
