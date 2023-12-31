import { Box, Divider, Flex } from '@chakra-ui/react';
import AddTextForm from './components/AddTextForm';
import NavBar from './components/NavBar';
import { useEffect, useState } from 'react';
import Text from './types/Text';
import TextList from './components/TextList';

const END_POINT = 'https://copy-paste-green.vercel.app/api/data';

function App() {
  const [textArray, setTextArray] = useState<Text[]>([]);

  useEffect(() => {
    fetch(END_POINT).then((res) => {
      res.json().then((data: Array<Text>) => {
        setTextArray(data.reverse());
      });
    });
  }, []);

  const handlePostText = (text: string) => {
    fetch(END_POINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    }).then((res) => {
      res.json().then((data) => {
        console.log(data);
      });
    });
  };

  const handleAddingText = (text: string) => {
    setTextArray([{ text }, ...textArray]);
    handlePostText(text);
  };

  return (
    <div className='App'>
      <NavBar />
      <Divider orientation='horizontal' />
      <Box display={'flex'} position={'relative'} w='100%' h='95vh' p={4}>
        <Flex
          maxW={'550px'}
          top={'50%'}
          flexDirection={'column'}
          gap={2}
          justifyContent={'center'}
          alignItems='stretch'
          margin='auto'
        >
          <AddTextForm handleAddingText={handleAddingText} />
          <TextList textArray={textArray} />
        </Flex>
      </Box>
    </div>
  );
}

export default App;
