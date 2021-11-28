export const dataSerializer = (param) => {
  try {
    const data = JSON.stringify(param);
    return data;
  } catch (error) {
    console.log("Data Serializer Error", { error });
  }
};

export const dataDeSerializer = (param) => {
  try {
    const data = JSON.parse(param);
    return data;
  } catch (error) {
    console.log("Data De-Serializer Error", { error });
  }
};
