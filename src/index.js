// import "./css/style.css"; //importing css

// Create a currency converter webpage. The page should convert the given currency to the chosen one.

// getting all the currencies
const fetchAllCurrencies = async () => {
  try {
    let response = await fetch(
      "https://api.coinconvert.net/convert/btc/usd?amount=1"
    );
    let data = await response.json();

    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

fetchAllCurrencies();

const convert = document.querySelector(".btn");
const result = document.querySelector("#output");
const from = document.querySelector("#dropdown");
const to = document.querySelector("#dropdown2");
const amount = document.querySelector("#inputAmount");

convert.addEventListener("click", function () {
  let fromCurrency = from.value;
  let toCurrency = to.value;
  let amt = amount.value;
  fetch(`https://api.coinconvert.net/convert/${fromCurrency}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let rate = data.rates[toCurrency];
      let total = rate * amt;
      result.innerHTML = `${amt} ${fromCurrency} = ${total}
            ${toCurrency}`;
      return data.json();
    });
});

console.log(response, data);
