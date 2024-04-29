import type { Provider } from '../types'
import { useDocumentContext } from './context'

export function useProviders() {
  const { providers } = useDocumentContext()

  const ensureProvider = (key: string) => {
    if (!providers.has(key)) {
      const r = new Map<string, Provider>()
      providers.set(key, r)
      return r
    }

    return providers.get(key)!
  }

  const setProvider = (
    key: string,
    room: string,
    provider: Provider,
  ) => {
    ensureProvider(key).get(room)?.destroy()
    ensureProvider(key).set(room, provider)
  }

  const removeProvider = (key: string, room: string) => {
    ensureProvider(key).get(room)?.destroy()
    ensureProvider(key).delete(room)
  }

  return {
    ensureProvider,
    setProvider,
    removeProvider,
  }
}
