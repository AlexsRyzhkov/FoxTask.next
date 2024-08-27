"use client";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { FC, PropsWithChildren } from "react";

export const AppChakraProvider: FC<PropsWithChildren> = ({ children }) => {
    return (
        <CacheProvider>
            <ChakraProvider>
                {children}
            </ChakraProvider>
        </CacheProvider>
    );
};