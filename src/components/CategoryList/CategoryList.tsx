import React, { FC, useState, useCallback } from "react";
import { AddCategoryForm } from "../AddCategoryForm/AddCategoryForm";
import { Category } from "../Category/Category";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { EditCategoryForm } from "../EditCategoryForm/EditCategoryForm";
import { ID, IEditCategoryFormInputProps } from "../../types";
import {
  removeCategory,
  updateCategory,
} from "../../store/slices/categorySlice";

export const CategoryList: FC = () => {
  const { allCategories } = useAppSelector((state) => state.categories);
  const [isCategoryOpen, setIsCategoryOpen] = useState<ID | null>(null);

  const dispatch = useAppDispatch();

  const onDeleteButtonClick = useCallback(
    (id: ID = "") =>
      () => {
        dispatch(removeCategory(id));
      },
    [dispatch]
  );

  const onEditButtonClick = useCallback(
    (id: ID) => () => {
      setIsCategoryOpen(id);
    },
    [setIsCategoryOpen]
  );

  const onEditFormSubmit = useCallback(
    (id: ID) => (data: IEditCategoryFormInputProps) => {
      dispatch(updateCategory({ id, label: data.label }));
      setIsCategoryOpen(null);
    },
    [dispatch]
  );

  return (
    <>
      <AddCategoryForm />
      {allCategories.map((category, index) =>
        category.id !== isCategoryOpen ? (
          <Category
            key={category.label}
            category={category}
            disableButtons={!index}
            onEditButtonClick={onEditButtonClick(category.id)}
            onDeleteButtonClick={onDeleteButtonClick(category.id)}
          />
        ) : (
          <EditCategoryForm
            key={category.label}
            category={category}
            onEditFormSubmit={onEditFormSubmit(category.id)}
          />
        )
      )}
    </>
  );
};
