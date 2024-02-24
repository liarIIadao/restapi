//everything we interact with database we use mongoose here
const mongoose = require(`mongoose`);
// schema will determine what kind of data i have in model
const productSchema = mongoose.Schema(
    {
        name:{
            type: String,
            required:[true, `Please enter a product name`]
        },
        quantity:{
          type: Number,
            required: true,
          default: 0
        },
        price:{
            type: Number,
            required: true,
        },
        image:{
            type:String,
            required:false,
        }
    },
    {
        timestamps:true
    }
)

const Product = mongoose.model(`product`, productSchema);
module.exports = Product;