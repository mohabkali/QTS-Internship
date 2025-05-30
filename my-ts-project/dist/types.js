"use strict";
var age = 32;
var firstname = `Mohab`;
var learningTypescript = true;
var hobbies = [`cooking`, `gym`, `C#`];
var product = [`Surface Pro`, 8000];
var UserRoles;
(function (UserRoles) {
    UserRoles["Admin"] = "Admin";
    UserRoles["Editor"] = "Editor";
    UserRoles["Viewer"] = "Viewer";
})(UserRoles || (UserRoles = {}));
;
console.log(`My name is ${firstname} and I'm ${age} years old and I use a ${product[0]}`);
//# sourceMappingURL=types.js.map