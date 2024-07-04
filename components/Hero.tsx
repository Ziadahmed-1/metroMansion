import heroImage from "@/public/hero.jpg";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import AnimatedCounter from "./AnimatedCounter";
import AnimatedHeroText from "./AnimatedHeroText";

const statsData = [
  { number: 3200, firstLine: "Properties", secondLine: "Sold" },
  { number: 4500, firstLine: "Happy", secondLine: "Customers" },
  { number: 100, firstLine: "Awards", secondLine: "Won" },
];
const Hero = function () {
  return (
    <Box component="section" py={10} color="white">
      <Grid
        container
        spacing={2}
        sx={{
          flexDirection: { xs: "column-reverse", md: "row" },
        }}
      >
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "baseline" },
            }}
          >
            <AnimatedHeroText />

            <Box
              mt={6}
              justifyContent="space-between"
              alignItems="center"
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                textAlign: { xs: "center", sm: "start" },
                pr: { md: "6rem" },
                rowGap: "1.5em",
                width: "100%",
              }}
            >
              {statsData.map((col) => (
                <Box key={col.firstLine}>
                  <Typography
                    mb={1}
                    sx={{ typography: { xs: "h4", md: "h5" } }}
                    component="p"
                  >
                    <AnimatedCounter from={0} to={col.number} />
                    <Typography
                      component="span"
                      fontWeight="600"
                      color="#2B8CD9"
                      variant="h5"
                    >
                      +
                    </Typography>
                  </Typography>
                  <Typography variant="h6" lineHeight="1" component="p">
                    {col.firstLine}
                  </Typography>
                  <Typography variant="h6" lineHeight="2" component="p">
                    {col.secondLine}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} className="overflow-hidden rounded-md  ">
          <Image
            className="rounded-md"
            style={{ objectFit: "cover" }}
            src={heroImage}
            width={1000}
            alt="hero-image"
            placeholder="blur"
            priority
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
