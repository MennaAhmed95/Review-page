import axios from "axios";

const EndPointApi = " http://localhost:3009/comments";
export async function GetAllComments() {
  const { data } = await axios.get(EndPointApi);
  return data;
}

export async function AddComment(comment) {
  const { data } = await axios.post(EndPointApi, comment);
  return data;
}
