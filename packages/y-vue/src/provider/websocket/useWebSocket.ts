import { WebsocketProvider } from 'y-websocket'

import { type MaybeRef, computed, toValue, watch } from 'vue-demi'
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

  const provider = computed(() => {
    if (!room.value || !url.value || !doc.value)
      return

    const p = new WebsocketProvider(
      url.value,
      room.value,
      doc.value,
    )
    setProvider(
      createProviderKey(ProviderType.Websocket, url.value),
      room.value,
      p,
    )

    return p
  })

  watch([room, url], (value, oldValue) => {
    const [newRoom, newUrl] = value
    const [oldRoom, oldUrl] = oldValue

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

  return provider
}
