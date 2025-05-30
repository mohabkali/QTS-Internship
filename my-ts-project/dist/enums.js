"use strict";
var OrderStatusEnum;
(function (OrderStatusEnum) {
    OrderStatusEnum["Pending"] = "Pending";
    OrderStatusEnum["Shipped"] = "Shipped";
    OrderStatusEnum["Delivered"] = "Delivered";
    OrderStatusEnum["Cancelled"] = "Cancelled";
})(OrderStatusEnum || (OrderStatusEnum = {}));
function OrderStatus(order) {
    return `Your order is ${order}`;
}
console.log(OrderStatus(OrderStatusEnum.Pending));
var HTTPMethodEnum;
(function (HTTPMethodEnum) {
    HTTPMethodEnum["GET"] = "GET";
    HTTPMethodEnum["POST"] = "POST";
    HTTPMethodEnum["PUT"] = "PUT";
    HTTPMethodEnum["DELETE"] = "DELETE";
})(HTTPMethodEnum || (HTTPMethodEnum = {}));
function HTTPMethod(method) {
    return `Processing HTTP ${method} Request`;
}
console.log(HTTPMethod(HTTPMethodEnum.GET));
//# sourceMappingURL=enums.js.map