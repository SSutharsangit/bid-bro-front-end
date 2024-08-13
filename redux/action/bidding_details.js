// bidnotification.js
import HttpInterceptor from "../../services/HttpInterceptor.js";

const http = new HttpInterceptor();

export const GetAuctionDetails = (callback) => {
  const endpoint = `${process.env.api_base_url}/auction/get`; // Assuming /list returns all auctions
  try {
    http
      .get(endpoint)
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



// import HttpInterceptor from "../../services/HttpInterceptor.js";

// const http = new HttpInterceptor();

// export const GetAuctionDetails = (id, callback) => {
//   const endpoint = `${process.env.api_base_url}/auction/get`;
//   try {
//     http
//       .get(endpoint)
//       .then((response) => {
//         callback(response);
//       })
//       .catch((error) => {
//         callback(error.response);
//       });
//   } catch (error) {
//     callback(error.response);
//   }
// };