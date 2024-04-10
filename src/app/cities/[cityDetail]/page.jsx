"use client";
import React, { useState, useEffect } from "react";
import { Heading, Box, VStack, Stack, Image, Button } from "@chakra-ui/react";
import { LuMapPin } from "react-icons/lu";
import { FaPhoneAlt } from "react-icons/fa";
import { Navbar } from "@/app/components/Navbar";
import { BottomBar } from "@/app/components/BottomBar";
import {
  Card,
  CardHeader,
  CardBody,
  StackDivider,
  Text,
} from "@chakra-ui/react";

export default function CityDetail({ params }) {
  const [city, setCity] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`https://api.openbrewerydb.org/v1/breweries/${params.cityDetail}`)
      .then((res) => res.json())
      .then((data) => {
        setCity(data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Navbar />

      {loading ? (
        <Heading fontSize={18} m={15}>
          Cargando...
        </Heading>
      ) : (
        <>
          <Card p={20}>
            <CardBody>
              <Heading>{city.name}</Heading>
              <Box pt={20}>
                <Text fontSize={18} m={10}>
                  {" "}
                  <LuMapPin fontSize={20} />
                  {city.address_1}
                </Text>

                <Text fontSize={18} m={10}>
                  {" "}
                  <FaPhoneAlt />
                  {city.phone}
                </Text>
              </Box>
            </CardBody>
          </Card>
          <VStack>
            <Stack direction="row">
              <Image
                borderRadius={10}
                boxSize="120px"
                objectFit="cover"
                src="https://plus.unsplash.com/premium_photo-1670984940156-c7f833fe8397?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Dan Abramov"
              />
              <Image
                borderRadius={10}
                boxSize="120px"
                objectFit="cover"
                src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Dan Abramov"
              />
              <Image
                borderRadius={10}
                boxSize="120px"
                src="https://images.unsplash.com/photo-1597290282695-edc43d0e7129?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Dan Abramov"
              />
            </Stack>

            <Card>
              <CardHeader>
                <Heading size="md" p={20}>
                  Opiniones
                </Heading>
              </CardHeader>

              <CardBody>
                <Stack divider={<StackDivider />} spacing="4">
                  <Box padding={20}>
                    <Box display={"flex"} alignItems={"center"}>
                      <Image
                        borderRadius="100"
                        boxSize="80px"
                        src="https://bit.ly/dan-abramov"
                        alt="Dan Abramov"
                      />
                      <Text ml={20} fontWeight={500} fontSize={18}>
                        Name
                      </Text>
                    </Box>
                    <Box p={15}>
                      <Text pt="2" fontSize="sm">
                        View a summary of all your clients over the last month.
                      </Text>
                    </Box>
                  </Box>

                  <Box padding={20}>
                    <Box display={"flex"} alignItems={"center"}>
                      <Image
                        borderRadius="100"
                        boxSize="80px"
                        src="https://bit.ly/dan-abramov"
                        alt="Dan Abramov"
                      />
                      <Text ml={20} fontWeight={500} fontSize={18}>
                        Name
                      </Text>
                    </Box>
                    <Box p={15}>
                      <Text pt="2" fontSize="sm">
                        View a summary of all your clients over the last month.
                      </Text>
                    </Box>
                  </Box>

                  <Box padding={20}>
                    <Box display={"flex"} alignItems={"center"}>
                      <Image
                        borderRadius="100"
                        boxSize="80px"
                        src="https://bit.ly/dan-abramov"
                        alt="Dan Abramov"
                      />
                      <Text ml={20} fontWeight={500} fontSize={18}>
                        Name
                      </Text>
                    </Box>
                    <Box p={15}>
                      <Text pt="2" fontSize="sm">
                        View a summary of all your clients over the last month.
                      </Text>
                    </Box>
                  </Box>

                  <Box padding={20}>
                    <Box display={"flex"} alignItems={"center"}>
                      <Image
                        borderRadius="100"
                        boxSize="80px"
                        src="https://bit.ly/dan-abramov"
                        alt="Dan Abramov"
                      />
                      <Text ml={20} fontWeight={500} fontSize={18}>
                        Name
                      </Text>
                    </Box>
                    <Box p={15}>
                      <Text pt="2" fontSize="sm">
                        View a summary of all your clients over the last month.
                      </Text>
                    </Box>
                  </Box>

                  <Box padding={20}>
                    <Box display={"flex"} alignItems={"center"}>
                      <Image
                        borderRadius="100"
                        boxSize="80px"
                        src="https://bit.ly/dan-abramov"
                        alt="Dan Abramov"
                      />
                      <Text ml={20} fontWeight={500} fontSize={18}>
                        Name
                      </Text>
                    </Box>
                    <Box p={15}>
                      <Text pt="2" fontSize="sm">
                        View a summary of all your clients over the last month.
                      </Text>
                    </Box>
                  </Box>
                </Stack>
              </CardBody>
            </Card>
            <Box></Box>
            <Button
              bg={"#3540E8"}
              w={342}
              h={48}
              borderRadius={8}
              color={"white"}
              mb={15}
            >
              Reservar mesa
            </Button>
            <Button
              bg={"transparent"}
              w={342}
              h={48}
              borderRadius={8}
              color={"white"}
              mb={20}
            >
              Opciones de transporte
            </Button>
          </VStack>
        </>
      )}
      <BottomBar />
    </>
  );
}
