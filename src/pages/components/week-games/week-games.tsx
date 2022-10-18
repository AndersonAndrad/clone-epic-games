import {Flex} from "@chakra-ui/react";
import CurrentGame from "./current-game";
import GameToList from "./game-to-list";

export default function WeekGames() {
    return (
        <Flex>
            <CurrentGame/>
            <GameToList/>
        </Flex>
    )
}