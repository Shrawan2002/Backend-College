const mongoose = require("mongoose");
const {Schema} = mongoose;


main()
.then(()=>{
    console.log("connection successfull!");
}).catch((err)=>{
    console.log(err);
})

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo")
}


// mongo relationships -> one to many Approach 2 one to few

const orderSchema = new Schema({
    item: String,
    price: Number
});

const Order = mongoose.model("Order", orderSchema);;

// const addOrder = async ()=>{
//     let res = await Order.insertMany([
//         {item: "Somassa", price: 12},
//         {item: "Chips", price: 10},
//         {item: "Chocolate", price: 40}
//     ]);
//     console.log(res);
// }
//   addOrder();

const customerSchema = new Schema({
    nmae: String,
    orders: [
        {
            type: Schema.Types.ObjectId,
            ref: "Order"
        }
    ]
})

const Customer = mongoose.model("Customer", customerSchema);

const addCustomer = async()=>{
    // let cust1 = new Customer({
    //     nmae: "Rahul"
    // })

    // let order1 = await Order.findOne({item: "Chips"});
    // let order2 = await Order.findOne({item: "Chocolate"});

    // cust1.orders.push(order1);
    // cust1.orders.push(order2);

    // let res = await cust1.save();
    // console.log(res);

    let result = await Customer.find({});
    console.log(result);

}

// addCustomer();

// populate

const findCustomer = async ()=>{
    let result = await Customer.find({}).populate("orders");
    console.log(result[0]);
}

findCustomer();