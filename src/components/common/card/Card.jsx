import React from "react";
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";
import "./card.css";

const Card = ({ title, path }) => {
  const ref = React.useRef();
  const [isVisible, setIsVisible] = React.useState(false);

  useIntersectionObserver({
    target: ref,
    onIntersect: ([{ isIntersecting }], observerElement) => {
      if (isIntersecting) {
        setIsVisible(true);
        observerElement.unobserve(ref.current);
      }
    },
  });

  return (
    <div
      ref={ref}
      // key={`card${data.id}`}
      className=" col-4 col-md-3 col-lg-2 poster_container "
    >
      {isVisible && (
        <img
          // key={data.id}
          src={path}
          className="img-fluid poster"
          alt={title}
        />
      )}
    </div>
  );
};

export default Card;
