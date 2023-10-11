function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulate an API request or any asynchronous operation
    setTimeout(() => {
      const data = { message: "API response data" };
      resolve(data);
    }, 2000); // Simulating a 2-second delay
  });
}

export default getResponseFromAPI;
