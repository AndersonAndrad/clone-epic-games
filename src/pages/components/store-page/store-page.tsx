import {Box, Flex} from "@chakra-ui/react";
import Header from "../header/header";
import WeekGames from "../week-games/week-games";
import Spotilight from "../spotlight/spotlight";

export default function StorePage() {
    return (
        <Flex width='100%' direction='column'>
            <Header/>
            <Spotilight/>
        </Flex>
    )
}