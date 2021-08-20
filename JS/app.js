function updateProductInput(product, price, isIncreasing) {
    const productInput = document.getElementById(product + "-number");
    let productNumber = parseInt(productInput.value);
    if (isIncreasing == true) {
        productNumber = productNumber + 1;
    }
    else if (productNumber > 0) {
        productNumber = productNumber - 1
    }
    productInput.value = productNumber;

    // get price
    const productPrice = document.getElementById(product + "-total");
    productPrice.innerText = productNumber * price
    calculateTotal()
}
// get product input
function getInputValue(product) {
    const productInput = document.getElementById(product + "-number");
    const productNumber = productInput.value;
    return productNumber;
}
// calculate total
function calculateTotal() {
    const phoneTotal = getInputValue("phone") * 1219;
    const phoneTotal2 = getInputValue("phone2") * 1250;
    const phoneTotal3 = getInputValue("phone3") * 1300;
    const caseTotal = getInputValue("case") * 59;
    const subTotal = phoneTotal + phoneTotal2 + phoneTotal3 + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    // update on html
    document.getElementById("sub-total").innerText = subTotal;
    document.getElementById("tax-amount").innerText = tax;
    document.getElementById("total-price").innerText = totalPrice;

}

// handle phone increase and decrease
document.getElementById("phone-plus").addEventListener("click", function () {
    updateProductInput("phone", 1219, true)
})
document.getElementById("phone-minus").addEventListener("click", function () {
    updateProductInput("phone", 1219, false)
})

document.getElementById("phone-plus2").addEventListener("click", function () {
    updateProductInput("phone2", 1250, true)
    console.log("clicked")
})

document.getElementById("phone-minus2").addEventListener("click", function () {
    updateProductInput("phone2", 1250, false);

})
document.getElementById("phone3-plus").addEventListener("click", function () {
    updateProductInput("phone3", 1300, true)
})
document.getElementById("phone3-minus").addEventListener("click", function () {
    updateProductInput("phone3", 1300, false)
})

// handle case increase and decrease
document.getElementById("case-minus").addEventListener("click", function () {
    updateProductInput("case", 59, false);
})
document.getElementById("case-plus").addEventListener("click", function () {
    updateProductInput("case", 59, true)
})



