# Payment.ts
Imagine you are a merchant, aka a store, and you are trying to conduct business.  Someone comes in, they buy things, and give you money in return.  The issue is that there are a variety of ways that customers can give you money; it could be cash, debit card, credit card, google pay, or apple pay.  To implify matters your team devises the following program structure to keep your code flexible for future extension and comprehensive to handle all of the cases.

## Structures

-  You create an **interface IPayment** which ensures that when you use the pay function you return a payment.  These payments consist of 4 pieces of information.  The amount which is positive or negative, account number, security code, and type of payment.
    -  amount:number;
    -  payType:string;
    -  account:string;
    -  code:string;

-  You create an **interface ICardInfo** which ensures that when you construct cards and mobile payment plans that you can import the data easily, consisting of 5 pieces of information.  Name, account number, security code, balance, and limit.
    -  name : string;
    -  number: string;
    -  code : string;
    -  balance : number;
    -  limit :number;


-  You create an **abstract class** named **Card** which has a default constructor and a default pay function.
    -  **Debit** is an extension of the Card
    -  **Credit** is another extension of the Card

-  You create an **abstract class** named **Mobile** which has a deault constructor and a default pay function.  Need to think a little more about how it wraps around the card.
    -  **GooglePay**
    -  **ApplePay**


## Classes and Interfaces

### interface ICardInfo
This is a contract for what information cards should keep track of internally.  Essentially copy this into the interface.
-  name : string;
-  number: string;
-  code : string;
-  balance : number;
-  limit :number;

### interface IPayment
This is a contract for what payment objects should look like.  They have 4 fields.  Essentially copy this into the interface.
-  amount:number;
-  payType:string;
-  account:string;
-  code:string;

### abstract class Card
This class has all of the same fields as the ICardInfo, pass these into the constructor and assign all of the parameters.
-  name : string;
-  number: string;
-  code : string;
-  balance : number;
-  limit :number;
-  constructor(info: ICardInfo){}
- abstract pay(amount:number) : IPayment {}

The pay method should check to make sure, using the balance, the amount, and the limit, that your purchase does not exceed the limit.  If so, then you can build the IPayment object and return it.

### class Debit extends Card
-  constructor(info: ICardInfo){ super(info);}
-  pay() method as described in the abstract class.

### class Credit extends Card
-  interest: number;
-  constructor(info: ICardInfo){}
    -  use the super method from before.
    -  also set the interest to a random decimal between 0.15 and 0.25
-  pay() method as described in the abstract class.
-  updateBalance() method which increases you balance according to the interest rate.

### abstract class Mobile


### class GooglePay extends Mobile

### class ApplePay extends Mobile
