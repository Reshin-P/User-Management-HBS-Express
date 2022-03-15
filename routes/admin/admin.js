const { response } = require('express');
var express = require('express');
const { render, rawListeners } = require('../../app');
const adminHelpers = require('../../helpers/admin-helpers');
var router = express.Router();
const AdminHelpers=require('../../helpers/admin-helpers')


router.get('/',function(req,res){

    console.log(req.session.adminloggedin);
    
    if(req.session.adminloggedin){

      adminHelpers.viewusers().then((response)=>{
   
              users=response.users
             
           
            res.render('admin/admin-home',{users})


          
      })
        
    }
     else{
       res.render('admin/admin-login')
    }
    
});



router.post('/login-admin',function(req,res){

 
    var adminemail=req.body.Email

    var adminpassword=req.body.Password
    if(adminemail=="admin@gmail.com"&&adminpassword=="asdf"){
        req.session.adminloggedin=true
        res.redirect('/admin/')
    }
    else{
        var err="Username or Password Error"
        res.render('admin/admin-login',{err})

    }
})

router.get('/logout-admin',function(req,res){

    req.session.adminloggedin=null
    res.redirect('/admin/')

})







module.exports = router;
