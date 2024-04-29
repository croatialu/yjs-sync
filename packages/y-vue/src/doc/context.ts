import * as Y from 'yjs'
import type { MaybeRef, ShallowRef } from 'vue-demi'
import { inject, isRef, provide, shallowRef } from 'vue-demi'
import type { Provider } from '../types'

const YJS_VUE_IDENTIFIER = 'YJS_VUE'

interface DocumentContext {
  doc: ShallowRef<Y.Doc>
  providers: Map<string, Map<string, Provider>>
}

export function provideDocumentContext(payload?: { doc?: MaybeRef<Y.Doc> }) {
  const { doc } = payload || {}
  const realDoc = isRef(doc) ? doc.value : doc

  const localDoc = shallowRef(realDoc || new Y.Doc())

  const ctx = {
    doc: localDoc,
    providers: new Map(),
  }

  provide(YJS_VUE_IDENTIFIER, ctx)
  return ctx as DocumentContext
}

export function useDocumentContext(): DocumentContext {
  const ctx = inject<DocumentContext>(YJS_VUE_IDENTIFIER)

  if (!ctx)
    throw new Error('Could not retrieve document context. Please wrap in a DocumentProvider.')

  return ctx
}
