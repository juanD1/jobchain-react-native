import {Pressable, View} from 'react-native';
import styles from './styles';
import TextBox from '@Components/TextBox';
import Button from '@Components/Button';
import useInput from '../../../hooks/useInput';

const Form = () => {
  const {
    value,
    isFocus,
    handleOnChange,
    handleClear,
    handleOnFocus,
    handleOnBlur,
  } = useInput();

  return (
    <Pressable style={styles.wrapper} onPress={handleOnBlur}>
      <View style={styles.container}>
        <TextBox
          value={value}
          isFocus={isFocus}
          handleOnChange={handleOnChange}
          handleOnFocus={handleOnFocus}
        />
        {isFocus && value && <Button handleOnPress={handleClear} />}
      </View>
    </Pressable>
  );
};

export default Form;
