"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  HStack,
  Box,
  Heading,
  Button,
  Stack,
  Image,
  Text,
} from "@chakra-ui/react";
import { LuMapPin } from "react-icons/lu";
import { FaPhoneAlt } from "react-icons/fa";

export const CitiesList = () => {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    const res = await fetch(
      `https://api.openbrewerydb.org/v1/breweries?by_city=san_diego&per_page=3`
    );
    const cities = await res.json();
    setCities(cities);
    setLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, []);

  console.log(cities);
  return (
    <>
      <Heading color={"white"} mt={20} p={15}>
        Opciones en California
      </Heading>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <Stack direction={"row"} overflowX={"auto"} p={10} mb={15}>
          {cities.map((item) => {
            return (
              <>
                <HStack w="100%" p={10}>
                  <Box
                    w={"328"}
                    h={"200"}
                    bg="#13132D"
                    color={"white"}
                    borderRadius={8}
                    p={15}
                    key={item.id}
                  >
                    <Heading fontSize={18}>{item.name}</Heading>
                    <Box>
                      <Box display={"flex"}>
                        <Image
                          borderRadius="100"
                          m={15}
                          boxSize="70px"
                          src="https://images.unsplash.com/photo-1567696911980-2eed69a46042?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt="beer"
                        />
                        <Box p={20}>
                          <Text fontSize={14}>
                            <Text mb={10}>
                              {" "}
                              <LuMapPin /> {item.address_1}
                            </Text>
                            <Text>
                              {" "}
                              <FaPhoneAlt /> {item.phone}
                            </Text>
                          </Text>
                        </Box>
                      </Box>
                    </Box>

                    <Link key={item.id} href={`cities/${item.id}`}>
                      <Button
                        w={244}
                        h={32}
                        borderRadius={8}
                        bg="#E41AD6"
                        color={"white"}
                        mt={8}
                      >
                        Ver mas
                      </Button>
                    </Link>
                  </Box>
                </HStack>
              </>
            );
          })}
        </Stack>
      )}
    </>
  );
};
