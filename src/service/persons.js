import axios from "axios";

const EndPointApi = " http://localhost:3009/results";
export async function GetAllPersons() {
  const { data } = await axios.get(EndPointApi);
  return data;
}

export async function AddPerson(person) {
  const { data } = await axios.post(EndPointApi, person);
  return data;
}

// const [person, setPerson] = useState([]);
// useEffect(async () => {
//   const response = await fetch("https://randomuser.me/api/?results=100");
//   const data = await response.json();
//   setPerson(data.results.slice(0, length));
// }, []);
