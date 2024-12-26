import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
    {
        userId:{type:String,required:true},
        items:{type:Array,required:true},
        amount:{type:Number,required:true},
        address:{type:Object,require:true},
        status:{type:String,default:"food Processing "},
        date:{type:Date,Default:Date.now()},
        payment:{type:Boolean,default:false}
    }
)

const orderModel = mongoose.models.order || mongoose.model("order",orderSchema)
export default orderModel;