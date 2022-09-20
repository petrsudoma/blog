import Axios from "axios";

const backendUrl = process.env.REACT_APP_BACKEND_URL as string;

async function fetchImage(imageId: string) {
    const res = await Axios.get(backendUrl + "/images/" + imageId);
    return res.data;
}

function postImage(data: FormData) {
    const token = localStorage.getItem("access_token");

    return Axios.post(backendUrl + "/images", data, {
        headers: { Authorization: "Bearer " + token },
    });
}

function deleteImage(imageId: string) {
    const token = localStorage.getItem("access_token");

    return Axios.delete(backendUrl + "/images/" + imageId, {
        headers: { Authorization: "Bearer " + token },
    });
}

export { fetchImage, postImage, deleteImage };
