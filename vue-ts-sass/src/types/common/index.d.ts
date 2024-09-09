import { HttpCode } from '../../enums/httpCode'
interface ResponseBase<T> {
    code: HttpCode
    msg: string
    data: T
}
