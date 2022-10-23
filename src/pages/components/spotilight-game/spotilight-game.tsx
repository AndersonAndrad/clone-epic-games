import {Flex, Image, Text} from "@chakra-ui/react";

export default function SpotilightGame() {
    const mockImage = 'https://i.ytimg.com/vi/djmHcNBe1Z4/maxresdefault.jpg'

    return (
        <Flex direction={'column'} gap={'10px'} fontWeight={'600'}>
            <Image
                src={mockImage}
                width={'250px'}
                height={'350px'}
                borderRadius={'5px'}
            />
            <Flex direction={'column'} gap={'5px'}>
                <Text opacity={'60%'}>Base game</Text>
                <Text>World war Z</Text>
                <Flex gap={'15px'} align={'center'}>
                    <Text
                        padding={'5px'}
                        bg={'#0074e4'}
                        borderRadius={'5px'}
                        fontSize={'10px'}
                    >
                        - 50%
                    </Text>
                    <Text opacity={'60%'} textDecorationLine={'line-through'}> R$150,00 </Text>
                    <Text> R$50,00 </Text>
                </Flex>
            </Flex>
        </Flex>
    )
}