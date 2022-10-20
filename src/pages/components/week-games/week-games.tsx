import {Flex} from "@chakra-ui/react";
import CurrentGame from "./current-game";
import GameToList from "./game-to-list";

export default function WeekGames() {
    return (
        <Flex gap={'50px'}>
            <CurrentGame/>
            <Flex direction={'column'} gap={'10px'} justify={'space-between'}>
                <GameToList/>
                <GameToList/>
                <GameToList/>
                <GameToList/>
                <GameToList/>
            </Flex>
        </Flex>
    )
}