const BookProgress = () => {
  const porcentage = 30;
  const degValue = (180 / 100) * porcentage;
  console.log(porcentage);
  return (
    <div className="book-progress">
      <div className="circle-wrap">
        <div className="circle">
          <div className="mask full">
            <div className="fill" style={{ transform: `rotate(${degValue}deg)` }} />
          </div>
          <div className="mask half" style={{ transform: `rotate(${degValue}deg)` }}>
            <div className="fill" style={{ transform: `rotate(${degValue}deg)` }} />
          </div>
          <div className="inside-circle progress-h2">
            {porcentage}
            %
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookProgress;
