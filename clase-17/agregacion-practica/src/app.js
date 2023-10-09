import express from "express";
import mongoose from "mongoose";
import {  ordersModel } from "./models/orders.model.js"; 
const port = 8080;
const app = express();

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});

let orders = [
    //crear lista de variedad de pizzas precios cantidades y fechas variadas
    { name: "Peperoni", size: "small", price: 100, quantity: 10, date: "2022-10-10T12:00:00Z" },
    { name: "Peperoni", size: "medium", price: 110, quantity: 40, date: "2022-10-10T09:13:24Z" },
    { name: "Peperoni", size: "large", price: 120, quantity: 30, date: "2022-10-10T09:26:12Z" },
    { name: "Cheese", size: "small", price: 100, quantity: 10, date: "2022-10-10T12:00:00Z" },
    { name: "Cheese", size: "medium", price: 110, quantity: 20, date: "2022-10-10T09:13:24Z" },
    { name: "Cheese", size: "large", price: 120, quantity: 30, date: "2022-10-10T09:26:12Z" },
    { name: "Vegan", size: "small", price: 100, quantity: 10, date: "2022-10-10T12:00:00Z" },
    { name: "Vegan", size: "medium", price: 110, quantity: 15, date: "2022-10-10T09:13:24Z" },
    { name: "Vegan ", size: "large", price: 120, quantity: 30, date: "2022-10-10T09:26:12Z" },
];
//para agregar la lista en la db
const operationsDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://soledadar:g04D4zMd9O4y2GvK@cluster0.njbseut.mongodb.net/pizzeriaDB?retryWrites=true&w=majority");
        console.log("DB CONECTADA");
        //solo para cargar la db
        // const result = await ordersModel.create(orders);
        // console.log(result);
        

        //tomo e modelo de las ordenes y aplico el metodo que recibe un arrglo 
        const result = await ordersModel.aggregate( [
            //primera etapa stage filtrar las pizzas de tamaño medino
              {
                $match: {size: "medium"}
              },
              //segunda etapa stage agrupar las pizzas por nombre
              {
                $group: {//tinen que tener un id
                  _id: "$name",
                  total: { $sum: "$quantity" }
                }
              },
              //tercera etapa stage ordenar por total de mayor a menor por eso el -1
              {
                $sort: {total: -1}
              },
              //cuarta etapa stage consolidamos los datos en un solo documento
              {
                $group: {
                    _id: 1,
                    orders: { $push: "$$ROOT" }
                }
                // $project: {
                //   _id: 0,
                //   name: "$_id",
                //   total: 1
                // } 
              },
              //quinta etapa stage 
              {
                $project: {
                  _id: 0,
                  orders: "$orders"//nombre de la colleccion
                }
              },
              //sexta etapa stage  hacer el merge para subir los datos a la db
              {
                $merge: {
                  into: "reports"//esto da un arreglo vacio por lo tanto se subio a la db
                }
              }
            ])
            console.log("Etapas", result)
    } catch (error) {
        console.log(error.message )    
    }
}

operationsDB();