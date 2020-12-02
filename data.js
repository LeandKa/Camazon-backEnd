 import bcrypt from 'bcryptjs';

 const data = {
     users:[
       {
           name:'Basir',
           email:'admin@example.com',
           password: bcrypt.hashSync('1234',8),
           isAdmin:true,
       },
       {
           name:'John',
           email:'user@email.com',
           password:bcrypt.hashSync('1234',8),
           isAdmin:false
       }
     ],
    products:[
        {
            name:'Nike Slim Shirt',
            category:'Shirts',
            image:'/images/p1.jpg',
            price:120,
            countInStock:10,
            brand:'Nike',
            rating:4.5,
            numReviews:10,
            description:'high quality product'
        },
        {
            name:'Puma Large Pants',
            category:'Pants',
            image:'/images/p3.jpg',
            price:20,
            countInStock:20,
            brand:'Puma',
            rating:5.0,
            numReviews:10,
            description:'high quality product'
        },
        {

            name:'Nike Slim Shirt',
            category:'Shirts',
            image:'/images/p6.jpg',
            price:1200,
            brand:'Nike',
            countInStock:0,
            rating:3.5,
            numReviews:10,
            description:'high quality product'
        },
        {
            name:'Puma Slim Pants',
            category:'Pants',
            image:'/images/p3.jpg',
            price:40,
            countInStock:12,
            brand:'Puma',
            rating:4.5,
            numReviews:10,
            description:'high quality product'
        }
    ]
}

export default data;