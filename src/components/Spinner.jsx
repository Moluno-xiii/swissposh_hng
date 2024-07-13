const Spinner = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center backdrop-blur-sm md:backdrop-blur-lg">
      <div className="dots-3 flex items-center justify-center backdrop-blur-sm md:backdrop-blur-lg"></div>
    </div>
  );
};

export default Spinner;