import { useState, useEffect } from "react";
import useCurrencyInfo from "useCurrencyInfo";

export default function CurrencyConverter() {
   const [amount, setAmount] = useState(1);
   const [fromCurrency, setFromCurrency] = useState("USD");
   const [toCurrency, setToCurrency] = useState("EUR");
   const [currencyList, setCurrencyList] = useState([
      "USD",
      "EUR",
      "GBP",
      "JPY",
      "INR",
   ]);
   const { data: rates, loading, error } = useCurrencyInfo(fromCurrency);

   // Fetch available currencies on mount
   useEffect(() => {
      fetch("https://api.frankfurter.app/currencies")
         .then((res) => res.json())
         .then((data) => setCurrencyList(Object.keys(data)))
         .catch(() => console.log("Using default currency list"));
   }, []);

   if (loading) return <div className="loading">Loading exchange rates...</div>;
   if (error) return <div className="error">Error: {error}</div>;

   return (
      <div className="currency-converter">
         <h1>Currency Converter</h1>

         <div className="input-group">
            <label>Amount:</label>
            <input
               type="number"
               min="0"
               step="0.01"
               value={amount}
               onChange={(e) => setAmount(e.target.value)}
            />
         </div>

         <div className="currency-selectors">
            <div className="from-currency">
               <label>From:</label>
               <select
                  value={fromCurrency}
                  onChange={(e) => setFromCurrency(e.target.value)}
               >
                  {currencyList.map((currency) => (
                     <option key={`from-${currency}`} value={currency}>
                        {currency}
                     </option>
                  ))}
               </select>
            </div>

            <button
               className="swap-btn"
               onClick={() => {
                  const temp = fromCurrency;
                  setFromCurrency(toCurrency);
                  setToCurrency(temp);
               }}
            >
               ⇄ Swap
            </button>

            <div className="to-currency">
               <label>To:</label>
               <select
                  value={toCurrency}
                  onChange={(e) => setToCurrency(e.target.value)}
               >
                  {currencyList.map((currency) => (
                     <option key={`to-${currency}`} value={currency}>
                        {currency}
                     </option>
                  ))}
               </select>
            </div>
         </div>

         <div className="result">
            <h2>
               {amount} {fromCurrency} ={" "}
               {rates && rates[toCurrency]
                  ? (amount * rates[toCurrency]).toFixed(2)
                  : "..."}{" "}
               {toCurrency}
            </h2>
         </div>
      </div>
   );
}
