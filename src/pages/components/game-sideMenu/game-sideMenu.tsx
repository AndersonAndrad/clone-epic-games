import {Box, Flex, Image, Text} from "@chakra-ui/react";
import {BsFillPlayFill} from "react-icons/BS";

export default function GameSideMenu() {
    const fortniteCapa = 'https://blog.publicidade.uol.com.br/wp-content/uploads/2018/11/UOL-AD_LAB-Fortnite-768x432.jpg'

    return (
        <Flex gap='4' padding='15'>
            <Image src={fortniteCapa} width='50px' height='80px'/>
            <Flex direction='column' align='center' justify='center'>
                <Text margin='0'>Fortnite</Text>
                <Flex align='center'>
                    <BsFillPlayFill/>
                    <Text margin='0'> Lauch </Text>
                </Flex>
            </Flex>
        </Flex>
    )
}