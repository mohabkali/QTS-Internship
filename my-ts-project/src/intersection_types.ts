interface Identifiable {
    id:string
}

interface Timestamped{
    createdAt:Date,
    updateAt: Date
}

type UserLog = Identifiable & Timestamped & {userId:string, action:string}

function createUserActivityLog(userlog:UserLog){
    console.log(`Log ${userlog.id} for user ${userlog.userId}:${userlog.action} at ${userlog.createdAt}`)
}

let userlog:UserLog ={
    id:"1",
    createdAt:new Date(Date.now()),
    updateAt: new Date(Date.now()),
    userId:"2",
    action:"stamped"
}

console.log(createUserActivityLog(userlog));