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
