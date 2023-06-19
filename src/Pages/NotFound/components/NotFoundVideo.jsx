import { NotFounDino } from 'assets/videos';

export const NotFoundVideo = () => {
  return (
    <video
      src={NotFounDino}
      type='video/mp4'
      autoPlay
      loop
      muted
      style={{
        borderRadius: '45%',
        height: '45%',
      }}
    ></video>
  );
};
