import defaultColors from './colors';

const colors = {
  ...defaultColors,

  primary: defaultColors.black,
  primaryDark: defaultColors.red,
  font: '#000000',
  fontDark: '#008000',
  background: '#ffffe0',
  mainBackground: '#ffffe0',
  border: '#000000',
  hover: defaultColors.black,
  shadow: defaultColors.black + '33',
};

export default {
  colors: colors,
};
