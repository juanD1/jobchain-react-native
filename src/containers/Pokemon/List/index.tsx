import {View} from 'react-native';
import styles from './styles';
import TextBox from '@Components/TextBox';
import Button from '@Components/Button';
import useInput from '../../../hooks/useInput';

const PokemonList = () => {
  const {value, isFocus, handleOnChange, handleClear, handleOnFocus} =
    useInput();

  return (
    <View style={styles.container}>
      <TextBox
        value={value}
        isFocus={isFocus}
        handleOnChange={handleOnChange}
        handleOnFocus={handleOnFocus}
      />
      {isFocus && <Button handleOnPress={handleClear} />}
    </View>
  );
};

export default PokemonList;
