import { Box, Stack } from "@mui/material";
import AnimatedOverviewHeading from "./AnimatedOverviewHeading";
import TiltCard from "./TilitCard";

const cardsData = [
  {
    id: 1,
    src: "/cards/firstCard.jpg",
    title: "Full Specifications",
    description: "Room dimensions, amenities, and unique features.",
  },
  {
    id: 2,
    src: "/cards/secondCard.jpg",
    title: "High-Quality Photos",
    description:
      "Extensive galleries to give you a true feel for your potential new home.",
  },
  {
    id: 3,
    src: "/cards/thirdCard.jpg",
    title: "Nearby Schools",
    description: "Detailed local school data for choosing the best education.",
  },
  {
    id: 4,
    src: "/cards/forthCard.jpeg",
    title: "Walk, Bike, and Transit Scores",
    description:
      "Check walk, bike, and transit scores to match your lifestyle.",
  },
];
const Overview = function () {
  return (
    <Stack color="white">
      <Box mt={4}>
        <AnimatedOverviewHeading />
      </Box>
      <Stack
        mt={4}
        direction="row"
        justifyContent="center"
        flexWrap="wrap"
        gap={4}
      >
        {cardsData.map((card) => (
          <TiltCard key={card.id} card={card} />
        ))}
      </Stack>
    </Stack>
  );
};

export default Overview;
