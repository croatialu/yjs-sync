import type { Draft } from 'immer'
import { produce } from 'immer'
import type { ShallowRef } from 'vue-demi'
import { shallowRef } from 'vue-demi'
import type { Updater } from '../utils'
import { isUpdater } from '../utils'

export function useImmer<T>(baseState: T) {
  const state: ShallowRef<T> = shallowRef(baseState)
  const setState = (updater: Updater<T>) => {
    state.value = produce(state.value, (draft) => {
      if (isUpdater(updater))
        updater(draft as T)

      else
        return updater as Draft<T>
    })
  }

  return [state, setState] as const
}
