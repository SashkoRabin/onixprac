export const stringToColor = (str) => {
  let hash = 0;
  let color = '#';
  let i;
  let value;
  let strLength = str.length;
  if (!str) {
    return color + '333333';
  }
  for (i = 0; i < strLength; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  for (i = 0; i < 3; i++) {
    value = (hash >> (i * 8)) & 0xff;
    color += ('00' + value.toString(16)).substring(-6);
  }
  color = color.slice(-8);
  return color;
};
