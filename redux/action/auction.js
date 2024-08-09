import HttpInterceptor from "../../services/HttpInterceptor.js";

const http = new HttpInterceptor();

export const AddAuctionMethod = (data,callback) => {
  const endpoint = `${process.env.api_base_url}/auction/post`;
  try {
    http
      .post(endpoint,data)
      .then((response) => {
        callback(response);
      })
      .catch((error) => {
        callback(error.response);
      });
  } catch (error) {
    callback(error.response);
  }
};