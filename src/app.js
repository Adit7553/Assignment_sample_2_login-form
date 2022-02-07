const express = require("express");

const path = require("path");
const app = express();
require("./db/conn");
const User = require("./models/usemsg.js")
const PORT = process.env.PORT || 5500;
const staticpath = path.join(__dirname, '../public')
app.use(express.urlencoded({extended:true}))
app.use(express.static(staticpath));
app.set("view engine", "ejs");

app.get("/", (req,res)=>{
     res.render('index')
 })

 app.get("/about", (req,res)=>{
  res.render('about')
})
app.get("/contact", (req,res)=>{
  res.render('contact')
})
app.get("/services", (req,res)=>{
  res.render('5.jpg')
})
app.get("/homepage", (req,res)=>{
  res.render('homepage')
})

app.post("/", async(req,res)=>{
  try {
      const userData = new User(req.body);
      await userData.save();
      res.status(201).render('homepage');
  } catch (error) {
      res.status(500).send(error)
  }
})


app.listen(PORT, () => {
  console.log(`Listning on port ${PORT}`);
});