import * as React from "react";
import axios from "axios";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuote } from "./stockSlice";
import {
  ChakraProvider,
  FormLabel,
  Input,
  FormControl,
  Button,
  Container,
  Flex,
  List,
  ListItem,
} from "@chakra-ui/react";
import "./App.css";

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const dataStock = useSelector((state: any) => state.stock.quote);
  console.log(dataStock);
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
      console.log("dataStockEntries", dataStockEntries);

      return (
        <List marginTop="40px">
          {dataStockEntries.map((item, index) => {
            return (
              <ListItem
                width="350px"
                marginBottom="10px"
                key={index}
                textAlign="center"
              >
                {`${item[0]}:  ${item[1]}`}
              </ListItem>
            );
          })}
        </List>
      );
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
