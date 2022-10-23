import {Box, Flex, Text} from "@chakra-ui/react";
import SpotilightGame from "../spotilight-game/spotilight-game";
import {MdNavigateBefore, MdOutlineNavigateNext} from "react-icons/Md";

export default function Spotilight() {
    return (
        <Flex direction={'column'} gap={'20px'}>
            <Flex align={'center'} justify={'space-between'}>
                <Text>Spotilight</Text>
                <Flex gap={'10px'}>
                    <Box
                        padding={'10px'}
                        bg={'#2b2b2b'}
                        borderRadius={'50px'}
                    >
                        <MdNavigateBefore/>
                    </Box>

                    <Box
                        padding={'10px'}
                        bg={'#2b2b2b'}
                        borderRadius={'50px'}
                    >
                        <MdOutlineNavigateNext/>
                    </Box>
                </Flex>
            </Flex>
            <Flex>
                <SpotilightGame/>
            </Flex>
        </Flex>
    )
}