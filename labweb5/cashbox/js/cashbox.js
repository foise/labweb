var payment = {
  amount: 0,
  info: 'x',
};

var cashbox = {
  amount: 0,
  addPayment: function (payment) {
    if (payment.amount < 0 || typeof payment.amount !== 'number' || typeof payment.info !== 'string') {
      return false;
    } else {
      this.amount = this.amount + payment.amount;
      return payment.info;
    }
  },
  refundPayment: function (payment) {
    if (payment.amount > 0 || typeof payment.amount !== 'number' || typeof payment.info !== 'string') {
      return false;
    } else {
      this.amount = this.amount + amountToSub;
      return payment.info;
    }
  },
};
