import orderModel from "../models/orderModel.js"
import userModel from "../models/userModel.js"
import stripe, { Stripe } from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

// placing user order for Frontend
const placeOrder = async (req, res)=>{
     
    try{
       const newOrder = new orderModel({
           userId:req.body.userId,
           item:req.body.items,
           amount:rea.body.amount,
           address:req.body.address
       })

       await newOrder.save();
       await userModel.findByIdAndUpdate(req.body.userId,{cartDate:{}});

    //    const line_items = req.body.items.map((item)=>){
    //      price_data:{
            
    //      }
    //    }

    }catch(error){

    }
}

export {placeOrder}