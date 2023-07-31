const RatingStar = ({ rating = 0 }: { rating: number }) => {
  rating = Math.round(rating);
  const stars = [];
  for (let i = 1; i < 6; i++) {
    if (i === rating) {
      stars.push(
        <input
          type="radio"
          name="rating-4"
          className="mask mask-star-2 bg-green-500"
          checked
        />
      );
    } else if (i < rating && i + 1 > rating) {
      stars.push(
        <input
          type="radio"
          name="rating-4"
          className="mask mask-star-2 mask-half-1 bg-green-500"
          checked
        />
      );
    } else {
      stars.push(
        <input
          type="radio"
          name="rating-4"
          className="mask mask-star-2 bg-green-500"
        />
      );
    }
  }
  return <div className="rating">{stars.map((star) => star)}</div>;
};

export default RatingStar;
