"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Stack,
  Box,
  Heading,
  Button,
  Image,
  Text,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { LuMapPin } from "react-icons/lu";
import { FaPhoneAlt } from "react-icons/fa";

export const BrewingList = () => {
  const [brewing, setBrewing] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.openbrewerydb.org/v1/breweries/")
      .then((res) => res.json())
      .then((data) => {
        setBrewing(data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Alert
        status="warning"
        variant="left-accent"
        bg={"#FEEBCB"}
        color={"black"}
        display={"flex"}
        p={(12, 16)}
        gap={12}
        border={(0, 0, 0, 4)}
      >
        <AlertIcon w={20} color={"#DD6B20"} />
        <Box>
          <div>
            <Heading fontSize={18}>Happy Hour</Heading>
          </div>
          <div>
            <Text>16:00 - 17:00 hs MEX</Text>
          </div>
        </Box>
      </Alert>

      <Heading m={15}>Todas las opciones</Heading>
      <Stack direction={"row"} overflowX={"auto"} p={20}>
        {loading ? (
          <Heading fontSize={18}>Cargando...</Heading>
        ) : (
          brewing.map((item) => {
            return (
              <>
                <Box
                  w={"328"}
                  H={"191"}
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
                      <Box p={20} fontSize={14}>
                        <div>
                          <Text mb={10}>
                            {" "}
                            <LuMapPin /> {item.address_1}
                          </Text>
                          <Text>
                            {" "}
                            <FaPhoneAlt /> {item.phone}
                          </Text>
                        </div>
                      </Box>
                    </Box>
                  </Box>

                  <Link key={item.id} href={`brewing/${item.id}`}>
                    <Button
                      w={244}
                      h={32}
                      borderRadius={8}
                      bg="#E41AD6"
                      color={"white"}
                    >
                      Ver más
                    </Button>
                  </Link>
                </Box>
              </>
            );
          })
        )}
      </Stack>
    </>
  );
};
