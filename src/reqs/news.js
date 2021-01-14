const API_URL = process.env.VUE_APP_API_URL;

const getNews = async () => {
  const news = await fetch(API_URL + "noticias").then((res) => res.json());
  return news;
};

const getArticle = async (id) => {
  const article = await fetch(API_URL + "noticias/" + id).then((res) =>
    res.json()
  );
  return article;
};

export { getNews, getArticle };
