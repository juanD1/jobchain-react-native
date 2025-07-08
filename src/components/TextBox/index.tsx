import {TextInput} from 'react-native';
import {styles} from './styles.ts';

interface ITextBox {
  value: string;
  handleOnChange: (value: string) => void;
  handleOnFocus: () => void;
}

const TextBox = ({value, handleOnChange, handleOnFocus}: ITextBox) => (
  <TextInput
    style={styles.container}
    value={value}
    onChangeText={handleOnChange}
    onFocus={handleOnFocus}
  />
);

export default TextBox;
