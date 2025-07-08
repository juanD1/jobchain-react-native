import {useState} from 'react';

const EMPTY_VALUE = '';

const useInput = () => {
  const [value, setValue] = useState(EMPTY_VALUE);
  const [isFocus, setIsFocus] = useState(false);

  const handleOnChange = (value: string) => {
    setValue(value);
  };

  const handleClear = () => {
    setValue(EMPTY_VALUE);
  };

  const handleOnFocus = () => {
    setIsFocus(!isFocus);
  };

  return {value, isFocus, handleOnChange, handleClear, handleOnFocus};
};

export default useInput;
