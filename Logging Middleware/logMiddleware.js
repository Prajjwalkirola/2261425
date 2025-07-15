const fetch = require("node-fetch");

let token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJwcmFqandhbHNpbmdoa2lyb2xhLjIyMDExMjUyNUBnZWh1LmFjLmluIiwiZXhwIjoxNzUyNTYyMDU0LCJpYXQiOjE3NTI1NjExNTQsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiI3YTczZGI4Mi04YzM3LTRhMjUtOWFlMi03ZmVmYzRiMTFkNzYiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJwcmFqandhbCBzaW5naCBraXJvbGEiLCJzdWIiOiI5NGI0YjEyYi00MzkwLTRkMWYtOTUwYi03ZTc0NDE3ZTJkYzkifSwiZW1haWwiOiJwcmFqandhbHNpbmdoa2lyb2xhLjIyMDExMjUyNUBnZWh1LmFjLmluIiwibmFtZSI6InByYWpqd2FsIHNpbmdoIGtpcm9sYSIsInJvbGxObyI6IjIyNjE0MjUiLCJhY2Nlc3NDb2RlIjoiUUFoRFVyIiwiY2xpZW50SUQiOiI5NGI0YjEyYi00MzkwLTRkMWYtOTUwYi03ZTc0NDE3ZTJkYzkiLCJjbGllbnRTZWNyZXQiOiJNUlFucEpCdHdwQUViWG5kIn0.ObscB6qmUqOi_nrfLqfR87eJ6glvqOiF--RU8G7XoMI"; // to store the Bearer token

function setToken(bearerToken) {
  token = bearerToken;
}

async function Log(stack, level, packageName, message) {
  const payload = {
    stack: stack.toLowerCase(),
    level: level.toLowerCase(),
    package: packageName.toLowerCase(),
    message,
  };

  try {
    const response = await fetch(
      "http://20.244.56.144/evaluation-service/logs",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // ✅ CORRECT
        },
        body: JSON.stringify(payload),
      }
    );

    const data = await response.json();
    console.log("Response from server:", data);
  } catch (error) {
    console.error("Log Error:", error.message);
  }
}

module.exports = { Log, setToken }; // ✅ EXPORT BOTH
