"use strict";
function getUserTheme(userprofile) {
    return userprofile.preferences?.theme ?? "light";
}
let user = {
    id: 1,
    username: "Mohab",
};
console.log(getUserTheme(user));
//# sourceMappingURL=optional_chaining.js.map