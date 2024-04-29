import type { ProviderOptions } from 'y-webrtc'
import { WebrtcProvider } from 'y-webrtc'

import type { ComputedRef, MaybeRef } from 'vue-demi'
import { computed, toValue, watch } from 'vue-demi'
import { useProviders } from '../../doc/useProviders'
import { ProviderType, useDoc } from '../../doc'
import { createProviderKey } from '../../utils'

export function useWebRtc(
  _room: MaybeRef<string | undefined>,
  options?: ProviderOptions,
): ComputedRef<WebrtcProvider | undefined> {
  const doc = useDoc()
  const { setProvider, removeProvider } = useProviders()
  const room = computed(() => toValue(_room))

  const provider = computed(() => {
    if (!room.value)
      return

    const p = new WebrtcProvider(
      room.value,
      doc.value,
      options,
    )
    setProvider(
      createProviderKey(ProviderType.Webrtc),
      room.value,
      p,
    )

    return p
  })

  watch(room, (value, oldValue) => {
    if (!value && oldValue) {
      // remove provider
      removeProvider(
        createProviderKey(ProviderType.Webrtc),
        oldValue,
      )
    }
  })

  return provider
}
