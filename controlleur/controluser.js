const user = require("../models/User")
const bcrypt=require("bcrypt")
exports.register=async(req,res)=>{
    const {email,password,role}=req.body
      try {
          if(role){
              return res.status(401).send("non autorisé")
          }
          const emailexist= await user.findOne({email:email})
          if (emailexist) {
              return res.send({msg:"email exist please login"})
          }
          let passwordhashed=await bcrypt.hash(password,10)
            req.body.password=passwordhashed
            const newuser = new user(req.body);
            await newuser.save();
  
      return res.status(201).send({msg:"register succes"})
  
      } catch (error) {
          console.log(error);
      }
  
  };
  exports.getprsonne()=async(req,res)=>{
    
    try {
      let getpersonne= await personne.find()
        return res.status(200).send(getpersonne)
    } catch (error) {
        console.log(error);
    }
};
exports.updatepersonne()=async(req,res)=> {
    
    try {
      
        const updatedPerson = await personne.findByIdAndUpdate(req.params.id, { $push: { favoritmusic: 'Turkish Music' } },{ new: true } 
          );
          return res.status(200).send(updatedPerson )
        } catch (error) {
            console.log(error);
        }
  };
  exports.removepersonne()=async(req,res)=>{
    try{
    const remove=await personne.findByIdAndDelete(req.id.params,  { new: true })
    if (!remove) {
      return res.status(404).send({ msg: "not found" });
  }

  return res.status(200).send({ msg: "Person deleted", removedPerson });
} catch (error) {
    console.log(error);}
};
  
 