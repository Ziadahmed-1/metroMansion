import { Container, Paper, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

function page() {
  const team = [
    { name: "John Doe", title: "CEO & Co-Founder", img: "/team/first.jpg" },
    {
      name: "Randy Smith",
      title: "CTO & Co-Founder",
      img: "/team/second.webp",
    },
    { name: "Michael Brown", title: "Head of Sales", img: "/team/third.jpg" },
  ];
  const features = [
    {
      title: "Extensive Listings",
      description:
        "We provide a vast database of properties for sale and rent, ensuring you can find the perfect place that meets your needs and budget.",
    },
    {
      title: "Advanced Search Tools",
      description:
        "Our advanced search filters and intuitive interface make it easy to find exactly what you’re looking for. ",
    },
    {
      title: "Expert Advice",
      description:
        "Our team of real estate professionals is always available to offer expert advice and support throughout your property journey.",
    },
    {
      title: "Market Insights",
      description:
        "Stay informed with the latest market trends, price comparisons, and neighborhood insights to make well-informed decisions.",
    },
  ];
  return (
    <Container maxWidth="xl">
      <Typography
        mt={6}
        mb={2}
        sx={{ typography: { xs: "h5", md: "h4" } }}
        className="font-semibold"
        component="h2"
      >
        About MetroMansion
      </Typography>
      <Typography sx={{ typography: { xs: "body1", md: "h5" } }}>
        At MetroMansion, our mission is to revolutionize the real estate
        experience by offering comprehensive, user-friendly, and reliable
        services that connect people to their dream homes. We aim to make home
        buying, selling, and renting as seamless and enjoyable as possible.
      </Typography>
      <Typography
        mt={6}
        mb={2}
        sx={{ typography: { xs: "h5", md: "h4" } }}
        className="font-semibold"
        component="h2"
      >
        Our Story
      </Typography>
      <Typography sx={{ typography: { xs: "body1", md: "h5" } }}>
        MetroMansion was founded in 2023 by a group of real estate enthusiasts
        and tech innovators who saw the need for a more transparent and
        efficient way to navigate the property market. With years of combined
        experience in the real estate and technology sectors, our founders set
        out to create a platform that would simplify the process for everyone
        involved.
      </Typography>
      <Typography
        mt={6}
        mb={2}
        sx={{ typography: { xs: "h5", md: "h4" } }}
        className="font-semibold"
        component="h2"
      >
        What We Offer
      </Typography>
      <Stack
        mt={3}
        justifyContent="center"
        gap={2}
        flexWrap="wrap"
        direction="row"
      >
        {features.map((feature) => (
          <Paper
            elevation={4}
            className="w-72 p-4 rounded-lg"
            sx={{ "&:hover": { boxShadow: 5 } }}
            key={feature.title}
          >
            <Typography
              sx={{ typography: { xs: "h5", md: "h5" } }}
              mb={2}
              className="font-semibold text-balance"
              textAlign="center"
            >
              {feature.title}
            </Typography>
            <Typography
              sx={{
                textWrap: "pretty",
                typography: { xs: "body2", md: "body1" },
              }}
            >
              {feature.description}
            </Typography>
          </Paper>
        ))}
      </Stack>
      <Typography
        mt={6}
        mb={2}
        sx={{ typography: { xs: "h5", md: "h4" } }}
        className="font-semibold"
        component="h2"
      >
        Meet our team
      </Typography>
      <Stack
        mb={6}
        mt={3}
        justifyContent="center"
        gap={2}
        flexWrap="wrap"
        direction="row"
      >
        {team.map((member) => (
          <Paper
            elevation={4}
            className="w-72 p-4 rounded-lg"
            sx={{ "&:hover": { boxShadow: 5 } }}
            key={member.title}
          >
            <Image
              alt="team member"
              width={300}
              height={300}
              src={member.img}
              className="h-48"
            ></Image>
            <Typography
              mt={2}
              sx={{ typography: { xs: "h5", md: "h5" } }}
              mb={2}
              className="font-semibold text-balance"
              textAlign="center"
            >
              {member.name}
            </Typography>
            <Typography
              className="font-semibold"
              textAlign="center"
              sx={{
                textWrap: "pretty",
                typography: { xs: "body2", md: "body1" },
              }}
            >
              {member.title}
            </Typography>
          </Paper>
        ))}
      </Stack>
    </Container>
  );
}

export default page;
