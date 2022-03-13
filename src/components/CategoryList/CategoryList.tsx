import React, { FC, useState, useCallback } from "react";
import { AddCategoryForm } from "../AddCategoryForm/AddCategoryForm";
import { Category } from "../Category/Category";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { EditCategoryForm } from "../EditCategoryForm/EditCategoryForm";
import {
  ICategoryIdentifier,
  ID,
  IEditCategoryFormInputProps,
} from "../../types";
import {
  removeCategory,
  updateCategory,
} from "../../store/slices/categorySlice";

export const CategoryList: FC = () => {
  const { allCategories } = useAppSelector((state) => state.categories);
  const [isCategoryOpen, setIsCategoryOpen] = useState<ICategoryIdentifier>({});

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
      setIsCategoryOpen({
        [id]: true,
      });
    },
    [setIsCategoryOpen]
  );

  const onEditFormSubmit = useCallback(
    (id: ID) => (data: IEditCategoryFormInputProps) => {
      dispatch(updateCategory({ id, label: data.label }));
      setIsCategoryOpen({});
    },
    [dispatch]
  );

  return (
    <>
      <AddCategoryForm />
      {allCategories.map((category, index) =>
        !isCategoryOpen[category?.id] ? (
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
