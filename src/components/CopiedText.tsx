import {
  Box,
  Card,
  CardBody,
  Center,
  Divider,
  HStack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { IoMdCopy } from "react-icons/io";

import IText from "../types/Text";

const CopiedText = ({ text }: { text: IText }) => {
  const toast = useToast();

  //#region handlers

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text.value);

    toast({
      title: "Text Copied.",
      status: "success",
      duration: 3000,
    });
  };

  //#endregion

  return (
    <Card>
      <CardBody padding={0}>
        <HStack spacing={4} align="stretch" gap={0}>
          <Text wordBreak={"break-all"} flex="1" padding={5}>
            {text.value}
          </Text>
          <Center padding={1}>
            <Divider orientation="vertical" />
          </Center>
          <Box
            display="flex"
            alignItems="center"
            cursor="pointer"
            padding={2}
            onClick={handleCopyClick}
          >
            <IoMdCopy />
          </Box>
        </HStack>
      </CardBody>
    </Card>
  );
};
export default CopiedText;
