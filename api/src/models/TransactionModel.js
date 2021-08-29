const TransactionModel = function(id,accountSend,accountGet,date = new Date()){
    this.id = id;
    this.accountSend = accountSend;
    this.accountGet = accountGet;
    this.date = date;
};
module.exports = TransactionModel;