import axios from "axios";

export async function getCurrencyValue(currency) {
   const response = await axios.get(
      `https://api.frankfurter.app/latest?from=${currency}`
   );

   if (!response.ok) {
      throw new Error("Failed to fetch currency data");
   }
   
   console.log(`Fetched currency data for ${currency}:`, response.data);
   return response.data;
}
