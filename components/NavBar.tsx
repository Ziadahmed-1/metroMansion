"use client";
import logo from "@/public/doubleMLogo.png";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import LoginIcon from "@mui/icons-material/Login";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const pages = [
  ["Home", ""],
  ["About", "about"],
];

function ResponsiveAppBar() {
  const { data: session } = useSession();
  const router = useRouter();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  function handleLogOut() {
    handleCloseUserMenu();
    signOut();
  }

  function redirectToProprties() {
    router.push("/myProprties");
  }

  const settings = [
    { name: "My Proprties", function: redirectToProprties },
    { name: "Logout", function: handleLogOut },
  ];

  return (
    <AppBar
      component="nav"
      position="static"
      sx={{
        background:
          "radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%)",
      }}
      className="sticky top-0 z-50 "
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
            <Image
              src={logo}
              alt="Logo"
              width={50}
              height={50}
              className="rounded-lg"
            />
          </Box>

          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              fontFamily: "inherit",
              cursor: "default",
            }}
          >
            MetroMansion
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                fontFamily: "inherit",
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page[0]} onClick={handleCloseNavMenu}>
                  <Link href={`/${page[1]}`}>
                    {" "}
                    <Typography
                      sx={{
                        fontFamily: "inherit",
                        textTransform: "capitalize",
                      }}
                    >
                      {page[0]}
                    </Typography>{" "}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
            <Image
              src={logo}
              alt="Logo"
              width={50}
              height={50}
              className="rounded-lg"
            />
          </Box>
          <Typography
            variant="overline"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "inherit",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            MetroMansion
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              fontFamily: "inherit",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page[0]}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  mx: 1,
                  color: "white",
                  display: "block",
                  textTransform: "capitalize",
                  fontFamily: "inherit",
                  "&:hover": {
                    color: "#666",
                  },
                }}
              >
                <Link href={`/${page[1]}`}>
                  {" "}
                  <Typography sx={{ fontFamily: "inherit" }}>
                    {page[0]}
                  </Typography>{" "}
                </Link>
              </Button>
            ))}
          </Box>
          {session ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="User Options">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt={session?.user?.name}
                    src={session?.user?.image}
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting.name} onClick={setting.function}>
                    <Typography textAlign="center">{setting.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ) : (
            <Button
              onClick={() => signIn()}
              sx={{
                my: 2,
                mx: 1,
                color: "white",
                display: "flex",
                textTransform: "capitalize",
                fontFamily: "inherit",
                "&:hover": {
                  color: "#666",
                },
                gap: "0.5rem",
              }}
            >
              <LoginIcon />
              <Typography sx={{ fontFamily: "inherit" }}>Sign in</Typography>
            </Button>
          )}
        </Toolbar>
      </Container>
      <Divider sx={{ background: "#999" }} />
    </AppBar>
  );
}
export default ResponsiveAppBar;
