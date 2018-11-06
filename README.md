# Commerce
There are two main goals for this project.  The first to see writing a program from a different angle.  Generally speaking we always create something new, however in this project the goal is to watch the program evolve over time as more and more requirements get pushed onto you.  The second goal is to work with TypeScript (TS).  This is a super set of JavaScript that adds many great features on top of JS which most other languages utilize.

## First round of requirements
#### The minimally viable product

You will create four different objects - from classes - which will monitor and direct the flow of payment traffic in modern commerce.
-  Bank : houses financial records to be updated
-  Customer: a person with a name, an account id, a wallet, and secret pinn number to deposit and withdraw money.


#### Bank
The bank keeps track of 4 pieces of information per customer: account id, name, total, and pinn.  You should have an array for each of these where the index numbers all align per customer.  The bank also has 4 essential functions: verifyAccount(), verifyAccess() deposit(), and withdraw().  The verify functions must return a boolean confirming that the user information matches the correct inputs to either deposit or withdraw.

-  **Instance Variables**
    -  accoundID :string[]
    -  accountName :string[]
    -  total :number[]
    -  accountPinn :string[]

-  **Constructor**
    -  accepts a datalist of lists, each of length 4, as input.
    -  loops through the datalist and transfers the data to the 4 instance array variables

-  **Instance Methods**
    -  deposit(t:Transaction) : void {}
    -  withdraw(t:Transaction) : number {}
-  **Static Methods**
    -  verifyAccount() : boolean {}
    -  verifyAccess() : boolean {}


To create these functions you receive a transaction as input (see the class description below).  You will need to verify that both users exist in the bank with verifyAccount().  If this is true you can then either add or subtract money from the correct accounts.  Note that if you are making a withdrawl or subtracting money from an account you will also need to check the verifyAccess()


#### Customer
A customer only has a handful of cash on them in their wallet but can go to the bank to deposit or withdraw money at various times.


-  **Instance Variables**
    -  accountName :string
    -  total :number
    -  accoundID :string
    -  accountPinn :string


-  **Constructor**
    -  Have the constructor set the persons name, first and last with a simple space.
    -  The account ID which is a 16-digit #
    -  The accountPinn which is a 4-digit number.
    -  Have the constructor randomly generate somewhere between $0 to $200 for the total.


-  **Instance Methods**
    -  issueTransaction(to: string) : Transaction {}



#### Transaction
A transaction is an object - from a class - which contains all of the information necessary for customers to communicate between banks.  


-  **Instance Variables**
    -  from :string
    -  pinn :string
    -  to :string
    -  transType :string
    -  amount :number


The variables "from" and "to" indicate which accounts you are sending money "from" or money "to".  In the beginning we can only send money to our selves, but in the future when we want to buy things this will change.  "TransType" is a one of two options, either deposit or withdraw.  And the amount should be a positive or negative number.

-  **Constructor**
    -  Just have the constructor fill all of the 5 instance variables.
    -  This is just a wrapping data-class, it does not have any methods.
