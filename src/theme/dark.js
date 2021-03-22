import defaultColors from './colors';

const colors = {
  ...defaultColors,

  primary: defaultColors.orange,
  primaryDark: defaultColors.blue,
  font: '#f3f3f3',
  fontDark: '#ffffff',
  background: '#000000',
  mainBackground: '#303022',
  border: '#ffb500',
  hover: defaultColors.orange,
  shadow: defaultColors.gray + '33',
};

export default {
  colors: colors,
};
