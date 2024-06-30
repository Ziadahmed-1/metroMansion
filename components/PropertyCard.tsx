import { Paper, Typography, Stack, Rating } from "@mui/material";
import Image from "next/image";
import KingBedIcon from "@mui/icons-material/KingBed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import Link from "next/link";

function PropertyCard({ property }) {
  const purpose = { "for-rent": "For rent", "for-sale": "For sale" };
  const state = {
    active: { text: "Avilable", color: "bg-lime-600" },
    inactive: { text: "Un Avilable", color: "bg-rose-600" },
  };

  function priceFormatter(price) {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });
    const result = formatter.format(price);
    return result.slice(1);
  }

  return (
    <Paper
      className=" hover:scale-[1.01] transition-all duration-500"
      elevation={10}
      variant="outlined"
      sx={{ width: { xs: 250, md: 400 } }}
    >
      <Image
        className="h-64"
        alt="property image"
        src={property.coverPhoto.url}
        width={400}
        height={200}
        loading="lazy"
      />
      <Typography
        className="text-pretty font-semibold"
        px={2}
        component="p"
        sx={{ typography: { xs: "body2", md: "body1" } }}
        mt={2}
      >
        {property.title}
      </Typography>
      <Stack my={1} px={2} justifyContent="space-between" direction="row">
        <Stack gap={2} direction="row">
          <Stack gap={0.6} direction="row">
            <KingBedIcon />
            <Typography component="p" variant="body1" fontWeight={700}>
              {property.rooms}
            </Typography>
          </Stack>
          <Stack gap={0.6} direction="row">
            <BathtubIcon />
            <Typography component="p" variant="body1" fontWeight={700}>
              {property.baths}
            </Typography>
          </Stack>
        </Stack>
        <Paper sx={{ px: 1 }} elevation={1}>
          {purpose[property.purpose]}
        </Paper>
      </Stack>
      <Stack
        my={1}
        pl={1.4}
        pr={2}
        justifyContent="space-between"
        direction="row"
      >
        <Stack justifyContent="center" alignItems="center" direction="row">
          <AttachMoneyIcon />
          <Typography
            className="font-semibold"
            sx={{
              mr: { xs: 0.3, md: 1 },
              typography: { xs: "body2", md: "body1" },
            }}
            component="p"
          >
            {priceFormatter(property.price)}
          </Typography>
          {property.rentFrequency && (
            <Typography
              className="font-semibold"
              sx={{
                mr: { xs: 0.4, md: 1 },
                typography: { xs: "body2", md: "body1" },
              }}
              component="p"
            >
              {property.rentFrequency.charAt(0).toUpperCase() +
                property.rentFrequency.slice(1)}
            </Typography>
          )}
        </Stack>
        <Paper
          className="flex justify-center items-center gap-1 px-2"
          elevation={1}
        >
          <div
            className={`w-2 h-2 rounded-full ${state[property.state].color}`}
          />
          <p>{state[property.state].text}</p>
        </Paper>
      </Stack>
      <Stack my={1} px={2} justifyContent="space-between" direction="row">
        <Rating
          size="small"
          name="read-only"
          value={property.indyScore / 200}
          precision={0.5}
          readOnly
        />
        <Link
          className="text-blue-700 hover:text-blue-900 hover:underline"
          href={`/proprties/${property.externalID}`}
        >
          More details
        </Link>
      </Stack>
    </Paper>
  );
}

export default PropertyCard;
