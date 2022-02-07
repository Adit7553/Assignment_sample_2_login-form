const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/loginforminfo", {
    useNewUrlParser:true,
    useUnifiedTopology:true
    
}).then(()=>{
    console.log('connection successfull');
}).catch((err)=>{
    console.log(`Bad connection request, error ${err}`)

})
