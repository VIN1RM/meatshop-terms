import documents from './data/documents-2026-10-18.json'

const query = new URLSearchParams(window.location.search)
const version = query.get('version') || '2026-10-18'
export const DOCUMENTS = documents
export const SELECTED_DOCUMENT = documents.find(document => document.kind === (query.get('document') || 'PLATFORM_TERMS') && document.version === version)
export const DOCUMENT_META = { version, updatedAt: '18 de outubro de 2026', platform: 'Android, iOS e painel web' }
export const SECTIONS = SELECTED_DOCUMENT ? SELECTED_DOCUMENT.content.split(/\n\n(?=\d+[ .])/).map((part, index) => {
  const [title, ...lines] = part.split('\n')
  return { id: `s${index + 1}`, num: String(index + 1).padStart(2, '0'), title, content: [{ type: 'p', text: lines.join('\n') }] }
}) : []
