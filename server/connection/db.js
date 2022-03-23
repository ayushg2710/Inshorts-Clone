import mongoose from "mongoose";

const Connection= async ()=>{
    try{
       const URL=`mongodb+srv://ayushgarg:garg%402710@inshort-clone.slilm.mongodb.net/PROJECT-0?retryWrites=true&w=majority`;
       await mongoose.connect(URL,{UseNewUrlParser:true});
       console.log("database connected");
    }catch(error){
       console.log(error);
    }
}

export default Connection;