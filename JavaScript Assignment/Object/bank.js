// The constructor runs when you create a new object:

class BankAccount{ 
constructor(owner, initialBalance = 0) {
    this.owner = owner;
    this._balance = initialBalance; // private by convention
    this.createdAt = new Date(); // timestamp when account is created

}


deposit(amount) {
  if(amount <=0 ){
    throw new Error("Deposit amount must be greater than 0 ")
  }
  this._balance += amount;
  return this._balance;
}


  withdraw(amount) {
    if (amount <= 0) {
      throw new Error("Withdraw amount must be greater than 0");
    }

    if (amount > this._balance) {
      throw new Error("Insufficient funds");
    }

    this._balance -= amount;
    return this._balance;
  }

  getBalance() {
    return this._balance;
  }
toJSON() {
    return{
      owner : this.owner,
      balance : this._balance,
      createdAt :  this.createdAt,
    };
}

}

const account = new BankAccount("Nikita", 1000);

console.log(account.getBalance()); 
// 1000

account.deposit(500);
console.log(account.getBalance()); 
// 1500

account.withdraw(300);
console.log(account.getBalance()); 
// 1200

console.log(account.toJSON());



//SubClass

class SavingAccount extends BankAccount {
    constructor (owner,initialBalance, interestRate = 0.05 ){
        super (owner, initialBalance);
        this.interestRate = interestRate;
    }
    applyInterest(){
        const interestAmmount = this._balance * this.interestRate;
        this._balance +=interestAmmount;
        return interestAmmount;
    }
}

const saving  = new SavingAccount("Nikita", 1000, 0.05);
console.log(saving.getBalance()); // 1000 

const addedInterest = saving.applyInterest();

console.log(addedInterest); // 50 

console.log(saving.getBalance()); // 1050


//Prototype chain Insepection 

const acc = new BankAccount ("Aarav", 3000);
const save = new SavingAccount ("Babita", 4000, 0.08);

acc.deposit (500);
save.deposit(1000);
console.log("Balance:", save.getBalance());

save.applyInterest();

console.log("After interest:", save.getBalance());

console.log(Object.getPrototypeOf(save) === SavingAccount.prototype);  
// SavingsAccount.prototype = Checks direct parent prototype

console.log(save instanceof BankAccount); 
//save instanceof BankAccount = Checks full inheritance chain




// Destructing spread computed 

const {owner, _balance: bal } = acc ;

const copy = {
    ...acc.toJSON(),
    label: "copy"
};

const key = "status";

const meta = {
    [key]: "active",
    [key + "code"]: 1,
};
console.log (owner,bal, copy, meta);



