import { Flex } from "@chakra-ui/react";
import Header from "../header/header";
import ListPages from './../list-games/list-games';

export default function StorePage() {
    return (
        <Flex width='100%' direction='column'>
            <Header />
            {/* <Spotilight/> */}
            <ListPages />
        </Flex>
    )
}