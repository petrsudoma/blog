import Axios from "axios";

const backendUrl = process.env.REACT_APP_BACKEND_URL as string;

type CreateArticleType = {
    title: string;
    perex: string;
    content: string;
    image_id: string;
};

type UpdateArticleType = {
    title?: string;
    perex?: string;
    content?: string;
    image_id?: string;
};

function fetchArticle(articleId: string) {
    return Axios.get(backendUrl + "/articles/" + articleId);
}

function fetchArticles() {
    return Axios.get(backendUrl + "/articles");
}

function fetchUserArticles() {
    const token = localStorage.getItem("access_token");

    return Axios.get(backendUrl + "/articles/protected", {
        headers: { Authorization: "Bearer " + token },
    });
}

function postArticle(data: CreateArticleType) {
    const token = localStorage.getItem("access_token");

    return Axios.post(backendUrl + "/articles", data, {
        headers: { Authorization: "Bearer " + token },
    });
}

function updateArticle(data: UpdateArticleType, articleId: string) {
    const token = localStorage.getItem("access_token");

    return Axios.patch(backendUrl + "/articles/" + articleId, data, {
        headers: { Authorization: "Bearer " + token },
    });
}

function deleteArticle(articleId: string) {
    const token = localStorage.getItem("access_token");

    return Axios.delete(backendUrl + "/articles/" + articleId, {
        headers: { Authorization: "Bearer " + token },
    });
}

export {
    fetchArticle,
    fetchArticles,
    fetchUserArticles,
    postArticle,
    updateArticle,
    deleteArticle,
};
