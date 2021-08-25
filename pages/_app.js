import { ChakraProvider } from "@chakra-ui/react";
import Footer from "../components/core/footer";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
      {/* TODO: Move footer to Layout */}
      {/* <Footer /> */}
    </ChakraProvider>
  );
}

export default MyApp;
