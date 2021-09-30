export const getRandom01 = () => Math.floor(Math.random() * 2);

export const getPlaceholderImageStyle = () => {
  return getRandom01() == 0 ? "placeholder-image-v" : "placeholder-image-h";
};
