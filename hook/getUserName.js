import AsyncStorage from '@react-native-async-storage/async-storage';

// Lưu userName kèm theo id
const setUserName = async (id, name) => {
  const userData = await AsyncStorage.getItem('users');
  const users = userData ? JSON.parse(userData) : {}; // Chuyển dữ liệu sang đối tượng
  users[id] = name; // Gán userName theo id
  await AsyncStorage.setItem('users', JSON.stringify(users));
};

// Lấy userName dựa trên id
const getUserName = async (id = null) => {
    const userData = await AsyncStorage.getItem('users');
    const users = userData ? JSON.parse(userData) : {}; // Chuyển dữ liệu sang đối tượng
  
    if (id) {
      return users[id] || null; // Nếu có id, trả về userName của id đó (hoặc null nếu không tìm thấy)
    }
    return users; // Nếu không có id, trả về toàn bộ danh sách userName
  };

export default {
  setUserName,
  getUserName,
};