<script setup lang="ts">
import { useRecord } from '@croatialu/y-vue'
import { useWebRtc } from '@croatialu/y-vue/provider/webrtc'

useWebRtc('counter-example-yjs-vue-hello', {
  signaling: ['wss://yjs-server.cccboy.com'],
})

const [name, setName] = useRecord<string>('SHARED_NAME')
</script>

<template>
  <div>
    <input
      style="border: 1px solid black"
      :value="name" placeholder="please enter" @input="event => {
        const el = event.target as HTMLInputElement
        setName(el.value)
      }"
    >
    <p>Hello, {{ name }}</p>
  </div>
</template>
