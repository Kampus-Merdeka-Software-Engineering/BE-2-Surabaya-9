const express = require('express');
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient ()
const app = express();
const port = 3000;
const router = express.Router()
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
})

router.post ("/registrasi", async(req, res)=>{
  const name = req.body.name
  const email = req.body.email
  const username = req.body.username
  const password = req.body.password
  const confirmPasword = req.body.confirmPasword
  const addData = await prisma.user.create(
    {
      data : {
        email: email,
        name : name,
        username : username,
        password : password,
        confirmPasword : confirmPasword
      }
    }
  )

  res.status(200).send({
    "message":"login succes",
    "data":addData
    
  })
})

router.post ("/login",async(req, res)=>{
  const email = req.body.email
  const password = req.body.password
  const findData = await prisma.user.findUnique({
    where : {email : email, password : password}
  })
  res.status(200).send({
    "message":"login succes",
    "data":findData
  })
  console.log(findData)
})

router.get("/rooms/:id", async(req, res)=>{
  const idCategory = Number(req.params.id)
  const findData = await prisma.rooms.findMany({
    where : {categoryId:idCategory}
  })
  res.status(200).send({
    "message":"login succes",
    "data":findData
    
  })
} )

router.post ("/rooms", async(req, res)=>{
  const id = req.body.id
  const name = req.body.name
  const price = req.body.price
  const description = req.body.description
  const maxOccupancy = req.body.maxOccupancy
  const addData = await prisma.rooms.create(
    {
      data : {
        id : id,
        name : name,
        price : price,
        description : description,
        maxOccupancy : maxOccupancy
      }
    }
  )

  res.status(200).send({
    "message":"login succes",
    "data":addData
    
  })
})

router.post ("/booking/:id", async(req, res)=>{
  const idCard = Number(req.params.id)
  const name = req.body.name
  const price = req.body.price
  const addData = await prisma.booking.create(
    {
      data : {
        idRooms : idCard,
        name : name,
        price : price
      }
    }
  )

  res.status(200).send({
    "message":"login succes",
    "data":addData
    
  })
})

router.post ("/saved/:id", async(req, res)=>{
  const idCard = Number(req.params.id)
  const name = req.body.name
  const price = req.body.price
  const addData = await prisma.saved.create(
    {
      data : {
        idRooms : idCard,
        name : name,
        price : price
      }
    }
  )

  res.status(200).send({
    "message":"login succes",
    "data":addData
    
  })
})

router.post ("/payment", async(req, res)=>{
  const quantity = req.body.quantity
  const discount = req.body.discount
  const price = req.body.price
  const totalPrice = quantity*price
  const paymentTotal = totalPrice-discount*totalPrice/100
  const addData = await prisma.payment.create(
    {
      data : {
        totalPrice : totalPrice,
        discount : discount,
        paymentTotal : paymentTotal
      }
    }
  )

  res.status(200).send({
    "message":"login succes",
    "data":addData
    
  })
})

app.use('/', router);
app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
  })