var mongoose = require('mongoose');
mongoose.promise = global.Promise;
var Schema = mongoose.Schema;

const bcrypt=require('bcrypt-nodejs');

var userSchema = new Schema({
 email: {   type:String, required:true,unique:true,lowercase:true   },
 username: {   type:String, required:true,unique:true,lowercase:true   },
 password: {    type:String,required:true   }
});
userSchema.pre('save',function(next) {
if(!this.isModified('password'))
return next();

bcrypt.hash(this.password,null,null,(err,hash)=>{
    if(err) return next(err);
    this.password=hash;
    next();
})
});
module.exports = mongoose.model('User', userSchema);