import {Text, TextInput, View} from 'react-native';
import {PLACEHOLDER_COLOR, styles} from './styles.ts';

interface ITextBox {
  value: string;
  isFocus: boolean;
  handleOnChange: (value: string) => void;
  handleOnFocus: () => void;
}

const PLACEHOLDER = 'Escribe tu correo electrónico';
const EMPTY_PLACEHOLDER = '';
const LABEL = 'Correo electrónico';

const TextBox = ({value, isFocus, handleOnChange, handleOnFocus}: ITextBox) => (
  <View style={styles.container}>
    {isFocus && <Text style={styles.label}>{LABEL}</Text>}
    <TextInput
      style={styles.inputContainer}
      value={value}
      placeholder={isFocus ? EMPTY_PLACEHOLDER : PLACEHOLDER}
      placeholderTextColor={PLACEHOLDER_COLOR}
      onChangeText={handleOnChange}
      onFocus={handleOnFocus}
    />
  </View>
);

export default TextBox;
