import {Flex, Image, Text} from "@chakra-ui/react";

export default function GameToList() {
    const mockImage = 'https://i.ytimg.com/vi/djmHcNBe1Z4/maxresdefault.jpg'

    return (
        <Flex
            gap={'20px'}
            align={'center'}
            padding={'20px'}
            borderRadius={'15px'}
            maxW={'300px'}
            fontWeight={'bold'}
        >
            <Image src={mockImage} w={'65px'} h={'90px'} borderRadius={'10px'}/>
            <Text>Some game what do you want to play</Text>
        </Flex>
    )
}