import { createContext, useState, useEffect } from "react";
import * as Location from "expo-location"; 

export const UserLocationContext = createContext({
  location: null, // Vị trí hiện tại của người dùng
  refreshLocation: () => {}, // Hàm làm mới vị trí
});

export const UserLocationProvider = ({ children }) => {
  const [location, setLocation] = useState(null);
  const [hasLocationPermission, setHasLocationPermission] = useState(false);

  // Hàm yêu cầu quyền truy cập vị trí và lấy vị trí người dùng
  const refreshLocation = async () => {
    try {
      // Yêu cầu quyền truy cập vị trí
      const { status } = await Location.requestForegroundPermissionsAsync();
      
      // Kiểm tra quyền truy cập
      if (status === "granted") {
        setHasLocationPermission(true);
        // Lấy vị trí người dùng
        const userLocation = await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.High,
        });
        setLocation(userLocation);
      } else {
        setHasLocationPermission(false);
        console.log("Location permission denied");
      }
    } catch (error) {
      console.error("Error getting location:", error);
    }
  };

  return (
    <UserLocationContext.Provider value={{ location, refreshLocation }}>
      {children}
    </UserLocationContext.Provider>
  );
};
