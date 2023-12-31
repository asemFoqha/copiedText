import { Box, Divider, Flex } from "@chakra-ui/react";
import AddTextForm from "./components/AddTextForm";
import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";
import IText from "./types/Text";
import CopiedText from "./components/CopiedText";

function App() {
  const [textArray, setTextArray] = useState<IText[]>([]);

  useEffect(() => {
    //call back end to get the text array
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Divider orientation="horizontal" />
      <Box display={"flex"} position={"relative"} w="100%" h="95vh" p={4}>
        <Flex
          maxW={"550px"}
          top={"45%"}
          flexDirection={"column"}
          gap={2}
          justifyContent={"center"}
          alignItems="stretch"
          margin="auto"
          position={"sticky"}
        >
          <AddTextForm
            handleAddingText={(text) =>
              setTextArray([
                { id: Math.random() + text, value: text },
                ...textArray,
              ])
            }
          />
          <div className="copied-text">
            {textArray.map((text, index) => (
              <CopiedText key={index} text={text} />
            ))}
          </div>
        </Flex>
      </Box>
    </div>
  );
}

export default App;
