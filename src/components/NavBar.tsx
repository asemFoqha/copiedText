import { HStack } from "@chakra-ui/react";

import { FC } from "react";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar: FC = () => {
  return (
    <HStack h="5vh">
      <ColorModeSwitch />
    </HStack>
  );
};
export default NavBar;
