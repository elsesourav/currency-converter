import { useState, useEffect } from "react";

export default function useCurrencyInfo(currency) {
   const [data, setData] = useState({});

   useEffect(() => {
      fetch(`https://api.frankfurter.app/latest?from=${currency}`)
         .then((res) => res.json())
         .then((res) => setData(res.rates))
         .catch(console.error);
   }, [currency]);

   return data;
}
