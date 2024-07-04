import "@/app/globals.css";
import Image from "next/image";
import { Suspense } from "react";

const ImageAsync = async ({ src, alt, ...props }) => {
  //   return <Image src={src} alt={alt} {...props} />
  return <Image src={src} alt={alt} {...props} />;
};

function PropertyImage({ src }) {
  return (
    <>
      <Suspense fallback={<div className="loader"></div>}>
        <ImageAsync
          priority
          className="mb-8 h-[22rem] md:h-[34rem] w-auto"
          alt="property image"
          src={src}
          width={1200}
          height={500}
        />
      </Suspense>{" "}
    </>
  );
}

export default PropertyImage;
