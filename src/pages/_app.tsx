import { ChakraProvider } from "@chakra-ui/react";
import { defaultTheme } from "../../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
      <ChakraProvider theme={defaultTheme} >
          <Component {...pageProps} />
      </ChakraProvider>
  );
}

export default MyApp;
