console.log("Программа запущена");

class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        let _balance = balance;  // Приватная переменная

        this.deposit = function(amount) {
            if (amount > 0) {
                _balance += amount;
            }
        };

        this.withdraw = function(amount) {
            if (amount > 0 && amount <= _balance) {
                _balance -= amount;
            } else {
                console.log("Недостаточно средств");
            }
        };

        this.getBalance = function() {
            return _balance;
        };
    }
}


const account = new BankAccount("Иван", 1000);
console.log(account.getBalance());  // 1000
account.deposit(500);
console.log(account.getBalance());  // 1500
account.withdraw(2000);             // Недостаточно средств
