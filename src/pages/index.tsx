import { Flex } from '@chakra-ui/react';
import SideMenu from "./components/side-menu/side-menu";
import StorePage from './components/store-page/store-page';

export default function Home() {
    return (
        <Flex>
            <SideMenu />
            <StorePage />
        </Flex>
    )
}
