import type { ComputedRef } from 'vue-demi'
import { computed } from 'vue-demi'
import type { Updater } from '../utils'
import { isUpdater } from '../utils'
import { useMap } from './useMap'
import { useMapRef } from './useMapRef'

const MAP_KEY = 'YJS_VUE___RECORD'

export function useRecordRef<T>(name: string) {
  const [getMap, setMap] = useMapRef(MAP_KEY)

  const getState = () => {
    return getMap()[name] as T | undefined
  }

  function updateState(value: T) {
    setMap({
      ...getMap(),
      [name]: value,
    })
  }

  return [getState, updateState]
}
