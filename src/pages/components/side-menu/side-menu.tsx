import {Box, Flex, Image, Text} from "@chakra-ui/react";
import {IoTicket} from "react-icons/io5";
import {AiFillAppstore} from "react-icons/Ai";
import {SiUnrealengine} from "react-icons/Si";
import GameSideMenu from "../game-sideMenu/game-sideMenu";


export default function SideMenu() {
    const logo = 'https://www.pngfind.com/pngs/m/310-3102410_epic-games-logo-png-sign-transparent-png.png'

    return (
        <Flex direction='column'  height='10%'>
            <Box>
                <Image src={logo} width={38} height={38}/>
            </Box>
            <Flex direction='column'>
                <Flex align='center' gap='8' padding='10'>
                    <IoTicket/>
                    <Text>Store</Text>
                </Flex>
                <Flex align='center' gap='8' padding='10'>
                    <AiFillAppstore/>
                    <Text>Library</Text>
                </Flex>
                <Flex align='center' gap='8' padding='10'>
                    <SiUnrealengine/>
                    <Text>Unreal Engine</Text>
                </Flex>
            </Flex>
            <Flex>
                <GameSideMenu/>
            </Flex>
        </Flex>
    )
}
