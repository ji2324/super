import { requestaxios } from './request'

export function getHomeMultiData() {
    return requestaxios({
        url: '/home/multidata',
        method: 'get',
    })
}

export function getHomeShopData(page, type) {
    return requestaxios({
        url: 'home/data',
        method: 'get',
        params: {
            page,
            type,
        }
    })
}