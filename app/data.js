
function generateRandomNumber() {
  return Math.floor((Math.random() + 10000000) * 36536);
}

function generateRandomBalance() {
  let random = (Math.random() * 50000) +1
  return  Math.round(random * 100)/100
}

const payments = [
  {
    id: 1,
    account_name: "David Washington",
    currency: "EUR",
    type: "Private",
    account: generateRandomNumber(),
    balance: generateRandomBalance(),
    last_transfer: "10 Oct 2017",
    trust: "Sufficient",
    status: "Active"
  },
  {
    id: 2,
    account_name: "Victoria Padilla",
    currency: "EUR",
    type: "Private",
    account: generateRandomNumber(),
    balance: generateRandomBalance(),
    last_transfer: "26 Oct 2017",
    trust: "Sufficient",
    status: "Disabled"
  },
  {
    id: 3,
    account_name: "Rachel Foster",
    currency: "USD",
    type: "Private",
    account: generateRandomNumber(),
    balance: generateRandomBalance(),
    last_transfer: "2 Dec 2017",
    trust: "Sufficient",
    status: "Active"
  },
  {
    id: 4,
    account_name: "Isabel Wilkins",
    currency: "PLN",
    type: "Private",
    account: generateRandomNumber(),
    balance: generateRandomBalance(),
    last_transfer: "02 Sep 2017",
    trust: "Perfect",
    status: "Active"
  },
  {
    id: 5,
    account_name: "HUA EXP TRADE CO",
    currency: "USD",
    type: "Business",
    account: generateRandomNumber(),
    balance: generateRandomBalance(),
    last_transfer: "10 Dec 2017",
    trust: "Perfect",
    status: "Active"
  },
  {
    id: 6,
    account_name: "Eula Glover",
    currency: "EUR",
    type: "Private",
    account: generateRandomNumber(),
    balance: generateRandomBalance(),
    last_transfer: "12 Dec 2017",
    trust: "Unsufficient",
    status: "Paused"
  },
  {
    id: 7,
    account_name: "Teresa May",
    currency: "GBP",
    type: "Private",
    account: generateRandomNumber(),
    balance: generateRandomBalance(),
    last_transfer: "27 Apr 2017",
    trust: "New",
    status: "Active"
  },
  {
    id: 8,
    account_name: "Luella Kennedy",
    currency: "CHF",
    type: "Private",
    account: generateRandomNumber(),
    balance: generateRandomBalance(),
    last_transfer: "05 Aug 2017",
    trust: "Sufficient",
    status: "Active"
  },
  {
    id: 9,
    account_name: "Leo Ruiz",
    currency: "USD",
    type: "Private",
    account: generateRandomNumber(),
    balance: generateRandomBalance(),
    last_transfer: "30 Oct 2017",
    trust: "Sufficient",
    status: "Active"
  }
]

module.exports = payments;
