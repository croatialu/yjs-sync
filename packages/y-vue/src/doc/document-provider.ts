import * as Y from 'yjs'
import type { PropType } from 'vue-demi'
import { computed, defineComponent, onUnmounted } from 'vue-demi'
import { provideDocumentContext } from './context'

export const DocumentProvider = defineComponent({
  props: {
    doc: {
      type: Object as PropType<Y.Doc>,
      default: () => new Y.Doc(),
    },
    scope: {
      type: String,
    },
  },
  setup(props, { slots }) {
    const ctx = provideDocumentContext({
      doc: computed(() => props.doc),
    })

    onUnmounted(() => {
      ctx.providers.forEach((map) => {
        map.forEach(provider => provider.destroy())
      })
    })

    return () => {
      return slots.default?.()
    }
  },
})
