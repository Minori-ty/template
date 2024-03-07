/// <reference path="../node_modules/@types/chrome/index.d.ts" />

declare module '*.vue' {
  import { defineComponent } from 'vue'
  const Component: ReturnType<typeof defineComponent>
  export default Component
}
