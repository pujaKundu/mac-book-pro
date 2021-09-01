function updateExtraCharges(serviceChargeId, charge) {
    const updatedServiceCharge = document.getElementById(serviceChargeId + '-cost');
    updatedServiceCharge.innerText = charge;
    calculateTotalPrice();
    promoCode();
}

function extraCharges(serviceId) {
    const extraCharge = document.getElementById(serviceId);
    const extraChargeValue = extraCharge.innerText;
    let updatedChargeValue = parseFloat(extraChargeValue);
    return updatedChargeValue;
}

function calculateTotalPrice() {
    const previousTotalPrice = document.getElementById('total-price');
    const bestPrice = extraCharges('best-price');
    const extraMemoryCharge = extraCharges('extra-memory-cost');
    const extraStorageCharge = extraCharges('extra-storage-cost');
    const deliveryCharge = extraCharges('delivery-cost');
    const currentTotalPrice = bestPrice + extraMemoryCharge + extraStorageCharge + deliveryCharge;
    previousTotalPrice.innerText = currentTotalPrice;
}

//bonus part
function totalPriceValue() {
    const bestPrice = extraCharges('best-price');
    const extraMemoryCharge = extraCharges('extra-memory-cost');
    const extraStorageCharge = extraCharges('extra-storage-cost');
    const deliveryCharge = extraCharges('delivery-cost');
    const currentTotalPrice = bestPrice + extraMemoryCharge + extraStorageCharge + deliveryCharge;
    return currentTotalPrice;
}

function promoCode() {

    const totalPrice = totalPriceValue();
    const promoCodeInput = document.getElementById('promo-code-input');
    const promoCodeCheck = promoCodeInput.value;
    if (promoCodeCheck == 'stevekaku') {
        const discount = totalPrice * 20 / 100;
        const discountedTotalPrice = totalPrice - discount;
        const updatedDiscountedTotalPrice = document.getElementById('updated-total');
        updatedDiscountedTotalPrice.innerText = discountedTotalPrice;
    } else {
        const updatedDiscountedTotalPrice = document.getElementById('updated-total');
        updatedDiscountedTotalPrice.innerText = totalPrice;
    }
}


//extra memory
document.getElementById('8-gb-memory-btn').addEventListener('click',
    function() {
        updateExtraCharges('extra-memory', 0)
    });
document.getElementById('16-gb-memory-btn').addEventListener('click',
    function() {
        updateExtraCharges('extra-memory', 180)
    });



//extra storage charge
document.getElementById('256-gb-storage-btn').addEventListener('click',
    function() {
        updateExtraCharges('extra-storage', 0);
    });
document.getElementById('512-gb-storage-btn').addEventListener('click',
    function() {
        updateExtraCharges('extra-storage', 100);
    });
document.getElementById('1TB-gb-storage-btn').addEventListener('click',
    function() {
        updateExtraCharges('extra-storage', 180);
    });


//delivery charge
document.getElementById('free-delivery-btn').addEventListener('click',
    function() {
        updateExtraCharges('delivery', 0);
    });
document.getElementById('paid-delivery-btn').addEventListener('click',
    function() {
        updateExtraCharges('delivery', 20);
    });

//bonus part
document.getElementById('promo-code-apply-btn').addEventListener('click',
    function() {
        promoCode();
    })