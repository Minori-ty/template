import { EventName } from '../enums/eventName'

/* eslint-disable @typescript-eslint/no-explicit-any */
type Callback = (...args: any[]) => void
type List = Record<EventName, Array<Callback>>

class EventBus {
    #eventList: List
    constructor() {
        this.#eventList = {} as List
    }
    on(eventName: EventName, callback: Callback) {
        if (this.#eventList[eventName]) {
            this.#eventList[eventName].push(callback)
        } else {
            this.#eventList[eventName] = [callback]
        }
    }

    emit(eventName: keyof List, ...args: any[]) {
        if (!this.#eventList[eventName]) {
            throw TypeError('没有这个事件')
        } else {
            this.#eventList[eventName].forEach(callback => callback(...args))
        }
    }
}

export const eventBus = new EventBus()
