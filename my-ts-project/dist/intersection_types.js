"use strict";
function createUserActivityLog(userlog) {
    console.log(`Log ${userlog.id} for user ${userlog.userId}:${userlog.action} at ${userlog.createdAt}`);
}
let userlog = {
    id: "1",
    createdAt: new Date(Date.now()),
    updateAt: new Date(Date.now()),
    userId: "2",
    action: "stamped"
};
console.log(createUserActivityLog(userlog));
//# sourceMappingURL=intersection_types.js.map