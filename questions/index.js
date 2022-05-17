import { getQuestions as getAgA } from "./ag-a";
import { getQuestions as getAgB } from "./ag-b";
import { getQuestions as getAgC } from "./ag-c";
import { getQuestions as getAhA } from "./ah-a";
import { getQuestions as getAhB } from "./ah-b";
import { getQuestions as getAhC } from "./ah-c";
import { getQuestions as getInA } from "./in-a";
import { getQuestions as getInB } from "./in-b";
import { getQuestions as getInC } from "./in-c";

export const getQuestions = () =>
  [
    ...getAgA(),
    ...getAgB(),
    ...getAgC(),
    ...getAhA(),
    ...getAhB(),
    ...getAhC(),
    ...getInA(),
    ...getInB(),
    ...getInC()
  ].map((q, i) => ({
    ...q,
    index: i + 1
  }));
