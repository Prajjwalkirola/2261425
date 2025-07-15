const fetch = require("node-fetch");

async function register() {
  const response = await fetch(
    "http://20.244.56.144/evaluation-service/register",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "PRAJJWALSINGHKIROLA.220112525@gehu.ac.in",
        name: "Prajjwal Singh Kirola",
        mobileNo: "9520469836",
        githubUsername: "	Prajjwal Singh ",
        rollNo: "2261425",
        accessCode: "QAhDUr",
      }),
    }
  );

  const data = await response.json();
  console.log(data);
}

register();
