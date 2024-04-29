import * as Y from 'yjs'
import { patchSharedType } from '@croatialu/y-sync'
import { useSharedType } from './useSharedType'

export function useArrayRef<T = any>(name: string) {
  const array = useSharedType<Y.Array<T>>(name, Y.Array)

  const getState = () => {
    return array.value.toJSON() as T[]
  }

  const updateState = (value: T[]) => {
    patchSharedType(array.value, value)
  }

  return [getState, updateState] as const
}
