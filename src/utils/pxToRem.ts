/*
 * Convert pixels to rem
 * @params {number} px - The pixel value
 * @return {string} - The rem value
 */
export const pxToRem = (px: number): string => `${px / 16}rem`
