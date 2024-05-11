import type * as Y from 'yjs'
import type { ComputedRef } from 'vue-demi'
import { computed } from 'vue-demi'
import { useDoc } from '../doc'

export function useSharedType<T extends Y.AbstractType<any>>(
  name: string,
  constructor: (new () => Y.AbstractType<any>),
): ComputedRef<T> {
  const doc = useDoc()
  return computed(() => {
    return doc.value.get(name, constructor) as T
  })
}
