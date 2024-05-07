import { WebsocketProvider } from 'y-websocket'

import { type MaybeRef, computed, shallowRef, toValue, watch } from 'vue-demi'
import { ProviderType, useDoc } from '../../doc'
import { useProviders } from '../../doc/useProviders'
import { createProviderKey } from '../../utils'

export function useWebSocket(
  _url: MaybeRef<string>,
  _room: MaybeRef<string | undefined>,
) {
  const doc = useDoc()
  const { setProvider, removeProvider } = useProviders()
  const room = computed(() => toValue(_room))
  const url = computed(() => toValue(_url))

  const provider = shallowRef()

  watch([room, url], (value, oldValue) => {
    const [newRoom, newUrl] = value
    const [oldRoom, oldUrl] = oldValue

    if (room.value) {
      const p = new WebsocketProvider(
        url.value,
        room.value,
        doc.value,
      )
      provider.value = p

      setProvider(
        createProviderKey(ProviderType.Websocket, url.value),
        room.value,
        p,
      )
    }

    if (
      (!newRoom && oldRoom)
      || (!newUrl && oldUrl)
    ) {
      // remove provider
      removeProvider(
        createProviderKey(ProviderType.Websocket, oldUrl),
        oldRoom || '',
      )
    }
  })

  return computed(() => provider.value)
}
