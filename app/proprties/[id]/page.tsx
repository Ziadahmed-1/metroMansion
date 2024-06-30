import { Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Description from "@/components/Description";
import Details from "@/components/Details";
import PhotoSlider from "@/components/PhotoSlider";
import ContactInfo from "@/components/ContactInfo";
import { notFound } from "next/navigation";
import ToggleProprtyList from "@/components/ToggleProprtyList";

const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "19c3dfc052mshde51ad4655f3c6ep1b6885jsn5505e15d731a",
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
    <Container className="mb-10">
      <Stack className="relative" justifyContent="center" direction="column">
        <Image
          priority
          className="mb-8 h-[34rem]"
          alt="property image"
          src={property.coverPhoto.url}
          width={1200}
          height={500}
          placeholder="blur"
          blurDataURL="https://ajsrp.com/wp-content/uploads/2022/10/placeholder.png"
        />
        <ToggleProprtyList />
        <Typography
          component="h2"
          mb={4}
          className="font-semibold"
          textAlign="center"
          sx={{ typography: { xs: "h5", md: "h4" } }}
        >
          {property.title}
        </Typography>
        <Typography component="h2" textAlign="start" variant="h4">
          Description
        </Typography>
        <Description description={property.description} />
      </Stack>
      <Typography mt={8} component="h2" textAlign="start" variant="h4">
        Details
      </Typography>
      <Details property={property} />
      <Typography mt={8} component="h2" textAlign="start" variant="h4">
        Gallery
      </Typography>
      <PhotoSlider images={property.photos} />
      <Typography mt={8} component="h2" textAlign="start" variant="h4">
        Contact Info
      </Typography>
      <ContactInfo property={property} />
    </Container>
  );
};

export default page;
