import { AppContext } from "@/context";
import { useContext } from "react";

export const useAppState = () => {
  const appState = useContext(AppContext);
  return appState;
};
