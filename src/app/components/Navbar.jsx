"use client";
import { Box, Text, Button } from "@chakra-ui/react";
import { TfiAlignJustify } from "react-icons/tfi";
import { FaUser, FaBell } from "react-icons/fa";
import { GoArrowLeft } from "react-icons/go";

import { useEffect, useState } from "react";

export const Navbar = () => {
  const [toggle, setToggle] = useState("/");

  useEffect(() => {
    setToggle(window.location.pathname);
  }, []);

  return (
    <Box
      bg="#010316"
      w="100%"
      h={"65"}
      p={10}
      color="white"
      display={"flex"}
      justifyContent={"space-between"}
    >
      <Box>
        <Text m={10}>
          {toggle === "/" ? (
            <TfiAlignJustify color="white" fontSize={"25"} />
          ) : (
            <GoArrowLeft color="white" fontSize={"25"} />
          )}
        </Text>
      </Box>
      <Box display={"flex"} flexDir={"row"}>
        <Text m={10}>
          <FaBell color="white" fontSize={"25"} />
        </Text>
        <Text m={10}>
          <FaUser color="white" fontSize={"25"} />
        </Text>
      </Box>
    </Box>
  );
};
