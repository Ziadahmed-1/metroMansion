"use client";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = ({ card }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: Event) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  console.log(card.src);
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      transition={{ duration: 0.5 }}
      variants={{
        visible: { opacity: 1, scale: 1, y: 0 },
        hidden: { opacity: 0, scale: 0, y: 200 },
      }}
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative h-96 w-72 rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300 text-black"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg"
      >
        <Image
          style={{
            borderRadius: "5px",
            transform: "translateZ(75px)",
            marginBottom: "6px",
            margin: "auto",
            height: "10rem",
          }}
          src={card.src}
          width={300}
          height={500}
          alt="Card image"
        />

        <p
          style={{
            transform: "translateZ(50px)",
            marginTop: "8px",
          }}
          className="text-center text-2xl font-extrabold h-2/3 "
        >
          {card.title}
          <span className="text-xl inline-block mt-2 text-balance font-semibold ">
            {card.description}
          </span>
        </p>
      </div>
    </motion.div>
  );
};

export default TiltCard;
