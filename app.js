/*
ATM APP
1- OnScreen Balance
2- Withdraw
3- Deposit
4- Exit

*/
newLine = "\r\n"
// Client Balance
let clientBalance = 1000;

let popUpText = "1- OnScreen Balance" + newLine
                + "2- Withdraw" + newLine
                + "3- Deposit" + newLine
                + "4- Exit" + newLine
                + "Enter your choice: ";

// alert(popUpText);
let choice = prompt(popUpText);
switch (choice) {
    case "1":
    // it could be **** console.log("")  **** as well
    alert("OnScreen Balance:" + clientBalance);
    break;
    case "2":
    let withdrawAmount = Number(prompt( "Enter your withdraw amount:"));
    // * it could be added as 50 and times
    if (withdrawAmount < clientBalance) {
        // Successful withdraw
        clientBalance = clientBalance - withdrawAmount;
        alert("Successful Withdraw" +newLine
        + "Balance:" + clientBalance);
    } else {
        // Insufficient Amount
        alert("Insufficient Amount" + newLine
        + "Balance:" + clientBalance + " " + "withdrawAmount:" + withdrawAmount);
        break;
    }

}