import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes.jsx";
import "./index.css";
import AuthProvider from "./providers/AuthProvider.jsx";
// Create a client
const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      {/* <ChakraProvider theme={theme}> */}
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <div className="max-w-screen-xl mx-auto">
            <RouterProvider router={router} />
          </div>
        </QueryClientProvider>
      </HelmetProvider>
      {/* </ChakraProvider> */}
    </AuthProvider>
  </React.StrictMode>
);

