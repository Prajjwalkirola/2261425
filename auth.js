const fetch = require("node-fetch");

async function getAuthToken() {
  try {
    const response = await fetch(
      "http://20.244.56.144/evaluation-service/auth",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "PRAJJWALSINGHKIROLA.220112525@gehu.ac.in",
          name: "Prajjwal Singh Kirola",
          rollNo: "2261425",
          accessCode: "QAhDUr",
          clientID: "94b4b12b-4390-4d1f-950b-7e74417e2dc9",
          clientSecret: "MRQnpJBtwpAEbXnd",
        }),
      }
    );

    const data = await response.json();
    console.log("Access Token:\n", data);
  } catch (error) {
    console.error("Error fetching token:", error.message);
  }
}

getAuthToken();
