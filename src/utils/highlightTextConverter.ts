/*
 * Converts text from highlight api
 * @params {string} - Text to be converted
 * @return {string} - Converted text
 */
export function highlightTextConverter(text: string): string {
  switch (text) {
    case 'alert':
      return '* Meta longe de ser batida'
    case 'success':
      return '* Meta do mes batida! Parabéns!'
    case 'warning':
      return '* Falta pouco, vamos lá!'
    default:
      return '* Sem dados no momento'
  }
}
