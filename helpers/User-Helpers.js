
const db=require('..//config/connection')


module.exports={
     

   adduser:(userdetails)=>{
       console.log(" add user helper");
       console.log(userdetails);
    return new Promise((resolve,reject)=>{
        db.get().collection("users").insertOne(userdetails).then(()=>{
            return resolve({status:true})
        }).catch(()=>{
            return reject({status:false})
        })
    })
   },

   logincheck:(userdata)=>{

  

    return new Promise(async (resolve, reject) => {
           

        var userdetails = await db.get().collection('users').findOne({ Email:userdata.Email,Password:userdata.Password})
        if (userdetails)
        {
            console.log("-----------------------check user-----------------");
            console.log(userdetails );
             resolve({ userdetails, status: true })
           
        }
        else {
             reject({status:false})
            }
         })
        }
}

