import {StyleSheet} from 'react-native';

const PRIMARY_COLOR = '#141534';
const SPACE_CADET_COLOR = '#1D1C47';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 60,
    padding: 16,
    margin: 16,
    borderRadius: 15,
    backgroundColor: PRIMARY_COLOR,
    borderWidth: 1.5,
    borderColor: SPACE_CADET_COLOR,
  },
});

export default styles;
