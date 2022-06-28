import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./reset.css";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { StateProvider } from "./contexts/StateProvider";
import { AuthProvider } from "./contexts/AuthContext";
import reducer, { initialState } from "./reducer";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <StateProvider initialState={initialState} reducer={reducer}>
          <BrowserRouter>
            <ChakraProvider>
              <App />
            </ChakraProvider>
          </BrowserRouter>
        </StateProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
