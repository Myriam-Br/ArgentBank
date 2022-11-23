import React from "react";
import UserProfil from "../Components/UserProfil";
import Account from "../Components/Account";

function Dashboard() {

    // create object with all the transactions
    const transactions = [
        {
            "title": "Argent Bank Checking (x8349)",
            "amount": "2,082.79",
            "currency" : "$",
            "description": "Available Balance",
        },
        {
            "title": "Argent Bank Savings (x6712)",
            "amount": "10,928.42",
            "currency" : "$",
            "description": "Available Balance",
        },
        {
            "title": "Argent Bank Credit Card (x8349)",
            "amount": "184.30",
            "currency" : "$",
            "description": "Current Balance",
        }
    ]


    return  <main className="main bg-dark">
        <div>
            <UserProfil/>
            <h2 className="sr-only">Accounts</h2>
            { transactions.map((transaction, index) =>{
                return <Account key={index} title={transaction.title} currency={transaction.currency} amount={transaction.amount} description={transaction.description}/>
            })}  
        </div>     
  </main>
}

export default Dashboard