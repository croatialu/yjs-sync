import * as Y from 'yjs'
import { patchSharedType } from '@croatialu/y-sync'
import { useSharedType } from './useSharedType'

export function useMapRef<T = any>(name: string) {
  const map = useSharedType<Y.Map<T>>(name, Y.Map)

  const getState = () => {
    return map.value.toJSON() as { [x: string]: T | undefined }
  }

  const updateState = (value: { [x: string]: T | undefined }) => {
    patchSharedType(map.value, value)
  }

  return [getState, updateState] as const
}
