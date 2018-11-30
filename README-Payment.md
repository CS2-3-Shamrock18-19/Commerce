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

-  You create an **abstract class** name **Payable** which has a default function pay which Card and Mobile will implement.
    -  **pay(amount, type)** depending on class, the type will change

-  You create an **abstract class** named **Card** which has a default constructor.
    -  **Debit** is an extension of the Card
    -  **Credit** is another extension of the Card

-  You create an **abstract class** named **Mobile** which has a default constructor.
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

### abstract class Payable
This class has one function pay().  For the card implementation you will have to check that it does not go over the limit, but with the mobile classes you can just return the IPayment object.
-  abstract pay(amount: number, type:string) : IPayment;

### abstract class Card
This class has all of the same fields as the ICardInfo, pass these into the constructor and assign all of the parameters.
-  name : string;
-  number: string;
-  code : string;
-  balance : number;
-  limit :number;
-  constructor(info: ICardInfo){}
- abstract pay(amount: number, type:string) : IPayment {}

The pay method should check to make sure, using the balance, the amount, and the limit, that your purchase does not exceed the limit.  If so, then you can build the IPayment object and return it.

### class Debit extends Card
-  constructor(info: ICardInfo){ super(info);}
-  pay(amount: number) method should return the super method from the card class.

### class Credit extends Card
-  interest: number;
-  constructor(info: ICardInfo){}
    -  use the super method from before.
    -  also set the interest to a random decimal between 0.15 and 0.25
-  pay() method should return the super method from the card class.
-  updateBalance() method which increases you balance according to the interest rate.

### abstract class Mobile
This class is similar to the card class but it has different information to keep track of:  The payName will be set later, could be Google Pay or Apple Pay.  Instead of a user name it only has a phone number, but there is still a card.

-  payName: string;
-  phoneNumber: string;
-  cardNumber: string;
-  code : string;
-  constructor(info: ICardInfo, pn: string)
-  pay(amount: number, type:string) : IPayment method as described in the abstract card class.
-  static makePhoneNumber() : string

To create a random phoneNumber make a random 9 digit number.  I would suggest subtracting from 1,000,000,000, but make sure you do not subtract too far.  Then turn it into a string, then slice it up with the substring method to make something like 2349583458 ---> (234)958-3458.  Use the static method inside the constructor.



### class GooglePay extends Mobile
Essentially the only difference is to use the correct payName in the constructor and to execute method with the right pay type.

### class ApplePay extends Mobile
Essentially the only difference is to use the correct payName in the constructor and to execute method with the right pay type.
