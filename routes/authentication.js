const user=require('../models/user');

module.exports = (router) => {

router.post('/register',(req,res)=>{

    if(!req.body.email){
        res.json({ success:false, message:'you must provide an email'});
    }
    if(!req.body.username){
        res.json({ success:false, message:'you must provide an user name'});
    }
    if(!req.body.password){
        res.json({ success:false, message:'you must provide an password'});
    }
    else{
        let user = new User({
            email:res.body.email.tolowercase(),
            username:res.body.username.tolowercase(),
            password:res.body.password
        });
        user.save((err)=>{
            if(err){
                res.json({ success:false, message: 'Could not save user. Error: ', err});
            }
            else{
                res.json({ success:true, message: 'User Saved!', err});
            }
        });
        // console.log(res.body);
        // res.send('hello world');
    }

});
    
return router;
};