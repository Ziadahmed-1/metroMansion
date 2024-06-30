import { Typography, Box, Stack } from "@mui/material";
import React from "react";
import PropertyCard from "./PropertyCard";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "19c3dfc052mshde51ad4655f3c6ep1b6885jsn5505e15d731a",
    "x-rapidapi-host": "bayut.p.rapidapi.com",
  },
};

async function PropriesSection() {
  let properties = [];

  const res1 = await fetch(
    "https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002%2C6020&hitsPerPage=9&page=0&lang=en&sort=city-level-score&categoryExternalID=4",
    options
  );
  const res2 = await fetch(
    "https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002%2C6020&purpose=for-sale&hitsPerPage=25&page=0&lang=en&sort=city-level-score&rentFrequency=monthly&categoryExternalID=4",
    options
  );

  const data1 = await res1.json();
  const data2 = await res2.json();
  const forRentData = await data1.hits.slice(0, 6);
  const forSaleData = await data2.hits.slice(0, 6);
  properties.push(...forRentData, ...forSaleData);
  return (
    <Box color="#eee">
      <Typography
        component="h2"
        sx={{ typography: { xs: "h4", md: "h3" } }}
        variant="h3"
        lineHeight={1.3}
        textAlign="center"
        mb={6}
      >
        Explore Our Latest Listings
      </Typography>
      <Stack direction="row" justifyContent="center" gap={2} flexWrap="wrap">
        {properties.map((property) => (
          <PropertyCard key={property.externalID} property={property} />
        ))}
      </Stack>
    </Box>
  );
}

export default PropriesSection;
