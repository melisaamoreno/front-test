import { IoCalendarOutline, IoChatbubbleOutline } from "react-icons/io5";
import { AiFillHome } from "react-icons/ai";
import { Box } from "@chakra-ui/react";

export const BottomBar = () => {
  return (
    <Box
      bg="#040210"
      w="100%"
      h={"65"}
      p={10}
      color="white"
      display={"flex"}
      justifyContent={"space-evenly"}
    >
      <Box textAlign={"center"}>
        <IoCalendarOutline fontSize={24} />
        <p>Calendario</p>
      </Box>
      <Box textAlign={"center"} color="#3540E8">
        <AiFillHome fontSize={24} />
        <p>Inicio</p>
      </Box>
      <Box textAlign={"center"}>
        <IoChatbubbleOutline fontSize={24} />
        <p>chat</p>
      </Box>
    </Box>
  );
};
