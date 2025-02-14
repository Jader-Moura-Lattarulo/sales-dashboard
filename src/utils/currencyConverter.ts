/**
 * Converts to BRL currency format
 * @param {number} value - The number to be converted
 * @returns {string} - The converted value in BRL currency format
 */
export function currencyConverter(value: number): string {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(value);
}
