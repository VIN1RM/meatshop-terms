export const SITE_NAME = 'MeatShop'
export const NOT_FOUND_TITLE = 'Documento não encontrado'

export function buildDocumentTitle(selectedDocument) {
  return `${selectedDocument?.title ?? NOT_FOUND_TITLE} — ${SITE_NAME}`
}
