import { Button, Flex, Image, Text } from "@chakra-ui/react";

export default function ListPages() {
  const mockImage = 'https://i.ytimg.com/vi/djmHcNBe1Z4/maxresdefault.jpg'

  return (
    <Flex
      direction={'column'}
      width={'fit-content'}
      padding={'20px'}
      gap={'40px'}
    >
      <Flex
        align={'center'}
        gap={'60px'}
        justify={'space-between'}
      >
        <Text>New releases</Text>
        <Button>View more</Button>
      </Flex>
      <Flex gap={'20px'} align={'center'}>
        <Image
          src={mockImage}
          alt={''}
          width={'100px'}
          height={'150px'}
          borderRadius={'5px'}
        />
        <Flex
          direction={'column'}
          gap={'10px'}
        >
          <Text>New game</Text>
          <Text
            paddingY={'5px'}
            paddingX={'10px'}
            bg={'#404040'}
            borderRadius={'5px'}
            width={'fit-content'}
          >New on Epic</Text>
          <Flex gap={'15px'}>
            <Text
              padding={'5px'}
              bg={'#0074e4'}
              borderRadius={'5px'}
              fontSize={'10px'}
            >
              - 50%
            </Text>
            <Text
              opacity={'60%'}
              textDecorationLine={'line-through'}
            >
              R$150,00 </Text>
            <Text>R$100,00</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}