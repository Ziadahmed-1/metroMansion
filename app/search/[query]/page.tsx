"use client";
import ErrorMsg from "@/components/ErrorMsg";
import LoadingSpinner from "@/components/LoadingSpinner";
import PropertyCard from "@/components/PropertyCard";
import SearchIcon from "@mui/icons-material/Search";
import {
  Button,
  Container,
  Pagination,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "2322a1681bmsh10ca76e689ff844p19faa6jsn929ecd5397f8",
    "x-rapidapi-host": "bayut.p.rapidapi.com",
  },
};

function Page({ params }) {
  const [appliedFilter, setAppliedFilter] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [currPage, setCurrPage] = useState(0);
  const [properties, setProprties] = useState([]);
  const [withoutFilters, setWithoutFilters] = useState([]);
  const searchRef = useRef();
  const router = useRouter();
  let proprtiesWithoutFilters = [];

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrPage(value - 1);
  };

  async function fetchLocations(query, options) {
    const url = `https://bayut.p.rapidapi.com/auto-complete?query=${query}&hitsPerPage=25&page=0&lang=en`;
    const res = await fetch(url, options);
    if (res.status !== 200) {
      setError(
        "Oops! Something went wrong on our server first. Please refresh the page or come back later."
      );
    } else {
      const data = await res.json();
      const locationIDS = data.hits.map((item) => item.externalID);
      return locationIDS;
    }
  }

  async function fetchProprties(locationID, options) {
    const url = `https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=${locationID}&hitsPerPage=100&page=0&lang=en&sort=city-level-score&categoryExternalID=4`;
    const res = await fetch(url, options);
    if (res.status !== 200) {
      setError(
        "Oops! Something went wrong on our server second. Please refresh the page or come back later."
      );
    } else {
      const data = await res.json();
      const proprties = data.hits;

      return proprties;
    }
  }

  useEffect(() => {
    setIsLoading(true);
    fetchLocations(params.query, options).then((ids) => {
      if (ids?.length > 0) {
        fetchProprties(ids[0], options).then((properties) => {
          if (properties) {
            if (properties?.length > 0) {
              setProprties(properties);
              setWithoutFilters(properties);
            } else {
              setError("Sorry there's no results for this location !");
            }
          } else {
            setError("Sorry there's no results for this location !");
          }
          setIsLoading(false);
        });
      } else {
        setError("Sorry there's no results for this location !");
      }
    });
  }, [params]);

  function handleSearch() {
    const searchQuery = searchRef.current.value;

    if (searchQuery) {
      router.push(`/search/${searchQuery}`);
      setAppliedFilter("");
      setCurrPage(0);

      // On the same page method
      // setProprties([]);
      // setError(null);
      // setIsLoading(true);
      // fetchLocations(searchQuery, options).then((ids) => {
      //   if (ids.length > 0) {
      //     fetchProprties(ids[0], options).then((proprties) => {
      //       console.log(proprties);
      //       if (proprties.length > 0) {
      //         setProprties(proprties);
      //       } else {
      //         setError("Sorry there's no results for this location !");
      //       }
      //       setIsLoading(false);
      //     });
      //   } else {
      //     setError("Sorry there's no results for this location !");
      //   }
      //});
    }
  }
  function handleFilterSelect(filterName) {
    if (filterName === appliedFilter) {
      setProprties(withoutFilters);
      setAppliedFilter("");
      return;
    }
    if (filterName === "higher price") {
      const higherPrice = withoutFilters.toSorted((a, b) => b.price - a.price);
      setProprties(higherPrice);
      console.log(higherPrice);
      setAppliedFilter(filterName);
    }
    if (filterName === "lower price") {
      const lowerPrice = withoutFilters.toSorted((a, b) => a.price - b.price);
      setProprties(lowerPrice);
      console.log(lowerPrice);
      setAppliedFilter(filterName);
    }
    if (filterName === "higher rating") {
      const higherRating = withoutFilters.toSorted(
        (a, b) => b.indyScore - a.indyScore
      );
      setProprties(higherRating);
      console.log(higherRating);
      setAppliedFilter(filterName);
    }
  }

  return (
    <Container className="relative" maxWidth="2xl">
      <Stack
        gap={6}
        justifyContent="center"
        alignItems="center"
        direction="column"
      >
        <div className="sticky mt-2">
          <Paper
            elevation={3}
            className=" flex justify-center items-center flex-col px-4 py-4"
          >
            <Stack
              sx={{ background: "#2E2E2E" }}
              alignItems="center"
              justifyContent="center"
              direction="row"
              spacing={2}
              className="w-fit px-4 py-1 rounded-lg"
            >
              <SearchIcon fontSize="medium" />
              <TextField
                inputRef={searchRef}
                id="outlined-basic"
                label="City name"
                variant="standard"
                size="small"
                sx={{
                  input: { color: "white" },
                }}
              />
              <Button onClick={handleSearch} variant="contained">
                Search
              </Button>
            </Stack>
            <Stack
              mt={2}
              gap={1}
              justifyContent="center"
              alignItems="center"
              direction="column"
            >
              <Typography component="h5" variant="h5">
                Sort by
              </Typography>
              <Stack
                gap={4}
                justifyContent="space-bet"
                alignItems="center"
                direction="row"
              >
                <p
                  onClick={() => handleFilterSelect("higher price")}
                  className={`hover:cursor-pointer hover:text-neutral-500 font-semibold duration-100 ${
                    appliedFilter === "higher price" ? "underline" : ""
                  }`}
                >
                  Higher price
                </p>
                <p
                  onClick={() => handleFilterSelect("lower price")}
                  className={`hover:cursor-pointer hover:text-neutral-500 font-semibold duration-100 ${
                    appliedFilter === "lower price" ? "underline" : ""
                  }`}
                >
                  Lower price
                </p>
                <p
                  onClick={() => handleFilterSelect("higher rating")}
                  className={`hover:cursor-pointer hover:text-neutral-500 font-semibold duration-100 ${
                    appliedFilter === "higher rating" ? "underline" : ""
                  }`}
                >
                  Higher Rating
                </p>
              </Stack>
            </Stack>
          </Paper>
        </div>

        {error ? (
          <ErrorMsg msg={error} xsmt={15} mdmt={25} />
        ) : isLoading ? (
          <LoadingSpinner />
        ) : (
          <Stack direction="column" justifyContent="center" alignItems="center">
            <Stack
              width="100%"
              direction="row"
              justifyContent="center"
              gap={2}
              flexWrap="wrap"
            >
              {properties
                .slice(currPage * 10, currPage * 10 + 10)
                .map((property) => (
                  <PropertyCard key={property.externalID} property={property} />
                ))}
            </Stack>
            <Pagination
              page={currPage + 1}
              size="large"
              className="my-4"
              count={Math.ceil(properties.length / 10)}
              shape="rounded"
              onChange={handlePageChange}
            />
          </Stack>
        )}
      </Stack>
    </Container>
  );
}

export default Page;
