export type ID = string;

export interface ICategory {
  id: ID;
  label: string;
}

export interface ITransaction {
  id: ID;
  label: string;
  date: string;
  amount: number | string;
  category: string;
}
