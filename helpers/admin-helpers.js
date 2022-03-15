
const async = require('hbs/lib/async')
const db=require('..//config/connection')
const { ObjectId } = require('mongodb')


module.exports={


    viewusers:()=>{
      return new Promise(async(resolve,reject)=>{
        var users=await db.get().collection("users").find().toArray()
        if (users)
        {
            return resolve({users,status:true})
        }
        else
        {
           return reject({status:false})
          
        }
      })
    },
    deleteuser:(id)=>{
      console.log("````````````````````````````````````````````````````````````````````````````````````````````````");
      console.log(typeof id);

      

      return new Promise(async(resolve,reject)=>{
        var del=  await db.get().collection("users").deleteOne({ _id: ObjectId(id)})
        console.log("mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm");
        console.log(del);
        if(del){
          resolve({status:true})
        }else{
          reject({status:false})
        }
      })
    },

    block:(id)=>{
      return new Promise(async(resolve,reject)=>{
        await db.get().collection("users").updateOne({_id: ObjectId(id)},{$set:{status:true}}).then((data)=>{
          resolve({status:true})
        })
      })
    },

    unblock:(id)=>{
      return new Promise(async(resolve,reject)=>{
        await db.get().collection("users").updateOne({_id: ObjectId(id)},{$set:{status:false}}).then((data)=>{
          resolve({status:true})
        })
      })
    },
    getuser:(id)=>{
      return new Promise(async(resolve,reject)=>{
         getuser= await db.get().collection('users').findOne({_id: ObjectId(id)})
         if(getuser){
           resolve({getuser,status:true})
         }
         else{
           reject({status:false})
         }
      })
      
    },
 updateuser:(id,userdata)=>{

  return new Promise (async(resolve,reject)=>{
   await db.get().collection("users").updateOne({_id: ObjectId(id)},{$set:{Firstname:userdata.Firstname,LastName:userdata.LastName,Dob:userdata.Dob,Gender:userdata.Gender,Email:userdata.Email,MobNo:userdata.MobNo}}).then((data)=>{
      resolve({status:true})
    })
  })
 },
 adduser:(userdetails)=>{

return new Promise(async(resolve,reject)=>{

  var existuser=await db.get().collection('users').findOne({Email:userdetails.Email})
  
  if(!existuser){

    
    db.get().collection("users").insertOne(userdetails).then(()=>{
     resolve({status:true})
    
  })
  }else{
    resolve({status:false})
  }
 
})
 }
   

}