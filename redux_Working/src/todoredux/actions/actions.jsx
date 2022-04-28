import { EKLE, ONAYLA, SİL } from "../types/types"


// payload yazılmasının sebebi eklenecek listenin id'inden verileri eklemek ve silmek için.
export const ekle = (payload) => {
    return{
        type:EKLE,
        payload : payload
    }
}
export const sil = (payload) => {
    return{
        type:SİL,
        payload : payload
    }
}
export const onay = (payload) => {
    return{
        type:ONAYLA,
        payload : payload
    }
}