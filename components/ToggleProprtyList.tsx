"use client";
import React, { useState, useCallback } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useSession } from "next-auth/react";

function ToggleProprtyList() {
  const { data: session } = useSession();
  const [added, setAdded] = useState(false);

  const handleClick = useCallback(() => {
    setAdded((prev) => !prev);
  }, []);
  return (
    <div
      className="absolute cursor-pointer hover:scale-110 top-10 right-10 "
      onClick={handleClick}
      title={added ? "Remove from favorite" : "Add to favorite"}
    >
      {session?.user &&
        (added ? (
          <FavoriteIcon fontSize="large" />
        ) : (
          <FavoriteBorderIcon fontSize="large" />
        ))}
    </div>
  );
}

export default ToggleProprtyList;
