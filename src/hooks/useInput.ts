import {useState} from 'react';
import {Keyboard} from 'react-native';

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
    setIsFocus(true);
  };

  const handleOnBlur = () => {
    setIsFocus(false);
    Keyboard.dismiss();
  };

  return {
    value,
    isFocus,
    handleOnChange,
    handleClear,
    handleOnFocus,
    handleOnBlur,
  };
};

export default useInput;
