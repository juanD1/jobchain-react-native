import {Image, Pressable} from 'react-native';
import CloseIcon from '@Assets/close-icon.png';
import styles from './styles';

interface IButton {
  handleOnPress: () => void;
}

const Button = ({handleOnPress}: IButton) => (
  <Pressable style={styles.container} onPress={handleOnPress}>
    <Image style={styles.img} source={CloseIcon} resizeMode="contain" />
  </Pressable>
);

export default Button;
