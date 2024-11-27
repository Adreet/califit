import loadingGif from '../assets/preloader.gif'; // Adjust path to where the GIF is stored

const Preloader = () => {
  return (
    <div className="preloader">
      <img src={loadingGif} alt="Loading..." className="preloader-gif" />
    </div>
  );
};

export default Preloader;
