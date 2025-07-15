const { setToken, Log } = require("./logMiddleware");

// Set your valid token
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJwcmFqandhbHNpbmdoa2lyb2xhLjIyMDExMjUyNUBnZWh1LmFjLmluIiwiZXhwIjoxNzUyNTYyMDU0LCJpYXQiOjE3NTI1NjExNTQsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiI3YTczZGI4Mi04YzM3LTRhMjUtOWFlMi03ZmVmYzRiMTFkNzYiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJwcmFqandhbCBzaW5naCBraXJvbGEiLCJzdWIiOiI5NGI0YjEyYi00MzkwLTRkMWYtOTUwYi03ZTc0NDE3ZTJkYzkifSwiZW1haWwiOiJwcmFqandhbHNpbmdoa2lyb2xhLjIyMDExMjUyNUBnZWh1LmFjLmluIiwibmFtZSI6InByYWpqd2FsIHNpbmdoIGtpcm9sYSIsInJvbGxObyI6IjIyNjE0MjUiLCJhY2Nlc3NDb2RlIjoiUUFoRFVyIiwiY2xpZW50SUQiOiI5NGI0YjEyYi00MzkwLTRkMWYtOTUwYi03ZTc0NDE3ZTJkYzkiLCJjbGllbnRTZWNyZXQiOiJNUlFucEpCdHdwQUViWG5kIn0.ObscB6qmUqOi_nrfLqfR87eJ6glvqOiF--RU8G7XoMI";
setToken(token);

// Now use valid frontend package names only
Log("frontend", "error", "axios", "Failed to fetch data from API");
Log("frontend", "info", "react", "Component mounted successfully");
Log("frontend", "warn", "redux", "Missing reducer for action type XYZ");
