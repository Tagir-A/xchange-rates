function currencyFormatter(code, number, maximumFractionDigits = 2) {
  return new Intl.NumberFormat("en-EN", {
    style: "currency",
    maximumFractionDigits,
    currency: code
  }).format(number);
}

export default currencyFormatter