import News from "./model/news.js";
import { data } from "./constant/data.js";

const DefaultData= async ()=>{
    try{
        await News.deleteMany({});
        await News.insertMany(data);
        console.log('data imported');
    }catch(error){
        console.log(error);
    }
}

export default DefaultData;