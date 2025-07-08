import {StyleSheet} from 'react-native';

const PRIMARY_COLOR = '#141534';
const SPACE_CADET_COLOR = '#1D1C47';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    height: 60,
    paddingHorizontal: 20,
    paddingVertical: 10,
    margin: 16,
    borderRadius: 15,
    backgroundColor: PRIMARY_COLOR,
    borderWidth: 1.5,
    borderColor: SPACE_CADET_COLOR,
  },
});

export default styles;
