class Bank{


}//end of Bank class



class Customer{


}//end of Customer class




class Transaction{


}//end of Transaction class







//creating the tests
function main () : void{

//Create some customers
let charliedata = [,,,];
const Charlie = new Customer(...charliedata);

let dilliondata = [,,,];
const Dillion = new Customer(...dilliondata);

let delanodata = [,,,];
const Delano = new Customer(...delanodata);

let jamesdata = [,,,];
const James = new Customer(...jamesdata);

let kewendata = [,,,];
const Kewen = new Customer(...kewendata);



let customerdata = [charliedata,dilliondata,delanodata,jamesdata,kewendata];



//Make a Bank
const BankofAmerica = new Bank(customerdata);


//Have some customers make transactions with the bank





}

//executing the tests
main();











/**
***
*** THIS IS FOR THE NEXT PHASE...PHASE 2!
***
**/


class ATM{


}//end of ATM class




class DebitCard{


}//end of Debit Card class
