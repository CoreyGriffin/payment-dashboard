
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
    trust: "sufficient",
    status: "active"
  },
  {
    id: 2,
    account_name: "Victoria Padilla",
    currency: "EUR",
    type: "Private",
    account: generateRandomNumber(),
    balance: generateRandomBalance(),
    last_transfer: "26 Oct 2017",
    trust: "sufficient",
    status: "disabled"
  },
  {
    id: 3,
    account_name: "Rachel Foster",
    currency: "USD",
    type: "Private",
    account: generateRandomNumber(),
    balance: generateRandomBalance(),
    last_transfer: "2 Dec 2017",
    trust: "sufficient",
    status: "active"
  },
  {
    id: 4,
    account_name: "Isabel Wilkins",
    currency: "PLN",
    type: "Private",
    account: generateRandomNumber(),
    balance: generateRandomBalance(),
    last_transfer: "02 Sep 2017",
    trust: "perfect",
    status: "active"
  },
  {
    id: 5,
    account_name: "HUA EXP TRADE CO",
    currency: "USD",
    type: "Business",
    account: generateRandomNumber(),
    balance: generateRandomBalance(),
    last_transfer: "10 Dec 2017",
    trust: "perfect",
    status: "active"
  },
  {
    id: 6,
    account_name: "Eula Glover",
    currency: "EUR",
    type: "Private",
    account: generateRandomNumber(),
    balance: generateRandomBalance(),
    last_transfer: "12 Dec 2017",
    trust: "poor",
    status: "paused"
  },
  {
    id: 7,
    account_name: "Teresa May",
    currency: "GBP",
    type: "Private",
    account: generateRandomNumber(),
    balance: generateRandomBalance(),
    last_transfer: "27 Apr 2017",
    trust: "new",
    status: "active"
  },
  {
    id: 8,
    account_name: "Luella Kennedy",
    currency: "CHF",
    type: "Private",
    account: generateRandomNumber(),
    balance: generateRandomBalance(),
    last_transfer: "05 Aug 2017",
    trust: "sufficient",
    status: "active"
  },
  {
    id: 9,
    account_name: "Leo Ruiz",
    currency: "USD",
    type: "Private",
    account: generateRandomNumber(),
    balance: generateRandomBalance(),
    last_transfer: "30 Oct 2017",
    trust: "sufficient",
    status: "active"
  },
    {
    id: 10,
    account_name: "Havanah Bread Co.",
    currency: "USD",
    type: "Business",
    account: generateRandomNumber(),
    balance: generateRandomBalance(),
    last_transfer: "30 Jun 2017",
    trust: "sufficient",
    status: "active"
  },
  {
    id: 11,
    account_name: "JoJo's Coffee INC",
    currency: "EUR",
    type: "Business",
    account: generateRandomNumber(),
    balance: generateRandomBalance(),
    last_transfer: "30 Jan 2017",
    trust: "poor",
    status: "disabled"
  },
    {
    id: 12,
    account_name: "Riley Hansen",
    currency: "USD",
    type: "Private",
    account: generateRandomNumber(),
    balance: generateRandomBalance(),
    last_transfer: "30 Jun 2017",
    trust: "new",
    status: "active"
  }
]

module.exports = payments;
