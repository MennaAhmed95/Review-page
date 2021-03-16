import axios from "axios";

const EndPointApi = "http://localhost:3009/reviews";
export async function GetAllReviews() {
  const { data } = await axios.get(EndPointApi);
  return data;
  console.log(data, "api");
}

export async function AddReview(review) {
  const { data } = await axios.post(EndPointApi, review);
  return data;
}
// <-- to get 2 arrays from database at the same time -->
// useEffect(async () => {
//   await axios
//     .all([
//       axios.get(`http://localhost:3009/reviews`),
//       axios.get(`https://randomuser.me/api/?results=5`),
//     ])
//     .then(
//       axios.spread((review, peron) => {
//         const reviews = review.data;
//         setReviews(reviews);
//         setLength(reviews.length);
//         const persons = peron.data.results;
//         setPerson(persons.slice(0, length));
//       })
//     );
// }, []);
