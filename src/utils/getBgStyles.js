export const getBgStyles = backgroundUrl => {
  const authBackground = {
    background: `linear-gradient(0deg, rgba(0,0,0,0.3),rgba(0,0,0,0.3)), url(${backgroundUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return authBackground;
};
