import express, { request, response } from 'express';



const app = express();
const port = 3333;


app.get("", (request, response) => {
    return response.json({message: "Hello World"})
})


app.listen(port, () => console.log("server is running on port:", port));