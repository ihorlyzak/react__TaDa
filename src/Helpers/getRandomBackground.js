import { authBackgrounds } from 'Assets/Images/Auth';

export const getRandomBackground = () => {
  const randomImageId = Math.floor(
    Math.random() * authBackgrounds.length - 1 + 1,
  );
  return authBackgrounds[randomImageId];
};
