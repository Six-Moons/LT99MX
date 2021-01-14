const API_URL = process.env.VUE_APP_API_URL;

const getNews = async () => {
  const news = await fetch(API_URL + "noticias").then((res) => res.json());
  return news;
};

export { getNews };
