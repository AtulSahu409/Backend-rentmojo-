const express =require("express")

const {PackagetypeModule}=require("../model/PackageType.module")

const PackagetypeRouter =express.Router()


PackagetypeRouter.get("/",async(req,res)=>{
    const userID=req.body.TodoID
    try{
        const notes=await PackagetypeModule.find()
        res.send(notes)
    }
    catch(err){
        console.log(err)
        res.send("something wrong")
    }
    
})


PackagetypeRouter.post("/create",async (req,res)=>{
    const payload=req.body
    console.log(payload)
    try{
        await PackagetypeModule.insertMany(payload)
        // const new_note=new PackageModule(payload)
        // await new_note.save()
        res.send({"mesg":"Notes create successfully"})
    }

    catch(err)
    {
        console.log(err)
        res.send({"err":"something wrong"})
    }
})

module.exports={PackagetypeRouter}