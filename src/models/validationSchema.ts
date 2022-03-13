export const fieldValidation = {
  labelInput: {
    setValueAs: (data: string) => data.trim(),
    required: "Field is empty",
    minLength: {
      value: 3,
      message: "Must be more than 3 characters",
    },
    maxLength: {
      value: 15,
      message: "Must be less than 15 characters",
    },
  },
  numberInput: {
    setValueAs: (data: string) => {
      return +data;
    },
  },
  dateInput: {
    valueAsDate: true,
  },
};
