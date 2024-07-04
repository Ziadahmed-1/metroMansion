import { Avatar, Grid, Stack, Typography } from "@mui/material";
Typography;
function ContactInfo({ property }) {
  const contactData = [
    {
      name: "mobile",
      id: 1,
      img: "/contactInfo/mobile.jpg",
      data: property.phoneNumber.mobile,
    },
    {
      name: "phone",
      id: 2,
      img: "/contactInfo/phone.jpg",
      data: property.phoneNumber.phone,
    },
    {
      name: "whatsapp",
      id: 3,
      img: "/contactInfo/whatsapp.png",
      data: property.phoneNumber.whatsapp,
    },
  ];
  return (
    <>
      <Stack
        gap={1.2}
        justifyContent="start"
        alignItems="center"
        direction="row"
      >
        <Typography
          component="p"
          sx={{ typography: { xs: "body1", md: "h5" } }}
        >
          Agency:
        </Typography>
        <Avatar
          alt="agency logo"
          sx={{
            width: { xs: 40, md: 56 },
            height: { xs: 40, md: 56 },
          }}
          src={property.agency.logo.url}
          className="shadow-xl"
        />
        <Typography
          component="p"
          sx={{ typography: { xs: "body1", md: "h5" } }}
        >
          {property.agency.name}
        </Typography>
      </Stack>
      <Grid
        container
        mt={2}
        flexWrap="wrap"
        justifyContent="space-between"
        gap={2.5}
      >
        {contactData.map((item) => (
          <Grid key={item.id} item xs={12} sm={5} md={3}>
            <Stack
              gap={1.2}
              justifyContent="start"
              alignItems="center"
              direction="row"
            >
              <Avatar
                alt={item.name}
                sx={{
                  width: { xs: 40, md: 56 },
                  height: { xs: 40, md: 56 },
                }}
                src={item.img}
                className="shadow-xl"
              />
              <Typography component="p" variant="h5">
                {item.data}
              </Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default ContactInfo;
