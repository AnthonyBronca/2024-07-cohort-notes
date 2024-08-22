




const bankAccount = (user, initialBalance, pin) => {

    let bankTotal = {
        debitBalance: initialBalance,
        creditBalance: 1000
    }

    const bankFunctionality = (amount, transactionType, accountType, enteredPin) => {
        console.clear();
        if(enteredPin && pin === enteredPin){
        console.log(`Welcome ${user}, Your total balance is currently: $${bankTotal.debitBalance}. Your total credit line is at $${bankTotal.creditBalance}`);
        if(transactionType === "deposit"){
            bankTotal.debitBalance += amount;
            console.log(`$${amount} Successfully Deposited: Your new balance is $${bankTotal.debitBalance}`);
            return;
        }

        if(transactionType === "withdraw"){
            if(amount > bankTotal.debitBalance){
                console.log("You do not have enough money in your debit account to withdraw $", amount);
                return;
            } else{
                bankTotal.debitBalance -= amount;
                console.log(`$${amount} Successfully Withdrawed: Your new balance is $${bankTotal.debitBalance}`);
                return;
            }
        }

        if(accountType === "credit" && transactionType === "withdraw"){
            bankTotal.creditBalance -= amount;
            console.log(`$${amount} Successfully Approved: Your credit line is at $${bankTotal.creditBalance}`);
            return;
        }
    } else{
        console.log("Invalid Credentials.")
    }

    }

    return bankFunctionality;

}

const anthonyBankAccount = bankAccount("Anthony", 500, 1234);

anthonyBankAccount(10, "deposit", "debit", 1234);


const samBankAccount = bankAccount("Sam", 200, 4567);

samBankAccount(300, "deposit", "debit", 4567);

anthonyBankAccount(50, "deposit", "debit", 1234);
anthonyBankAccount(200, "withdraw", "credit", 1234);

samBankAccount(600, 'withdraw',"debit", 4567);
