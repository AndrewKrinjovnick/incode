import React, { FC, useState, useEffect } from "react";
import { AddCategoryForm } from "../AddCategoryForm/AddCategoryForm";
import { Category } from "../Category/Category";
import { useAppSelector } from "../../hooks";
import { EditCategoryForm } from "../EditCategoryForm/EditCategoryForm";
import { ICategoryIdentifier, ID } from "../../types";

export const CategoryList: FC = () => {
  const [initState, setInitState] = useState<ICategoryIdentifier>({});
  const { allCategories } = useAppSelector((state) => state.categories);
  const [isCategoryOpen, setIsCategoryOpen] = useState<ICategoryIdentifier>({});

  useEffect(() => {
    const obj: ICategoryIdentifier = {};
    allCategories.forEach((category) => {
      obj[category.id] = true;
    });
    setInitState(obj);
    setIsCategoryOpen(obj);
  }, [allCategories]);

  const onEditButtonClick = (id: ID = "") => {
    if (id) {
      setIsCategoryOpen({
        ...initState,
        [id]: false,
      });
      return;
    }
    setIsCategoryOpen({
      ...initState,
    });
  };

  return (
    <>
      <AddCategoryForm />
      {allCategories.map((category, index) =>
        isCategoryOpen[category.id] ? (
          <Category
            key={category.label}
            category={category}
            disableButtons={!index}
            onEditButtonClick={() => onEditButtonClick(category.id)}
          />
        ) : (
          <EditCategoryForm
            key={category.label}
            category={category}
            onEditButtonClick={() => onEditButtonClick()}
          />
        )
      )}
    </>
  );
};
