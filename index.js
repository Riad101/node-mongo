const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();

app.use(cors());
app.use(bodyParser.json());

// normal funtion:
//function rootCall(req, res){
//     res.send('thank you very much')
// }

//arrow function:
//const rootCall = (req, res)=>res.send('thank you very much');

app.get('/', (req, res)=> {
    res.send('thank you very much');
})

const users = ["Asad", "Khaled", "John", "Nazat", "Adam"]

app.get('/users/:id', (req, res)=>{
    const id = req.params.id;
    const name = users[id];
    res.send({id,name});
})

//post 

app.post('/addUser', (req, res)=>{
    console.log('data received', req.body);
    //post to database
    res.send(req.body);
})

app.listen(3000, ()=> console.log('Listening to port 3000'))