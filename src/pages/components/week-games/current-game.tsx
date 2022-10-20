import {Button, Flex, Text} from "@chakra-ui/react";
import {AiOutlinePlusCircle} from "react-icons/Ai";

export default function CurrentGame() {
    const mockImage = 'https://i.ytimg.com/vi/djmHcNBe1Z4/maxresdefault.jpg'

    return (
        <Flex
            backgroundImage={mockImage}
            width={'53%'}
            minHeight={'700px'}
            borderRadius={'15px'}
            padding={'50px'}
            justify={'flex-end'}
            direction={'column'}
            gap={'20px'}
        >

            <Flex direction={'column'} gap={'20px'} width={'300px'} fontWeight={'bold'}>
                <Text>Out now</Text>
                <Flex direction={'column'} >
                    <Text>Play with up to four friends or solo.</Text>
                    <Text>
                        The choices is yours in the asymmentrical Ghostbusters games from Fonic.
                    </Text>
                </Flex>
            </Flex>

            <Flex fontWeight={'bold'} direction='column' gap={'10px'}>
                <Text>Starting at R$169,00</Text>
                <Flex align={'center'} gap={'10px'}>
                    <Button color={'#202020'} textTransform={'uppercase'}>Buy now</Button>

                    <Flex align={'center'} gap={'5px'}>
                        <AiOutlinePlusCircle/>

                        <Text textTransform={'uppercase'} width='fit-content'>
                            add to wishlist
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}