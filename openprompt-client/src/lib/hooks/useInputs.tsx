import { useState } from 'react';

type ReturnTypes<T = any> = [
  T,
  (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => void,
  () => void,
];

export const useInputs = <
  T extends Record<string, unknown> = Record<string, unknown>,
>(
  initialValue: T,
): ReturnTypes<T> => {
  const [values, setValues] = useState<T>(initialValue);

  const onChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    if ((event.target as HTMLInputElement).files) {
      const files = (event.target as HTMLInputElement).files;
      if (files && files.length > 0) {
        setValues({
          ...values,
          [name]: files[0],
        });
      }
    } else {
      setValues({
        ...values,
        [name]: value,
      });
    }
  };

  const onInit = () => {
    setValues(initialValue);
  };

  return [values, onChange, onInit];
};
