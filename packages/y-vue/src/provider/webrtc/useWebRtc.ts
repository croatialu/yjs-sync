import type { ProviderOptions } from 'y-webrtc'
import { WebrtcProvider } from 'y-webrtc'

import type { ComputedRef, MaybeRef } from 'vue-demi'
import { computed, shallowRef, toValue, watch } from 'vue-demi'
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

  const provider = shallowRef<WebrtcProvider>()

  watch(room, (value, oldValue) => {
    if (value) {
      const p = new WebrtcProvider(
        value,
        doc.value,
        options,
      )
      provider.value = p

      setProvider(
        createProviderKey(ProviderType.Webrtc),
        value,
        p,
      )
    }

    if (!value && oldValue) {
      // remove provider
      removeProvider(
        createProviderKey(ProviderType.Webrtc),
        oldValue,
      )
    }
  }, { immediate: true })

  return computed(() => provider.value)
}
