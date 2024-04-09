import { ChakraProvider } from "@chakra-ui/nextjs";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default MyApp;
