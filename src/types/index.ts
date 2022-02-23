export interface ICategory {
  id: string;
  label: string;
}

export interface ITransaction {
  id: string;
  label: string;
  date: string;
  amount: number;
  category: string;
}
