import { Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Description from "@/components/Description";
import Details from "@/components/Details";
import PhotoSlider from "@/components/PhotoSlider";
import ContactInfo from "@/components/ContactInfo";
import { notFound } from "next/navigation";
import ToggleProprtyList from "@/components/ToggleProprtyList";
import PropertyImage from "@/components/PropertyImage";

const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "2322a1681bmsh10ca76e689ff844p19faa6jsn929ecd5397f8",
    "x-rapidapi-host": "bayut.p.rapidapi.com",
  },
};

const page = async function ({ params }) {
  const propertID = params.id;
  const url = `https://bayut.p.rapidapi.com/properties/detail?externalID=${propertID}`;

  const res = await fetch(url, options);
  if (res.status !== 200) {
    notFound();
  }
  const property = await res.json();

  return (
    <Container className="mb-10 ">
      <Stack className="relative" justifyContent="center" direction="column">
        <PropertyImage src={property.coverPhoto.url} />
        <ToggleProprtyList property={property} />
        <Typography
          component="h2"
          mb={4}
          className="font-semibold"
          textAlign="center"
          sx={{ typography: { xs: "h6", md: "h4" } }}
        >
          {property.title}
        </Typography>
        <Typography
          className="mb-4"
          component="h2"
          textAlign="start"
          sx={{
            typography: { xs: "h6", md: "h4" },
            fontWeight: { xs: 600, md: 100 },
          }}
        >
          Description
        </Typography>
        <Description description={property.description} />
      </Stack>
      <Typography
        mt={8}
        component="h2"
        textAlign="start"
        sx={{
          typography: { xs: "h6", md: "h4" },
          fontWeight: { xs: 600, md: 100 },
        }}
      >
        Details
      </Typography>
      <Details property={property} />
      <Typography
        mt={8}
        component="h2"
        textAlign="start"
        sx={{
          typography: { xs: "h6", md: "h4" },
          fontWeight: { xs: 600, md: 100 },
        }}
      >
        Gallery
      </Typography>
      <PhotoSlider images={property.photos} />
      <Typography
        mt={8}
        component="h2"
        textAlign="start"
        sx={{
          typography: { xs: "h6", md: "h4" },
          fontWeight: { xs: 600, md: 100 },
        }}
      >
        Contact Info
      </Typography>
      <ContactInfo property={property} />
    </Container>
  );
};

export default page;
