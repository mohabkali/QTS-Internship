interface UserProfile{
    id:number,
    username:string,
    preferences?: { theme?: "dark" | "light"; notifications?: { email?: boolean; sms?: boolean } },
}

function getUserTheme(userprofile:UserProfile): "dark" | "light" {

    return userprofile.preferences?.theme??"light";

}

let user:UserProfile ={
    id:1,
    username: "Mohab",
}

console.log(getUserTheme(user))