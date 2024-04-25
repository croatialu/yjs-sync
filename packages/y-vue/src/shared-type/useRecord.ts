import type { ComputedRef } from 'vue-demi'
import { computed } from 'vue-demi'
import type { Updater } from '../utils'
import { isUpdater } from '../utils'
import { useMap } from './useMap'

const MAP_KEY = 'YJS_VUE___RECORD'

export function useRecord<T>(name: string) {
  const [map, setMap] = useMap(MAP_KEY)

  const record = computed(() => {
    return map.value[name] as T | undefined
  })

  function setRecord(value: Updater<T>) {
    setMap((draft) => {
      if (isUpdater(value))
        value(draft[name])
      else
        draft[name] = value
    })
  }

  return [record, setRecord]
}
