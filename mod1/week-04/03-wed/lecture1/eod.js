

// ATM


const bankAccount = (user, initialBalance) => {

    let balance = initialBalance;

    const balanceManager = (amount, transcationType) => {
        console.clear()
        console.log(`Welcome ${user}, Your Current Bank Balance is ${balance}`);

        if(transcationType === "deposit"){
            balance +=  amount;
            console.log(`Your deposit was successful. New Balance is: ${balance}`);
        }

        if(transcationType === "withdraw"){
            if(amount > balance){
                console.log("Withdraw Rejected: You brokeee. Your balance is: ", balance)
            } else{
                balance -= amount;
                console.log(`Your withdraw was successful. New Balance is: ${balance}`);
            }
        }

    }
    return balanceManager;
}


const anthonyBankAccount = bankAccount("Anthony", 500);


const samBankAccount = bankAccount("Sam", 300);

anthonyBankAccount(100, "deposit");

samBankAccount(50, "deposit")

anthonyBankAccount(600, "withdraw");
anthonyBankAccount(100, "withdraw");

samBankAccount(50, "deposit");


const gabeBankAccount = bankAccount("Gabe", 1000);
