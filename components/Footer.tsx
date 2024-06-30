import { Box, Divider, Stack, Typography } from "@mui/material";
import Image from "next/image";

function Footer() {
  return (
    <>
      <Divider sx={{ mt: 6, background: "#999" }} />
      <Stack
        py={6}
        style={{
          background:
            "radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%)",
        }}
        direction="row"
        alignItems="center"
        justifyContent="center"
        gap={6}
        color="#ddd"
        sx={{ flexDirection: { xs: "column", md: "row" } }}
      >
        <Box>
          <Image
            src="/doubleMLogo.png"
            width={150}
            height={0}
            alt="metroMansion logo"
            className="hidden lg:block"
          />
        </Box>
        <Box>
          <Stack spacing={6} direction="row">
            <Stack>
              <Typography
                mb={1}
                className="font-semibold "
                variant="h5"
                component="h5"
              >
                About us
              </Typography>
              <Typography
                variant="body2"
                component="p"
                className="hover:cursor-pointer hover:text-white w-fit  mb-1 duration-300 "
              >
                Our Story
              </Typography>
              <Typography
                className="hover:cursor-pointer hover:text-white w-fit mb-1 duration-300 "
                variant="body2"
                component="p"
              >
                Benefits
              </Typography>
              <Typography
                className="hover:cursor-pointer hover:text-white w-fit mb-1 duration-300 "
                variant="body2"
                component="p"
              >
                FAQ
              </Typography>
            </Stack>
            <Box>
              <Typography
                mb={1}
                className="font-semibold"
                variant="h5"
                component="h5"
              >
                Legal
              </Typography>
              <Typography
                className="hover:cursor-pointer hover:text-white w-fit mb-1 duration-300 "
                variant="body2"
                component="p"
              >
                Terms & Conditions
              </Typography>
              <Typography
                className="hover:cursor-pointer hover:text-white w-fit mb-1 "
                variant="body2"
                component="p"
              >
                Privacy Policy
              </Typography>
            </Box>
          </Stack>
        </Box>
        <Box>
          <Stack
            display="flex"
            sx={{ flexDirection: { xs: "column", md: "row" } }}
            gap={6}
          >
            <Box>
              <Typography
                mb={1}
                className="font-semibold"
                variant="h5"
                component="h5"
              >
                Keep In Touch
              </Typography>
              <Typography
                className="hover:cursor-pointer hover:text-white w-fit mb-1 "
                variant="body2"
                component="p"
              >
                Email: info@metromansion.com
              </Typography>
              <Typography
                className="hover:cursor-pointer hover:text-white w-fit mb-1 "
                variant="body2"
                component="p"
              >
                Phone: (123) 456-7890
              </Typography>
              <Typography
                className="hover:cursor-pointer hover:text-white w-fit mb-1 "
                variant="body2"
                component="p"
              >
                Address: 123 Real Estate Ave, Metropolis
              </Typography>
            </Box>
            <Box>
              <Typography
                mb={1}
                className="font-semibold"
                variant="h5"
                component="h5"
              >
                Follow Us
              </Typography>
              <Typography
                className="hover:cursor-pointer hover:text-white w-fit mb-1 "
                variant="body2"
                component="p"
              >
                Facebook
              </Typography>
              <Typography
                className="hover:cursor-pointer hover:text-white w-fit mb-1 "
                variant="body2"
                component="p"
              >
                Twitter
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </>
  );
}

export default Footer;
