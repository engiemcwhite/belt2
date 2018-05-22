const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
app.use(express.static(__dirname + '/belt2/dist/belt2'));
app.use(bodyParser.json());
const autoIncrement = require('mongoose-plugin-autoinc');

mongoose.connect('mongodb://localhost/BeltExam7');

//var uniqueValidator = require('mongoose-unique-validator');
var productSchema = new mongoose.Schema({
    name : {type: String, required:[true," Product must have a name"], minlength: [3,"Product name must be at least 3 characters long."]},
    quantity : {type: Number, required:[true,"Please specify a quantity."],min:[0,"Our products contain 0% antimatter guaranteed!"] },
    price : {type: Number, required:[true,"Everything has a price."],min:[0,"We won't pay you to take our stuff."]}
            })
productSchema.plugin(autoIncrement.plugin,{model:'Product',field:'productId'});
mongoose.model('Products', productSchema);
var Product = mongoose.model('Products');


app.get('/products', function(request,response){
    Product.find({}, function(errs,data){
        if(errs){
            console.log("errors");
        }
        else{
            response.json(data);
        }
    })
})

app.get('/products/:id', function(request,response){
    console.log(request.params.id, "this is the id from get"); 
    Product.findOne({productId: request.params.id}, function(errs,data){
        if(errs){
            console.log("There was an error!");
        }
        else{
            console.log("this is the get one author metnod")
            console.log(data);
            response.json(data);
        }
    })
})

app.post('/products', function(req, res) {
    console.log("Got to the server!");
    var prod = new Product();
    prod.name = req.body.name;
    prod.quantity = req.body.quantity;
    if(req.body.price < 0){
        prod.price = req.body.price * -1;
    }
    prod.price = req.body.price;
    prod.save(function(err){
        if(err){
            var errors = {};
            console.log(err);
            for(error in err['errors']){
                console.log(error,"-",err['errors'][error]['message']);
                errors[error] = err['errors'][error]['message'];
            }
            let result = {
                status: "Not goodly",
                errors: errors
            };
            //console.log(err['errors']['pet']['name']['message']);
            res.json(result);
        }
        else{
            console.log("Successfully saved!");
            res.json({errors: ""});
        }
    });
})

// Add User Request 
app.put('/products/:id', function(req, res) {
    // console.log(req.params.id);
    // console.log(req.body.name);
    console.log("I made it to the server boys!");
    Product.update({productId: req.params.id},{name : req.body.name, quantity : req.body.quantity, price: req.body.price},{runValidators : true},function(err){
        if(err){
            var errors = {};
            console.log(err);
            for(error in err['errors']){
                console.log(error,"-",err['errors'][error]['message']);
                errors[error] = err['errors'][error]['message'];
            }
            let result = {
                status: "Not goodly",
                errors: errors
            };
            res.json(result);
        }
        else{
            res.json({errors:"none"});
        }
    })
})

app.delete('/products/:id', function(req, res) {
    console.log("Exterminate! Exterminate!");
    console.log(req.params.id);
    Product.remove({productId: req.params.id},function(err){
        if(err){
            console.log("I just don't know what went wrong!");
            res.json({errors:err});
        }
        else{
            console.log("There are no errors!");    
            res.json({errors:"none"})
        }
    })
})
app.listen(8000, function(errs){
console.log("Server at 8000");
})