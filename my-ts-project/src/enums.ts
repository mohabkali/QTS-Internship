enum OrderStatusEnum { Pending=`Pending`,Shipped=`Shipped`,Delivered=`Delivered`,Cancelled=`Cancelled`}

function OrderStatus(order:OrderStatusEnum):string{
    return `Your order is ${order}`
}

console.log(OrderStatus(OrderStatusEnum.Pending))

enum HTTPMethodEnum {GET=`GET`,POST=`POST`,PUT=`PUT`,DELETE=`DELETE`}

function HTTPMethod(method:HTTPMethodEnum):string{
    return `Processing HTTP ${method} Request`
}

console.log(HTTPMethod(HTTPMethodEnum.GET))