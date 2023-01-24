import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "no-header" | "default"
declare module "C:/Users/duaaa/nuxt-portfolio/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}