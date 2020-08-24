import React from "react";

//import useIntersectionObserver from "../../../hooks/useIntersectionObserver";
import "./card.css";
//import CardPopper from "../cardPopper/CardPopper";
//import Skeleton from "@material-ui/lab/Skeleton";

const Card = ({ title, path, cardClick }) => {
  const ref = React.useRef();
  const isVisible = true;

  // const [isVisible, setIsVisible] = React.useState(true);

  // #TODO:  Look into Lazy Loading react-lib
  // useIntersectionObserver({
  //   target: ref,
  //   onIntersect: ([{ isIntersecting }], observerElement) => {
  //     if (isIntersecting) {
  //       setIsVisible(true);
  //       observerElement.unobserve(ref.current);
  //     }
  //   },
  // });

  return (
    <div ref={ref} className=" col-4 col-md-3 col-lg-2 poster_container ">
      {isVisible && (
        <img
          src={path}
          onClick={cardClick}
          className="img-fluid poster"
          alt={title}
          data-toggle="tooltip"
          title="<CardPopper />"
        />
      )}
    </div>
  );
};

export default Card;
