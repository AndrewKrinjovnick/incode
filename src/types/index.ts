export type ID = string;
export type nameOfCategory = string;

export interface ICategory {
  id: ID;
  label: nameOfCategory;
}

export interface ITransaction {
  id: ID;
  label: string;
  date: string;
  amount: number | string;
  category: string;
}
