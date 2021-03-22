import defaultColors from './colors';

const colors = {
  ...defaultColors,

  primary: defaultColors.white,
  primaryDark: defaultColors.white,
  font: '#008000',
  fontDark: '#121213',
  background: '#ffffe0',
  mainBackground: '#ffffe0',
  border: '#9a9a9a',
  hover: defaultColors.white,
  shadow: defaultColors.yellow + '33',
};

export default {
  colors: colors,
};
