"use client";
import "@/app/globals.css";
import PropertyCard from "@/components/PropertyCard";
import { Box, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "2322a1681bmsh10ca76e689ff844p19faa6jsn929ecd5397f8",
    "x-rapidapi-host": "bayut.p.rapidapi.com",
  },
};

function PropriesSection({ initialProperties }) {
  const [properties, setProperties] = useState(initialProperties || []);

  useEffect(() => {
    if (properties.length === 0) {
      // Fallback fetching data client-side
      const fetchData = async () => {
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
        const forRentData = data1.hits.slice(0, 6);
        const forSaleData = data2.hits.slice(0, 6);
        setProperties([...forRentData, ...forSaleData]);
      };
      fetchData();
    }
  }, []);

  return (
    <Box color="#eee" component="aside">
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
        {properties.length > 0 ? (
          properties.map((property) => (
            <PropertyCard key={property.externalID} property={property} />
          ))
        ) : (
          <div className="loader my-10"></div>
        )}
      </Stack>
    </Box>
  );
}

export async function getServerSideProps() {
  let properties = [];

  try {
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
    const forRentData = data1.hits.slice(0, 6);
    const forSaleData = data2.hits.slice(0, 6);
    properties = [...forRentData, ...forSaleData];
  } catch (error) {
    console.error("Error fetching properties:", error);
  }

  return {
    props: {
      initialProperties: properties,
    },
  };
}

export default PropriesSection;
