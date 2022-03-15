const { response } = require('express');
var express = require('express');
const { render, rawListeners } = require('../../app');
var router = express.Router();
const UserHelpers=require('../../helpers/User-Helpers')


/* GET users listing. */
router.get('/', function(req, res, next) {
  if(req.session.userloggedin){
    var bikes=[
      {
      photo:"./images/1.jpeg",
      name:"Himalayan",
      Price:"180000"
      },
      {
      photo:"images/2.jpeg",
      name:"Rx 100",
      Price:"80000"
      },
      {
      photo:"images/5.jpeg",
      name:"Intercepter 650",
      Price:"300000"
      },
      {
      photo:"images/4.jpeg",
      name:"Dominor",
      Price:"240000"
  
      },
      {
      photo:"images/5.jpeg",
      name:"Rudra 650",
      Price:"450000"
  
      },
      {
      photo:"images/1.jpeg",
      name:"GT 650",
      Price:"350000"
  
      },
      {
      photo:"images/8.jpeg",
      name:"Himalayan",
      Price:"250000"
  
      },
      {
      photo:"images/9.jpeg",
      name:"Mahindra Mojo",
      Price:"250000"
  
      },
      {
      photo:"images/10.jpeg",
      name:"Himalayan 400",
      Price:"150000"
  
      },
      {
        photo:"./images/1.jpeg",
        name:"Himalayan",
        Price:"180000"
        },
        {
        photo:"images/2.jpeg",
        name:"Rx 100",
        Price:"80000"
        },
        {
        photo:"images/5.jpeg",
        name:"Intercepter 650",
        Price:"300000"
        },
        {
        photo:"images/4.jpeg",
        name:"Dominor",
        Price:"240000"
  
        },
        {
        photo:"images/5.jpeg",
        name:"Rudra 650",
        Price:"450000"
  
        },
        {
        photo:"images/1.jpeg",
        name:"GT 650",
        Price:"350000"
  
        },
        {
        photo:"images/8.jpeg",
        name:"Himalayan",
        Price:"250000"
  
        },
        {
        photo:"images/9.jpeg",
        name:"Mahindra Mojo",
        Price:"250000"
  
        },
        {
        photo:"images/10.jpeg",
        name:"Himalayan 400",
        Price:"150000"
  
        }
      ]
    
    res.render('user/user-home',{bikes})
  }
  else{
    res.redirect('/login')
  }

});


router.get('/login',function(req,res){
  res.render('user/user-login')
})

router.get('/signup',function(req,res){

  

  res.render('user/user-signup')

})

router.post('/register',function(req,res){



  var userdetails=req.body
  
 
   UserHelpers.adduser(userdetails).then((response)=>{
     console.log(response.status);
     
      if(response.status){
        res.redirect('/login')
      }else{
        var err="Registration Failed Try Again"
        res.render('user/user-signup',{err})
      }
     })
})



router.post('/login-validate',function(req,res){
  
  
  var userdata=req.body
  UserHelpers.logincheck(userdata).then((response)=>{

    if(!response.userdetails.status){

      if(response.status){

        req.session.userloggedin=response.userdetails
        res.redirect('/')
      }
      else{
        var err="Username or password error"
        res.render('user/user-login',{err})
      }
    }else{
      var err="User Blocked"
      res.render("user/user-login",{err})
    }
  
  }).catch((reject)=>{
    var err="Username or password error"
      res.render('user/user-login',{err})
  })
})


router.get('/logout',function(req,res){
  req.session.userloggedin=null
  res.redirect('/login')

})
 
module.exports = router;
