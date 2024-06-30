"use client";
import { Container } from "@mui/material";
import { useSession } from "next-auth/react";
import { useEffect, useState, useMemo } from "react";
function Page() {
  const [userData, setUserData] = useState(null);
  const { data: session } = useSession();
  const memoizedSession = useMemo(() => session, [session?.user?.email]);

  useEffect(() => {
    const fetchUserData = async () => {
      if (memoizedSession?.user?.email) {
        try {
          const response = await fetch(
            `/api/user?email=${memoizedSession.user.email}`
          );
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          setUserData(data);
          console.log("Done get request");
          if (!data[0]) {
            const mail = memoizedSession.user.email;
            const res = await fetch(`/api/user`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ email: mail }),
            });
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchUserData();
  }, [memoizedSession]);

  return (
    <Container maxWidth="xl">
      {userData &&
        (userData[0]?.proprties.length === 0 ? (
          <p>There is no proprties to be shown !</p>
        ) : (
          <p>data</p>
        ))}
    </Container>
  );
}

export default Page;
