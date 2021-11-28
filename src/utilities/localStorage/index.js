import { dataDeSerializer, dataSerializer } from "../dataSerializer";

export const getStorageData = (key, param) => {
  try {
    const response = localStorage.getItem(key);
    if (!response) {
      setStorageData(key, param);
      return {
        status: true,
        data: param,
      };
    }
    const data = dataDeSerializer(response);
    return {
      status: true,
      data,
    };
  } catch (error) {
    console.log("Get Local Storage Error", { error });
    return {
      status: false,
      data: "",
    };
  }
};

export const setStorageData = (key, param) => {
  try {
    const data = dataSerializer(param);
    localStorage.setItem(key, data);
    return true;
  } catch (error) {
    console.log("Set Local Storage Error", { error });
    return false;
  }
};
