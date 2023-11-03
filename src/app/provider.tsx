import "./globals.css";
import { MantineProvider } from "@mantine/core";

export interface ProviderProps {
  children: React.ReactNode;
}

export default function Provider({ children }: ProviderProps) {
  return (
    <MantineProvider defaultColorScheme="light">{children}</MantineProvider>
  );
}
