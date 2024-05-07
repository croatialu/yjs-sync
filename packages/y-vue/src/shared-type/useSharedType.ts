import type * as Y from 'yjs'
import type { ComputedRef } from 'vue-demi'
import { computed } from 'vue-demi'
import { useDoc } from '../doc'
import { Y_SYNC_STORE_KEY } from '../constants'

export function useSharedType<T extends Y.AbstractType<any>>(
  name: string,
  constructor: (new () => Y.AbstractType<any>) | undefined,
): ComputedRef<T> {
  const doc = useDoc()
  return computed(() => {
    const map = doc.value.getMap(Y_SYNC_STORE_KEY)

    const result = map.get(name)

    if (!result && constructor) {
      const type = new constructor()
      map.set(name, type)
      return type as T
    }

    return result as T
  })
}
