"use client";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useSession } from "next-auth/react";
import { useEffect, useMemo, useState } from "react";
import AlertMsg from "./AlertMsg";

function ToggleProprtyList({ property }) {
  const { data: session } = useSession();
  const memoizedSession = useMemo(() => session, [session?.user?.email]);

  const [added, setAdded] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alert, setAlert] = useState({});

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
          if (data[0].proprties.some((prop) => prop.id === property.id)) {
            setAdded(true);
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchUserData();
  }, [memoizedSession, property]);

  function alertAppear(text, type) {
    setAlert({ text, type });
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  }

  const updateUserProperty = async (email, property) => {
    try {
      const response = await fetch("/api/user", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, property }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      alertAppear("Property added successfully!", "success");
      setAdded(true);
    } catch (error) {
      console.error("Error updating user properties:", error);
    }
  };

  const removeUserProperty = async (email, propertyId) => {
    try {
      const response = await fetch("/api/user", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, propertyId }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      alertAppear("Property removed successfully!", "warning");
      setAdded(false);
    } catch (error) {
      console.error("Error removing property:", error);
    }
  };

  function handlePropertyToggle() {
    if (!session?.user?.email) {
      return;
    }
    if (added) {
      removeUserProperty(session?.user?.email, property.id);
    } else {
      updateUserProperty(session?.user?.email, property);
    }
  }
  return (
    <div
      className="group  cursor-pointer w-fit    "
      title={
        session?.user
          ? added
            ? "Remove from favorite"
            : "Add to favorite"
          : "You have to login first"
      }
    >
      {session?.user ? (
        added ? (
          <>
            <div
              onClick={handlePropertyToggle}
              className=" group-hover:scale-110  p-[0.2rem] md:p-2 absolute top-6 right-6 md:top-10 md:right-10 bg-rose-200 rounded-full"
            >
              <FavoriteIcon fontSize="large" />
            </div>
            {showAlert && (
              <div className="fixed z-50 left-auto top-16">
                <AlertMsg text={alert?.text} type={alert?.type} />
              </div>
            )}
          </>
        ) : (
          <>
            <div
              onClick={handlePropertyToggle}
              className="group-hover:scale-110 p-[0.2rem] md:p-2 absolute top-6 right-6 md:top-10 md:right-10 bg-slate-200 rounded-full"
            >
              <FavoriteBorderIcon fontSize="large" />
            </div>
            {showAlert && (
              <div className="fixed z-50 left-auto top-16">
                <AlertMsg text={alert?.text} type={alert?.type} />
              </div>
            )}
          </>
        )
      ) : (
        <div className="p-[0.2rem] md:p-2 absolute top-6 right-6 md:top-10 md:right-10 bg-slate-200 rounded-full cursor-not-allowed">
          <FavoriteBorderIcon fontSize="large" />
        </div>
      )}
    </div>
  );
}

export default ToggleProprtyList;
