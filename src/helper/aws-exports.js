const AWS=require('aws-sdk')
// require("dotenv").config()

AWS.config.update({
    accessKeyId:process.env.REACT_APP_AWS_ACCESS_KEY,
    secretAccessKey:process.env.REACT_APP_AWS_SECRET_KEY,
    regin:process.env.REACT_APP_S3_REGION
});
const s3=new AWS.S3();

// var param={Bucket:'cricket-data-info',Key:'01-01-2022.json'}

async function get_data_from_s3(param){
    // console.log(process.env.AWS_ACCESS_KEY,process.env.AWS_SECRET_KEY)
    s3.getObject(param,function(err,data){
    if(err){
        console.log(err)
        return {}
    }
    else{
        console.log(data.Body.toString())
        var v=JSON.parse(data.Body.toString());
        return  v;
    }})
};
export {get_data_from_s3,s3}

get_data_from_s3({Bucket:'odicricket',Key:'01-01-2022.json'})