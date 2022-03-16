export type ID = string;

export interface ICategory {
  id: ID;
  label: string;
}

export interface ITransaction {
  id: ID;
  label: string;
  date: string | Date;
  amount: number | string;
  category: ID;
}

export interface IEditCategoryFormInputProps {
  label: string;
}
