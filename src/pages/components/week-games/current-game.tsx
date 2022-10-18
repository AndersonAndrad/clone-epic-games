import {Button, Flex, Text} from "@chakra-ui/react";
import {AiOutlinePlusCircle} from "react-icons/Ai";

export default function CurrentGame() {
    const mockImage = 'https://i.ytimg.com/vi/djmHcNBe1Z4/maxresdefault.jpg'

    return (
        <Flex
            backgroundImage={mockImage}
            width={'100%'}
            minHeight={'700px'}
            borderRadius={'15px'}
            padding={'50px'}
        >
            <Flex marginTop={'auto'} fontWeight={'bold'} direction='column' gap={'10px'}>
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