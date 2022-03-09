import React, { Dispatch, SetStateAction, useCallback, useState } from "react";

export const useInputState = <T, K extends React.BaseSyntheticEvent>(
  initState: T,
  formatValue: (state: K["target"]["value"]) => T = (state) => state
): [T, (event: K) => void, Dispatch<SetStateAction<T>>] => {
  const [value, setValue] = useState<T>(initState);

  const setInput = useCallback(
    (event: K) => {
      setValue(formatValue((event.target as HTMLInputElement).value));
    },
    [formatValue]
  );

  return [value, setInput, setValue];
};
