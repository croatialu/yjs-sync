<script setup lang="ts">
import { ref } from 'vue'
import { useArray } from '@croatialu/y-vue'
import { useWebRtc } from '@croatialu/y-vue/provider/webrtc'

useWebRtc('counter-example-yjs-vue-simple-list', {
  // signaling: ['wss://yjs-server.cccboy.com'],
  signaling: ['ws://10.10.20.238:3000/ws/panel'],
})

const [list, updateList] = useArray<{ name: string, id: string }>('state')

const text = ref('')
</script>

<template>
  <div>
    {{ JSON.stringify(list) }}
    <div>
      <input v-model="text" placeholder="please enter">
      <button
        @click="() => {
          updateList((list) => {
            list.push({ name: text, id: Math.random().toString() })
          })
          text = ''
        }"
      >
        Add
      </button>
    </div>

    <div class="list-container">
      <ul>
        <li v-for="item in list" :key="item.id">
          <input
            :value="item.name" style="border: 1px solid black" @input="event => {
              updateList((list) => {
                const el = event.target as HTMLInputElement
                const localItem = list.find((i) => i.id === item.id)
                if (!localItem) return

                localItem.name = el.value
              })
            }"
          >
        </li>
      </ul>
      <br>
      <ul>
        <li v-for="item in list" :key="item.id">
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.list-container {
  display: flex;
  gap: 12px;
}
</style>
