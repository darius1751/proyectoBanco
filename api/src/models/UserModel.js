const UserModel = function(id = null,identification,password){
    this.id = id;
    this.identification = identification;
    this.password = password;
};
module.exports = UserModel;
