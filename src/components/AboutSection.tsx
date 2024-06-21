import Image from "next/image";
import React from "react";

export default function AboutSection(props:any) {
  return (
    <div className="container mx-auto px-4">
      {props.i === "1" && (
        <div className="grid grid-cols-12">
          <Image src={props.img} alt="" className="col-span-6 w-full" data-aos="fade-right" width={300} height={300} />
          <p className="text-base md:text-lg p-4 col-span-6" data-aos="fade-left">{props.text}</p>
        </div>
      )}
      {props.i === "2" && (
        <div className="grid grid-cols-12">
        <p className="text-base md:text-lg p-4 col-span-6" data-aos="fade-left">{props.text}</p>
        <Image src={props.img} alt="" className="col-span-6 w-full" data-aos="fade-right" width={300} height={300} />
      </div>
      )}
    </div>
  );
}
