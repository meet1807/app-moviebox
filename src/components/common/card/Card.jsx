import React from "react";
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";
import "./card.css";

const Card = ({ data }) => {
  const ref = React.useRef();
  const [isVisible, setIsVisible] = React.useState(false);

  // useIntersectionObserver(
  //   {
  //     target: ref,
  //     onIntersect: ([{ isIntersecting }], observerElement) => {
  //       if (isIntersecting) {
  //         setIsVisible(true);
  //         observerElement.unobserve(ref.current);
  //       }
  //     },
  //   },
  //   console.log(ref)
  // );

  const baseURL = "https://image.tmdb.org/t/p/original";

  return data.map((data) => (
    <div
      ref={ref}
      key={`card${data.id}`}
      className=" col-4 col-md-3 col-lg-2 poster_container "
    >
      {/* <div style={{ display: "flex", flexDirection: "column" }}> */}
      <img
        key={data.id}
        src={`${baseURL}${data.poster_path}`}
        className="img-fluid poster"
        alt={data.name}
      />
      {/* </div> */}
    </div>
  ));
};

export default Card;
