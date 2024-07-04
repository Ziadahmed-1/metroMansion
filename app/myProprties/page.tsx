"use client";
import "@/app/globals.css";
import PropertyCard from "@/components/PropertyCard";
import { Container, Stack, Typography } from "@mui/material";
import { useSession } from "next-auth/react";
import { notFound } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

function Page() {
  const [userData, setUserData] = useState(null);
  const { data: session, status, token } = useSession();
  const [isLoading, setIsLoading] = useState(false);

  const memoizedSession = useMemo(() => session, [session?.user?.email]);

  useEffect(() => {
    if (status === "loading") return; // Wait until session status is determined

    if (status === "unauthenticated" || !session?.user?.email) {
      console.log("User not authenticated:", status, token);
      notFound();
    }
  }, [session, status, token]);

  useEffect(() => {
    const fetchUserData = async () => {
      if (memoizedSession?.user?.email) {
        setIsLoading(true);
        try {
          const response = await fetch(
            `/api/user?email=${memoizedSession.user.email}`
          );
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();

          setUserData(data);
          if (!data[0]) {
            const mail = memoizedSession.user.email;
            await fetch(`/api/user`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ email: mail }),
            });
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchUserData();
  }, [memoizedSession]);

  if (status === "loading") {
    return (
      <Container maxWidth="xl">
        <div className="blackLoader mx-auto mt-96"></div>
      </Container>
    );
  }

  return (
    <Container maxWidth="xl">
      <Typography
        sx={{ typography: { xs: "body1", md: "h5" } }}
        my={3}
        component="h5"
      >
        Welcome {session?.user?.name?.split(" ")[0]}, Here is Your Property List
      </Typography>
      {isLoading ? (
        <div className="blackLoader mx-auto mt-96"></div>
      ) : userData && userData[0]?.proprties.length === 0 ? (
        <Typography
          textAlign="center"
          mt={8}
          variant="h5"
          my={3}
          component="h5"
          fontWeight={600}
        >
          There are no properties to be shown!
        </Typography>
      ) : userData ? (
        <Stack
          justifyContent="center"
          direction="row"
          gap={2}
          mb={8}
          flexWrap="wrap"
        >
          {userData[0]?.proprties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </Stack>
      ) : null}
    </Container>
  );
}

export default Page;
