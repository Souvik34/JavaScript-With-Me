const account_Id= 14455 
let account_Email = "max@test.com" /// use let
var account_Password = "12345678"
accountCity = "Jodhpur"
let account_State=" " // it returns undefined if not assigned a value


// account_Id = 14434  // Cannot reassign const variable. TypeError: Assignment to constant variable.

account_Email = " ss@google.com" 
account_Password = "1234567890"
accountCity = "Jaipur"

console.log(account_Id);

/* 
Prefer not to use var, bcz of issue in block scope and functional scope.
*/

console.table([account_Id, account_Email, account_Password, accountCity, account_State]);
