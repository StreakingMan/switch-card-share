export interface Card {
  name: string;
  owner: string;
  borrower?: string;
}

export const cards: Card[] = [
  {
    name: "分手厨房1",
    owner: "叶超",
    borrower: undefined,
  },
  {
    name: "分手厨房2",
    owner: "叶超",
    borrower: undefined,
  },
  {
    name: "双人成行",
    owner: "张境界",
    borrower: undefined,
  },
  {
    name: "马里奥派对",
    owner: "张境界",
    borrower: undefined,
  },
  {
    name: "马里奥兄弟",
    owner: "张境界",
    borrower: undefined,
  },
  {
    name: "马里奥赛车8",
    owner: "粤哥",
    borrower: undefined,
  },
  {
    name: "马里奥奥德赛",
    owner: "粤哥",
    borrower: undefined,
  },
];
