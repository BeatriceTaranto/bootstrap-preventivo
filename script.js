const formElement = document.getElementById("form")
const promoElement = document.getElementById("promo-code")
const selectJobElement = document.getElementById("job")
const totalPriceElement = document.getElementById("total-price")
const hours = 10
const promoCodes = ["YHDNU32",
    "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"]

formElement.addEventListener("submit", function (event) {
    event.preventDefault();
    const selectedJob = selectJobElement.value;
    let pricePerHour;

    if (selectedJob === "1") {
        pricePerHour = 20.50
    } else if (selectedJob === "2") {
        pricePerHour = 15.30
    } else if (selectedJob === "3") {
        pricePerHour = 33.60
    }

    let totalPrice = pricePerHour * hours;
    const userCode = promoElement.value;

    function calcPromoPrice(price) {
        return price * 0.25;
    }

    let promoPrice = totalPrice - calcPromoPrice(totalPrice)

    promoElement.classList.remove("is-valid", "is-invalid")
    if (promoCodes.includes(userCode)) {
        totalPrice = promoPrice
        promoElement.classList.add("is-valid")
    } else {
        promoElement.classList.add("is-invalid")
    }

    totalPriceElement.innerHTML = "€" + totalPrice.toFixed(2)
})

