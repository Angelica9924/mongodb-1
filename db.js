db.createCollection('usuarios');

db.usuarios.insertMany([
    {
        name: 'Valeria',
        lastname: 'Perez',
        email: 'vale@outlook.com',
        city: 'Medellin',
        country: 'Colombia',
        salary: 2500,
        age: 27,
        height: 183,
        weight: 187 
    },
    {
        name: 'Juan',
        lastname: 'Velez',
        email: 'juanve@outlook.com',
        city: 'New York',
        country: 'USA',
        salary: 5000,
        age: 35,
        height: 170,
        weight: 165.35 
    },
    {
        name: 'Elcy',
        lastname: 'Carmona',
        email: 'carmonael@outlook.com',
        city: 'London',
        country: 'UK',
        salary: 6000,
        age: 15,
        height: 181,
        weight: 176
    },
    {
        name: 'Sofia',
        lastname: 'Quintero',
        email: 'sofiequin@outlook.com',
        city: 'Paris',
        country: 'France',
        salary: 4600,
        age: 28,
        height: 170,
        weight: 135
    },
    {
        name: 'Ukele',
        lastname: 'Kali',
        email: 'ukele@outlook.com',
        city: 'Bangalore',
        country: 'India',
        age: 25
    },
    {
        name: 'Rafa',
        lastname: 'Piedrahita',
        email: 'rafael@outlook.com',
        city: 'Mexico City',
        country: 'Mexico',
        salary: 2800,
        age: 34,
        height: 150,
        weight: 165
    },
    {
        name: 'Eugenia',
        lastname: 'Molina',
        email: 'eua.molina@outlook.com',
        city: 'Berlin',
        country: 'Germany',
        salary: 3900,
        age: 31,
        height: 165,
        weight: 145
    },
    {
        name: 'Albeiro',
        lastname: 'Carmona',
        email: 'albecarm@outlook.com',
        city: 'Rome',
        country: 'Italy',
        salary: 2950,
        age: 25,
        height: 174,
        weight: 155
    },
    {
        name: 'Helena',
        lastname: 'Marin',
        email: 'helenama@outlook.com',
        city: 'Warsaw',
        country: 'Poland',
        salary: 3150,
        age: 27,
        height: 174,
        weight: 140
    },
    {
        name: 'Lua',
        lastname: 'Ner',
        email: 'lua@outlook.com',
        city: 'Seoul',
        country: 'South Korea',
        age: 25
    },
    {
        name: 'Valentina',
        lastname: 'Restrepo',
        email: 'valen@outlook.com',
        city: 'Sao Paulo',
        country: 'Brazil',
        salary: 2900,
        age: 31,
        height: 172,
        weight: 175
    },
    {
        name: 'Juanjo',
        lastname: 'Rincon',
        email: 'juanjorin@outlook.com',
        city: 'Buenos Aires',
        country: 'Argentina',
        salary: 3100,
        age: 30,
        height: 163,
        weight: 154
    },
    {
        name: 'Diana',
        lastname: 'Toro',
        email: 'dianatoro@outlook.com',
        city: 'Barcelona',
        country: 'Spain',
        salary: 4300,
        age: 22,
        height: 165,
        weight: 132.28 
    },
    {
        name: 'Jhonatan',
        lastname: 'Martinez',
        email: 'martinez@outlook.com',
        city: 'Madrid',
        country: 'Spain',
        salary: 5500,
        age: 40,
        height: 160,
        weight: 121
    },
    {
        name: 'Jose',
        lastname: 'Ortega',
        email: 'joseort@outlook.com',
        city: 'Los Angeles',
        country: 'USA',
        salary: 7000,
        age: 17,
        height: 160,
        weight: 154.32 
    },
    {
        name: 'Wilmar',
        lastname: 'Lee',
        email: 'wilmar@outlook.com',
        city: 'Seoul',
        country: 'South Korea',
        salary: 2800,
        age: 38,
        height: 153,
        weight: 127.87 
    },
    {
        name: 'Juanda',
        lastname: 'cehn',
        email: 'juan@outlook.com',
        city: 'Chi City',
        country: 'Vietnam',
        salary: 4000,
        age: 41,
        height: 168,
        weight: 143.3 
    },
    {
        name: 'Isabella',
        lastname: 'Marin',
        email: 'isabella@outlook.com',
        city: 'Mexico City',
        country: 'Mexico',
        salary: 3400,
        age: 29,
        height: 160,
        weight: 134.89 
    },
    {
        name: 'Jackie',
        lastname: 'Chan',
        email: 'jackie.chan@outlook.com',
        city: 'Shanghai',
        country: 'China',
        salary: 6000,
        age: 16,
        height: 175,
        weight: 158.73 
    },
    {
        name: 'Alejandra',
        lastname: 'Gomez',
        email: 'gomez@outlook.com',
        city: 'Bogotá',
        country: 'Colombia',
        salary: 2800,
        age: 30,
        height: 162,
        weight: 132.28 
    },
    {
        name: 'Heriberto',
        lastname: 'Perez',
        email: 'heriperez@outlook.com',
        city: 'Madrid',
        country: 'Spain',
        salary: 3200,
        age: 28,
        height: 173,
        weight: 160
    }
]);

db.usuarios.insertOne({
    name: 'Nestor',
    lastname: 'Lola',
    email: 'nestorlo@outlook.com',
    city: 'Medellin',
    country: 'Colombia',
    salary: 2500,
    age: 18,
    height: 183,
    weight: 187 
    }
)

//Borrar 
db.usuarios.drop();
//Encontrar
db.usuarios.find();

// 1. Obtener todos los usuarios que sean mayores de 18 años.

db.usuarios.find({ age : {$gt: 18} });

// 2. Obtener todos los usuarios que sean de Londres o de París.

db.usuarios.find({
    $or: [
        { city: 'London' },
        { city: 'Paris' }
    ]
});

// 3. Obtener a todos los usuarios que ganen más de $2000 al mes y tengan menos de 30 años.

db.usuarios.find({
    $and: [
        { salary: { $gt: 2000 } },
        { age: { $lt: 30 } }
    ]
});


// 4. Obtener a todos los usuarios que sean de España y ganen más de $3000 al mes.

db.usuarios.find({
    $and: [
        { country : 'Spain'},
        { salary: { $gt: 3000}}
    ]
})

// 5. Obtener todos los usuarios que tengan entre 25 y 35 años.

db.usuarios.find({
    $and: [
        { age: { $gte: 25 } },
        { age: { $lte: 35 } }
    ]
});

// 6. Obtener a todos los usuarios que no sean de Estados Unidos.

db.usuarios.find({ country : {$ne: 'USA'} });

// 7. Obtener a todos los usuarios que sean de Londres y que ganen más de $2500 o que tengan más de 30 años.

db.usuarios.find({
    city: 'London',
    $or: [
        { salary: { $gt: 2500 } },
        { age: { $gt: 30 } }
    ]
});


// 8. Obtener a todos los usuarios que sean de Australia y tengan un peso mayor a 140 libras.

db.usuarios.find({
    $and: [
        { country: 'Australia' },
        { weight: { $gt: 140 } }
    ]
});

// 9. Obtener a todos los usuarios que no sean de Londres ni de París.

db.usuarios.find({
    $nor: [
        { city: 'London' },
        { city: 'Paris' }
    ]
});

// 10. Obtener a todos los usuarios que no sean de Londres ni de París.

db.usuarios.find({
    $or: [
        { salary: { $lt: 2000 } },
        { age: { $gt: 40 } }
    ]
});

// 11. Obtener a todos los usuarios que sean de Canadá y ganen más de $4000 al mes o que tengan una altura mayor a 180 cm.

db.usuarios.find({
    $and: [
        { country: 'Canada' },
        {
            $or: [
                { salary: { $gt: 4000 } },
                { height: { $gt: 180 } }
            ]
        }
    ]
});

// 12. Obtener todos los usuarios que sean de Italia y tengan entre 20 y 30 años.

db.usuarios.find({
    $and: [
        { country: 'Italy' },
        { age: { $gte: 20, $lte: 30 } }
    ]
});

// 13. Obtener todos los usuarios que no tengan un correo electrónico registrado.

db.usuarios.find({
    email: { $exists: false }
});

// 14. Obtener todos los usuarios que sean de Francia y que su salario esté entre $3000 y $5000 al mes.

db.usuarios.find({
    $and: [
        { country: 'France' },
        { salary: { $gte: 3000, $lte: 5000 } }
    ]
});

// 15. Obtener todos los usuarios que sean de Brasil y que tengan un peso menor a 120 libras o más de 140 libras.

db.usuarios.find({
    $and: [
        { country: 'Brasil' },
        {
            $or: [
                { weight: { $lt: 120 } },
                { weight: { $gt: 140 } }
            ]
        }
    ]
});

// 16. Obtener todos los usuarios que sean de Argentina o de Chile y que tengan una edad menor a 25 años.

db.usuarios.find({
    $or: [
        { $and: [{ country: 'Argentina' }, { age: { $lt: 25 } }] },
        { $and: [{ country: 'Chile' }, { age: { $lt: 25 } }] }
    ]
});


// 17. Obtener a todos los usuarios que no sean de España ni de México y que ganen menos de $3000 al mes.

db.usuarios.find({
    $and: [
        { country: { $ne: 'Spain' } },
        { country: { $ne: 'Mexico' } },
        { salary: { $lt: 3000 } }
    ]
});

// 18. Obtener todos los usuarios que sean de Alemania y que tengan un salario menor a $4000 o una edad mayor a 35 años.

db.usuarios.find({
    $and: [
        { country: 'Alemania' },
        {
            $or: [
                { salary: { $lt: 4000 } },
                { age: { $gt: 35 } }
            ]
        }
    ]
});

// 19. Obtener todos los usuarios que no sean de Colombia y que su altura sea menor a 170 cm.

db.usuarios.find({
    $and: [
        { country: { $ne: 'Colombia' } },
        { height: { $lt: 170 } }
    ]
});

// 20. Obtener todos los usuarios que sean de India y que no tengan un salario registrado.

db.usuarios.find({
    $and: [
        { country: 'India' },
        { salary: { $exists: false } }
    ]
});