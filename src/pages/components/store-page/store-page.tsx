import { Flex } from "@chakra-ui/react";
import Header from "../header/header";
import ListPages from './../list-games/list-games';
import Spotilight from "../spotlight/spotlight";
import WeekGames from './../week-games/week-games';

export default function StorePage() {
    return (
        <Flex width='100%' direction='column'>
            <Header />
            <WeekGames />
            <Spotilight />
            <ListPages />
        </Flex>
    )
}