import type { IndexeddbPersistence } from 'y-indexeddb'
import type { WebrtcProvider } from 'y-webrtc'
import type { WebsocketProvider } from 'y-websocket'

export type Provider =
  | WebrtcProvider
  | WebsocketProvider
  | IndexeddbPersistence

export type ProviderConstructor = new (...args: any[]) => Provider

export enum ProviderType {
  Websocket = 'WEBSOCKET',
  Webrtc = 'WEBRTC',
  Indexeddb = 'INDEXEDDB',
}
