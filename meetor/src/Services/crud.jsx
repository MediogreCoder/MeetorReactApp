import api from "./apiConfig";

export const getAllUsers = async () => {
  try {
    const response = await api.get("/users");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const registerUser = async (newUser) => {
  try {
    const response = await api.post("/users", newUser);
    return response.data;
  } catch (error) {
    throw error;
  }
};