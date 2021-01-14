const API_URL = process.env.VUE_APP_API_URL;

const getUserData = async () => {
  const userData = await fetch(API_URL + "users/me", {
    method: "GET",
    credentials: "include",
  }).then((res) => res.json());

  return userData;
};

const checkAuthenticated = async () => {
  return await fetch(API_URL + "users/me", {
    method: "GET",
    credentials: "include",
  }).then((res) => res.status === 200);
};

const updateUserData = async (data) => {
  const { id } = await getUserData();

  console.log(data);

  const updatedData = await fetch(API_URL + "users/" + id, {
    method: "PUT",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
  console.log(updatedData);
};

const uploadUserPicture = async (file) => {
  const formData = new FormData();
  formData.append("files", file);

  const picture_url = fetch(API_URL + "upload/", {
    method: "POST",
    credentials: "include",
    body: formData,
  })
    .then((res) => res.json())
    .then((res) => res[0].medium);

  return API_URL + picture_url.substring(1);
};

export { getUserData, checkAuthenticated, updateUserData, uploadUserPicture };
