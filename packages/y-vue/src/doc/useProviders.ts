import type { Provider } from '../types'
import { useDocumentContext } from './context'

export function useProviders(): Map<new (...args: any) => Provider, Map<string, Provider>> {
  const { providers } = useDocumentContext()

  if (providers !== null) {
    return providers
  }
  else {
    throw new Error(
      'Could not retrieve a set of providers. Please wrap in a DocumentProvider.',
    )
  }
}
