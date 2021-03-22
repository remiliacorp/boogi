import defaultColors from './colors';

const colors = {
  ...defaultColors,

  primary: defaultColors.orange,
  primaryDark: defaultColors.orangeLight,
  font: '#008000',
  fontDark: '#121213',
  background: '#026a02',
  mainBackground: '#faf8ab',
  border: '#9a9a9a',
  hover: defaultColors.orange,
  shadow: defaultColors.gray + '33',
};

export default {
  colors: colors,
};
