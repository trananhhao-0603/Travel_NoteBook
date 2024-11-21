import { createContext } from "react";

export const UserLocationContext = createContext({
  latitude: 37.78825,
  longitude: 33,
  // latitudeDelta: 0.0322,
  // longitudeDelta: 0.0421,
});