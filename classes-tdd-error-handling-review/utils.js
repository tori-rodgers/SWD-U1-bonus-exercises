/* Utility functions needed to calculate and print receipt */

const SALES_TAX_RATE = .0925; // 9.25%

function roundToPenny(amount) {
    return Math.round(amount * 100) / 100;
}

function roundWeight(amount) {
    return Math.round(amount * 1000) / 1000;
}

module.exports = {
    SALES_TAX_RATE,
    roundToPenny,
    roundWeight,
}