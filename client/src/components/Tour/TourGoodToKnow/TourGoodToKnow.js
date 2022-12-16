/* eslint-disable react/prop-types */
import "./TourGoodToKnow.sass";

// eslint-disable-next-line react/prop-types
const TourGoodToKnow = ({ included, notincluded }) => {
  return (
    <div className="tour_good_to_know">
      <h3>Good to know</h3>
      <div className="tour_good_to_know_subtitle">
        <span>Что входит в тур</span>
        {included?.map((item) => {
          return (
            <div className="tour_good_to_know_yes" key={item}>
              {item}
            </div>
          );
        })}
      </div>
      <div className="tour_good_to_know_subtitle">
        <span>Что не входит в тур</span>
        {notincluded?.map((item) => {
          return (
            <div className="tour_good_to_know_no" key={item}>
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TourGoodToKnow;
