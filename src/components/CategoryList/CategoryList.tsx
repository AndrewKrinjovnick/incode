import React, { FC, useState, useEffect } from "react";
import { AddCategoryForm } from "../AddCategoryForm/AddCategoryForm";
import { Category } from "../Category/Category";
import { useAppSelector } from "../../hooks";
import { EditCategoryForm } from "../EditCategoryForm/EditCategoryForm";
import { ICategoryIdentifier } from "../../types";

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

  return (
    <>
      <AddCategoryForm />
      {allCategories.map((category, index) =>
        isCategoryOpen[category.id] ? (
          <Category
            key={category.label}
            category={category}
            index={index}
            openEditForm={(state) => setIsCategoryOpen(state)}
            defaultOpenValue={initState}
          />
        ) : (
          <EditCategoryForm
            key={category.label}
            category={category}
            closeEditForm={(state) => setIsCategoryOpen(state)}
            defaultOpenValue={initState}
          />
        )
      )}
    </>
  );
};
