import { createI18n } from 'vue-i18n';
import zhCN from "./lang/zh-CN/zh-CN.json";

let defaultLocale: Locale = "zh-CN"
export const i18n = createI18n({
    locale: defaultLocale as Locale,
    fallbackLocale: 'en',
    legacy: false,
    messages: {
        "zh-CN": zhCN
    }
})

export type Locale = "zh-CN" | "en"


const modules = import.meta.glob("./lang/**/*.json")

async function init() {
    for (const [_, fn] of Object.entries(modules)) {
        const res = await fn()
        const message = res as typeof zhCN
        console.log(message);

        i18n.global.setLocaleMessage(message.name, message)
    }
}

init()

export async function getLocale() {
    const list: { value: string, label: string }[] = []
    for (const fn of Object.values(modules)) {
        const res = await fn()
        const data = res as typeof zhCN
        list.push({ value: data.name, label: data.label })
    }
    return list
}