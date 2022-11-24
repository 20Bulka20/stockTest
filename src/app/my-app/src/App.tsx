import * as React from "react";
import axios from "axios";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuote } from "./stockSlice";
import {
  ChakraProvider,
  Box,
  FormLabel,
  Input,
  FormControl,
  Button,
  Container,
  Flex,
} from "@chakra-ui/react";

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const dataStock = useSelector((state: any) => state.stock.quote);
  const postData = (value: string) => {
    const stockData = {
      stockTickerSymbol: value,
    };
    axios
      .post("http://localhost:8080/", stockData)
      .then(function (response) {
        dispatch(setQuote(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleClick = () => {
    if (inputRef.current != null) {
      postData(inputRef.current.value);
    }
  };
  const StockList = () => {
    if (
      Object.keys(dataStock).length !== 0 &&
      dataStock.constructor === Object
    ) {
      const dataStockEntries = Object.entries(dataStock);
      const currentPrice =
        dataStockEntries.filter((item) => item[0] === "c")[0][1] + "";
      return <Box>Current Price: ${currentPrice}</Box>;
    } else return <></>;
  };

  return (
    <ChakraProvider>
      <Flex alignItems="center" id="container" flexDirection="column">
        <Container maxW="md" marginTop="100px">
          <FormControl isRequired>
            <FormLabel>Enter stock symbol</FormLabel>
            <Input
              ref={inputRef}
              type="text"
              id="message"
              name="message"
              placeholder="Enter stock ticker symbol "
              size="md"
            />
            <Button marginTop="20px" type="submit" onClick={handleClick}>
              Submit
            </Button>
          </FormControl>
        </Container>
        <StockList />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
