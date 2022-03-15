const { response } = require('express');
var express = require('express');
const res = require('express/lib/response');
const { render, rawListeners } = require('../../app');
const adminHelpers = require('../../helpers/admin-helpers');
var router = express.Router();


router.get('/deleteuser/:id', function (req, res) {

     
     id = req.params.id
     console.log("delete user router entered");

    adminHelpers.deleteuser(id).then((response) => {
        

        if (response.status) {
           
         res.redirect('/admin/')
        }
        else{
        res.send("delete user error")
        }
     
      
    }).catch((err)=>{
        console.log(err);
    })
})


router.get("/block/:id",function(req,res){

     id=req.params.id

   
   
    adminHelpers.block(id).then((response)=>{
        if(response.status){
            console.log(response.status);

       res.redirect("/admin/")
    }
    })

})



router.get("/unblock/:id",function(req,res){

    id=req.params.id


   
    adminHelpers.unblock(id).then((response)=>{
        if(response.status){
            console.log(response.status);

       res.redirect("/admin/")
    }
    })

})
router.get("/edituser/:id",function(req,res){
    id=req.params.id
    adminHelpers.getuser(id).then((response)=>{
        if(response.status){

            getuser=response.getuser
            res.render("admin/edit-user",{getuser})

        }
        
    })
})


router.post("/updateuser/:id",function(req,res){
   var userdata=req.body
adminHelpers.updateuser(id,userdata).then((response)=>{
    if(res.status)
    {
        res.redirect("/admin/")
    }
})
})



router.get('/create-user',function(req,res){
    console.log(req.session.emailExist);
    

    if(req.session.emailExist){
        req.session.emailExist=false

        var emailErr="Email id already exists"
        res.render("admin/create-user",{emailErr})
    }
    else
    {
        res.render("admin/create-user")
    }
  })   
  


  router.post('/register',function(req,res){



    var userdetails=req.body
    
   
     adminHelpers.adduser(userdetails).then((response)=>{
       
       
        if(response.status){
          res.redirect('/admin/')
        }
        else{
          
            console.log(response.status);
            
            req.session.emailExist=true
            
            res.redirect('/adminactions/create-user')
        }
       })
  })
module.exports=router