const express=require("express")
const app=express()
const cors=require("cors")
const port=5000;
const emp=[{id:203125,name:"trinath nayak",age:19,avatar:"https://wallpapercave.com/wp/wp7004510.jpg"},
	{id:203109,name:"siva kumar",age:19,avatar:"https://static.theprint.in/wp-content/uploads/2022/11/Feature-Image-46.png?compress=true&quality=80&w=376&dpr=2.6"},
	{id:203114,name:"rajesh",age:20,avatar:"https://cdn.gulte.com/wp-content/uploads/2021/06/Allari-Naresh.jpg"},
	{id:203116,name:"karthik",age:20,avatar:"https://s3images.zee5.com/wp-content/uploads/sites/7/2020/07/Stills-from-Spyder-1.jpg"}
	]
app.use(cors())
	const students=require("./data.js")
app.get("/",(req,res)=>{
	res.send("Code red raa")
})
app.get("/user",(req,res)=>{
	res.send("bhimbi ley bhimbi bhimbi bhimbi")
})
app.get("/emp",(req,res)=>{
	res.json(emp)
})
app.get("/students",(req,res)=>{
	res.json(students)
})
app.listen(port,()=>console.log("rey picha naa kodaka deani mutukokura"))

