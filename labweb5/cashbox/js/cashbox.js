var payment = {
  amount: 0,
  info: 'x',
};

var cashbox = {
  amount: 0,
  addPayment: function (payment) {
    if (payment.amount < 0) {
      payment.info = 'cannot add negative numbers'
    } else {
      this.amount = this.amount + payment.amount;
    }
    console.log(payment.info);
  },
  refundPayment: function (payment) {
    if (payment.amount > 0) {
      payment.info = 'cannot subtract positive numbers'
    } else {
      this.amount = this.amount + amountToSub;
    }
    console.log(payment.info);
  },
};
