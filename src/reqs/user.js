const API_URL = "http://localhost:8000/";
// const API_URL = "https://ligat99mx-back.herokuapp.com/";

const getUserData = async () => {
  fetch(API_URL + "users/me", {
    method: "GET",
    credentials: "include",
  })
    .then((res) => res.json())
    .then((res) => console.log(res));
};

const checkAuthenticated = async () => {
  return await fetch(API_URL + "users/me", {
    method: "GET",
    credentials: "include",
  }).then((res) => res.status === 200);
};

export { getUserData, checkAuthenticated };
