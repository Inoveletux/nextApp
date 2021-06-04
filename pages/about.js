import React from "react";
import { useAmp } from "next/amp";

export const config = { amp: "hybrid" };

function About(props) {
  const isAmp = useAmp();
  return (
    <div>
      {isAmp ? (
        <amp-img
          width="300"
          height="300"
          src="/suv.png"
          alt="a cool image"
          layout="responsive"
        />
      ) : (
        <img width="300" height="300" src="/suv.png" alt="a cool image" />
      )}
    </div>
  );
}
export default About;
