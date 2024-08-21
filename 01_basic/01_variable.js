const accountId= 12345
let accountName="divya"
var accountEmail="divya@gmail.com"
accoutPassword=258369
 console.log(accountId);
 console.table([accountId, accountEmail, accountName, accoutPassword]);
/*
Prefer not to use var
becouse of issue in block scope and function scope
only use const and let

use console.table([var1, var2]);
to display multiple variable
*/
