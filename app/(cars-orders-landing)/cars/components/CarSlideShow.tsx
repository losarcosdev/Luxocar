"use client";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";

interface Props {
  images: string[];
}

export const CarSlideShow = ({ images }: Props) => {
  return (
    <Slide easing="ease" duration={100} autoplay={false}>
      {images.map((image) => {
        return (
          <div
            key={image}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
            }}
            className="flex justify-center bg-contain bg-center h-[50vh]"
          ></div>
        );
      })}
    </Slide>
  );
};
