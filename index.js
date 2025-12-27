const currencyFirstEl = document.getElementById("currencyFirst");
const worthFirstEl = document.getElementById("worthFirst");

const currencySecondEl = document.getElementById("currencySecond");
const worthSecondEl = document.getElementById("worthSecond");

const exchangeRateEl = document.querySelector(".exchange-rate");

function updateRate() {
    fetch(`https://v6.exchangerate-api.com/v6/e43ad0bb75235d55c17698cd/latest/${currencyFirstEl.value}`)
        .then(res => res.json())
        .then(data => {
            const rate = data.conversion_rates[currencySecondEl.value];

            exchangeRateEl.innerText =
                `1 ${currencyFirstEl.value} = ${rate} ${currencySecondEl.value}`;

            worthSecondEl.value = (worthFirstEl.value * rate).toFixed(2);
        })
        .catch(() => {
            exchangeRateEl.innerText = "Error fetching exchange rate";
        });
}

// Event listeners
currencyFirstEl.addEventListener("change", updateRate);
currencySecondEl.addEventListener("change", updateRate);
worthFirstEl.addEventListener("input", updateRate);

// Initial conversion
updateRate();
