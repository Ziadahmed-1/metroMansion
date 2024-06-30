import { Typography, Grid, Stack, Avatar } from "@mui/material";
import React from "react";

function Details({ property }) {
  const purpose = { "for-rent": "For rent", "for-sale": "For sale" };
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <Grid
      container
      mt={2}
      flexWrap="wrap"
      justifyContent="space-between"
      gap={2.5}
    >
      <Grid item xs={12} sm={5} md={3}>
        <Stack
          gap={1.2}
          justifyContent="start"
          alignItems="center"
          direction="row"
        >
          <Avatar
            alt="rooms count"
            sx={{ width: 56, height: 56 }}
            src="/avatars/rooms.jpg"
            className="shadow-xl"
          />
          <Typography component="p" variant="h5">
            {property.rooms > 1
              ? `${property.rooms} Bed rooms`
              : property.rooms === 0
              ? `${property.rooms + 1} Bed room`
              : `${property.rooms} Bed room`}
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={12} sm={5} md={3}>
        <Stack
          gap={1.2}
          justifyContent="start"
          alignItems="center"
          direction="row"
        >
          <Avatar
            alt="Bath rooms count"
            sx={{ width: 56, height: 56 }}
            src="/avatars/tbaths.jpg"
            className="shadow-xl"
          />
          <Typography component="p" variant="h5">
            {property.rooms > 1
              ? `${property.rooms} Bath rooms`
              : property.rooms === 0
              ? `${property.rooms + 1} Bath room`
              : `${property.rooms} Bath room`}
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={12} sm={5} md={3}>
        <Stack
          gap={1.2}
          justifyContent="start"
          alignItems="center"
          direction="row"
        >
          <Avatar
            alt="area"
            sx={{ width: 56, height: 56 }}
            src="/avatars/area.webp"
            className="shadow-xl"
          />
          <Typography component="p" variant="h5">
            {`${property.area.toFixed(2)} m`}
            <sup>2</sup>
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={12} sm={5} md={3}>
        <Stack
          gap={1.2}
          justifyContent="start"
          alignItems="center"
          direction="row"
        >
          <Avatar
            alt="porpuse"
            sx={{ width: 56, height: 56 }}
            src="/avatars/porpuse.webp"
            className="shadow-xl"
          />
          <Typography component="p" variant="h5">
            {purpose[property.purpose]}
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={12} sm={5} md={3}>
        <Stack
          gap={1.2}
          justifyContent="start"
          alignItems="center"
          direction="row"
        >
          <Avatar
            alt="location"
            sx={{ width: 56, height: 56 }}
            src="/avatars/location.webp"
            className="shadow-xl"
          />
          <Typography
            className="hover:cursor-pointer hover:text-zinc-500 duration-300"
            component="p"
            variant="h5"
          >
            <a
              target="_blank"
              href={`https://maps.google.com/?q=${property.geography.lat},${property.geography.lng}`}
            >
              Open on maps
            </a>
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={12} sm={5} md={3}>
        <Stack
          gap={1.2}
          justifyContent="start"
          alignItems="center"
          direction="row"
        >
          <Avatar
            alt="price"
            sx={{ width: 56, height: 56 }}
            src="/avatars/price.jpg"
            className="shadow-xl"
          />
          <Typography component="p" variant="h5">
            {formatter.format(property.price)}
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default Details;
