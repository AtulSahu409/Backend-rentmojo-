const mongoose=require("mongoose")


const PakagetypeSchema=mongoose.Schema({
    "id": Number,
      "image":String,
      "icon":String,
      "title":String,
      "type":String,
      "No_of_package":String

})


const PackagetypeModule=mongoose.model("Packagetype",PakagetypeSchema)


module.exports={PackagetypeModule}