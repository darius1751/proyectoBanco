const AccountModel = function(id=null,user,cash = 0,state){
    this.id = id;
    this.user = user;
    this.cash = cash;
    this.state = state;
}
module.exports = AccountModel;