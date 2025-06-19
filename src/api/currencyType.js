import axios from "axios";

export async function getMeals() {
   const { data } = await axios.get("https://example.com/api/meals");
   return data;
}
