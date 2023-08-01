const userData = {
  USD: 1000,
  EUR: 900,
  UAH: 15000,
  BIF: 20000,
  AOA: 100,
};

const bankData = {
  USD: {
    max: 3000,
    min: 100,
    img: "💵",
  },
  EUR: {
    max: 1000,
    min: 50,
    img: "💶",
  },
  UAH: {
    max: 0,
    min: 0,
    img: "💴",
  },
  GBP: {
    max: 10000,
    min: 100,
    img: "💷",
  },
};

function getListCarrency(objectWithCarrency) {
  return Object.keys(objectWithCarrency).join(", ");
};

const getMoney = (userData, bankData) => {
  const answerAboutBalance = confirm("You want to see the balance on the card?");

  return new Promise((resolve, reject) => {
    answerAboutBalance
      ? resolve(userData)
      : reject({userData, bankData});
  });
};

getMoney(userData, bankData)
  .then(
    (data) => {
      let currencyName;
      do {
        currencyName = prompt(`Enter the name of the currency in the format: ${getListCarrency(userData)}`);
      } while (!userData[currencyName]);

      if (data[currencyName]) {
        console.log(`Yor balance is: ${data[currencyName]} ${currencyName}`);
      }
    },
    (data) => {
      do {
        currencyName = prompt(`Enter the currency you want to cash out in the format: ${getListCarrency(bankData)}`);
      } while (!(data.bankData[currencyName] && data.userData[currencyName]));

      const amountCash = +prompt("How much cash do you want to withdraw?");

      if (data.bankData[currencyName].min !== 0 && data.bankData[currencyName].max !== 0) {
        amountCash > data.bankData[currencyName].max
          ? console.log(
              `The amount entered is greater than the allowed amount. Maximum withdrawal amount:
               ${data.bankData[currencyName].max} ${currencyName}`
            )
          : amountCash < data.bankData[currencyName].min
          ? console.log(
              `The amount entered is less than the allowed amount. Minimum withdrawal amount:
               ${data.bankData[currencyName].min} ${currencyName}`
            )
          : console.log(
              `Here is your cash: ${amountCash} ${currencyName} ${data.bankData[currencyName].img}`
            );
      } else {console.log(`Sorry! At ATM there are currently no cash in this currency!`);}
    }
  )
  .catch((err) => {console.log(err)})
  .finally(() => {console.log("Thank you! Have a good day!")});
