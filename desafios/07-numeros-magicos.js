function lookForUpdades() {
  calculateDiscount(300.5, 20);
}

const INTERVAL_30_MINUTES = 60 * 30 * 1000;

setInterval(lookForUpdades, INTERVAL_30_MINUTES);

function calculateDiscount(price, discount) {
  const dbPrice = price / 100;

  const dbDiscount = discount / 100;

  return { dbPrice, dbDiscount };
}
