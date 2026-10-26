import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { buildDocumentTitle } from '../src/documentTitle.js'

const documents = JSON.parse(readFileSync(new URL('../src/data/documents-2026-10-18.json', import.meta.url)))
const titleOf = kind => buildDocumentTitle(documents.find(document => document.kind === kind))

test('document title follows the opened legal document', () => {
  assert.equal(titleOf('PLATFORM_TERMS'), 'Termos de Uso — MeatShop')
  assert.equal(titleOf('PRIVACY_NOTICE'), 'Política de Privacidade — MeatShop')
  assert.equal(titleOf('ESTABLISHMENT_TERMS'), 'Termos para Estabelecimentos — MeatShop')
})

test('document title reports a missing document', () => {
  assert.equal(buildDocumentTitle(undefined), 'Documento não encontrado — MeatShop')
})
