import express from "express";
const app = express();
const PORT = 5000;
app.get("/",(req,res)=>
{
    res.send("campus sphere backend is running");
});

app.listen(PORT,()=>
{
    console.log(`Server running on port: ${PORT}`);
});
