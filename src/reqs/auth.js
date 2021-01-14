const API_URL = process.env.VUE_APP_API_URL;

const registerUser = async (data) => {
  console.log(JSON.stringify(data));

  await fetch(API_URL + "auth/local/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (!res.ok || res.status !== 201) throw "User not created";
    })
    .catch((err) => console.error(err));

  return await loginUser(data);
};

const loginUser = async (data) => {
  const { status } = await fetch(API_URL + "auth/local", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      identifier: data.username || data.email,
      password: data.password,
    }),
  })
    .then((res) => {
      if (!res.ok || res.status !== 200) throw "Could not log in";
      return res.json();
    })
    .catch((err) => console.error(err));

  return status;
};

const logoutUser = async () => {
  await fetch(API_URL + "logout", {
    method: "POST",
    credentials: "include",
  })
    .then((res) => {
      if (!res.ok || res.status !== 200) throw "There was an error";
    })
    .then((res) => console.log(res))
    .catch((err) => console.error(err));

  return true;
};

export { registerUser, logoutUser, loginUser };
