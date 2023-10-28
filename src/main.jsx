import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from 'react-redux';
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes.jsx";
import "./index.css";
// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react';
import AuthProvider from "./providers/AuthProvider.jsx";
import { store } from './redux/store.js';
// Create a client
const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <ChakraProvider>
          <HelmetProvider>
            <QueryClientProvider client={queryClient}>
              <RouterProvider router={router} />
            </QueryClientProvider>
          </HelmetProvider>
        </ChakraProvider>
      </AuthProvider>
    </Provider>
  </React.StrictMode>
);

