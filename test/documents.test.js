import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { createHash } from 'node:crypto'

const documents = JSON.parse(readFileSync(new URL('../src/data/documents-2026-10-18.json', import.meta.url)))
test('every legal document preserves its published content hash', () => {
  assert.equal(documents.length, 3)
  for (const document of documents) {
    assert.equal(createHash('sha256').update(document.content).digest('hex'), document.content_hash)
    assert.equal(document.version, '2026-10-18')
    assert.ok(document.content.includes('viniciusrodri0809@gmail.com'))
  }
})
test('public archive matches the application catalog', () => {
  const archive = JSON.parse(readFileSync(new URL('../public/legal/documents-2026-10-18.json', import.meta.url)))
  assert.deepEqual(archive, documents)
})
