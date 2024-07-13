const Spinner = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-slate-200/20 backdrop-blur-sm">
      <div className="dots-3 flex items-center justify-center"></div>
    </div>
  );
};

export default Spinner;