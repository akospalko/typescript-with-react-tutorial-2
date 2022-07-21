//Format the input values into a currency
const formatter = new Intl.NumberFormat(undefined, {style:"currency", currency: "HUF", maximumFractionDigits: 0,
 }) //target currency: HUF

export function formatCurrency(number: number) {
    return formatter.format(number);
} 