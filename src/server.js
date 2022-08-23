import express from "express";

const app = express();

const PORT = 4100;



const handleHome = (req,res) =>{
    return res.send("Hello Yalralloo");
};

const handleLogin = (req,res) =>{
    return res.send("byebye Yalralloo");
};

app.get("/", handleHome);
app.get("/login", handleLogin);



const handleListening = () => console.log(`Server is trying to go http://localhost:${PORT}`);

app.listen(PORT,handleListening);


