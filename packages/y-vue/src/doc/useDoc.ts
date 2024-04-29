import { watch } from 'vue-demi'
import { useDocumentContext } from './context'

export function useDoc() {
  const { doc } = useDocumentContext()

  watch(doc, (_, oldDoc) => {
    oldDoc?.destroy()
  })

  return doc
}
