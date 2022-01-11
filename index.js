const express = require('express');


const app = express();

// normal funtion:
//function rootCall(req, res){
//     res.send('thank you very much')
// }

//arrow function:
//const rootCall = (req, res)=>res.send('thank you very much');

app.get('/', (req, res)=> {
    res.send('thank you very much');
})

app.listen(3000, ()=> console.log('Listening to port 3000'))