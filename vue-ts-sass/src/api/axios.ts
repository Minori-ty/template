/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { type AxiosResponse } from 'axios'
import { EventName } from '../enums/eventName'
import { HttpCode } from '../enums/httpCode'
import type { ResponseBase } from '../types/common'
import { eventBus } from '../utils/eventBus'

const instance = axios.create({
    baseURL: 'https://127.0.0.1:3000/api/v1',
    timeout: 10 * 1000,
})

instance.interceptors.request.use(
    config => {
        return config
    },
    err => {
        return Promise.reject(err)
    }
)

instance.interceptors.response.use(
    (res: AxiosResponse<ResponseBase<any>, any>) => {
        if (res.data.code === HttpCode.NotFound) {
            eventBus.emit(EventName.NotFound)
        }
        return res
    },
    err => {
        return Promise.reject(err)
    }
)

export { instance }
