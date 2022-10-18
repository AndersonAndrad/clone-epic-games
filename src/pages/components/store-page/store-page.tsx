import {Box, Flex} from "@chakra-ui/react";
import Header from "../header/header";
import WeekGames from "../week-games/week-games";

export default function StorePage() {
    return (
        <Flex width='100%' direction='column'>
            <Header/>
            <WeekGames/>
        </Flex>
    )
}