import {Box, Flex, Input, Text} from "@chakra-ui/react";
import {MdArrowBackIosNew} from "react-icons/Md";
import {BsFillPeopleFill, BsSearch} from "react-icons/BS";

export default function Header() {
    return (
        <Flex padding='5' align='center' justify='space-between' width={'100%'} height={'20%'}>
            <Flex align='center' gap='5'>
                <MdArrowBackIosNew/>
                <Flex align='center' bg='#202020' gap='10px' borderRadius={'50px'} paddingX={3} paddingY={'10px'}
                      outline='none'>
                    <BsSearch/>
                    <Input
                        border='0'
                        placeholder='Search...'
                        variant='unstyled'
                        size='lg'
                    />
                </Flex>
                <Flex gap='5'>
                    <Box>
                        <Text>Discorver</Text>
                    </Box>
                    <Box>
                        <Text>Browse</Text>
                    </Box>
                    <Box>
                        <Text>News</Text>
                    </Box>
                </Flex>
            </Flex>

            <Flex align='center' gap='5'>
                <Box>
                    <Text>Wishlist</Text>
                </Box>
                <Box>
                    <Text>Cart</Text>
                </Box>
                <Flex align='center' gap='5' borderLeft={'1px'} borderColor={'#202020'} paddingX={'30px'} >
                    <Flex
                        width='fitContent'
                        height='50px'
                        borderRadius='full'
                        bg='#202020'
                        align='center'
                        justify='center'
                        gap='5px'
                        paddingX='20px'
                    >
                        <BsFillPeopleFill/>
                        <Text> 8 </Text>
                    </Flex>
                    <Flex width='50px' height='50px' borderRadius='full' bg='#202020' align='center' justify='center'>
                        <Text> P </Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}