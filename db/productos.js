let productos = {
    listaDeProductos: [
        {
            id:0,
            id_usuario:0,
            pieza: "Collar Mon Coeur Oro",
            material: "Oro amarillo",
            precio: 16.900,
            descripcion: "Oro de 24 quilates: también conocido como oro puro, es el tipo de oro más puro que se puede encontrar en el mercado. Contiene un 99,9% de oro.",
            imagen: "/images/products/collarCorazon.jpeg",
            fecha_modificacion: null,
            fecha_borrar: null,
            fecha_creado: null,

            //hacer

        },
        {
            id:1,
            id_usuario:1,
            pieza: "Aros FIORE",
            material: "Oro amarillo",
            precio: 14.000,
            descripcion: "Oro de 10 quilates: contiene un 41,7% de oro y un 58,3% de otros metales.",
            imagen: "/images/products/arosLargos.jpeg",
            fecha_modificacion: null,
            fecha_borrar: null,
            fecha_creado: null,
        },
        {
            id:2,
            id_usuario:2,
            pieza: "Collar inicial enchapado en oro",
            material: "Oro amarillo",
            precio: 15.000,
            descripcion: "Oro de 14 quilates: contiene un 58,3% de oro y un 41,7% de otros metales.",
            imagen: "/images/products/inicialA.jpeg",
            fecha_modificacion: null,
            fecha_borrar: null,
            fecha_creado: null,
        },
        {
            id:3,
            id_usuario:3,
            pieza: "Anillo Abbondanza",
            material: "Bronce",
            precio: 13.000,
            descripcion: "Creamos este anillo de bronce que contiene la piedra Pirita conocida como la piedra de la abundancia.",
            imagen: "/images/products/anilloPierdas.jpeg",
            fecha_modificacion: null,
            fecha_borrar: null,
            fecha_creado: null,
        },
        {
            id:4,
            id_usuario:4,
            pieza: "Collar Chloe personalizado",
            material: "Oro amarillo",
            precio: 12.000,
            descripcion: "Enchapado en Oro Amarillo",
            imagen: "/images/products/collarValen.jpeg",
            fecha_modificacion: null,
            fecha_borrar: null,
            fecha_creado: null,
        },
        {
            id:5,
            id_usuario:5,
            pieza: "Pulsera Cleopatra",
            material: "Oro amarillo con piedras azuladas",
            precio: 14.000,
            descripcion: "Enchapado en Oro Amarillo",
            imagen: "/images/products/pulseraPierdas.jpeg",
            fecha_modificacion: null,
            fecha_borrar: null,
            fecha_creado: null,
        },
        {
            id:6,
            id_usuario:6,
            pieza: "Aros Ivanja",
            material: "Oro amarillo",
            precio: 13.500,
            descripcion: "Baniados en Oro Amarillo",
            imagen: "/images/products/argollasIvanka.jpeg",
            fecha_modificacion: null,
            fecha_borrar: null,
            fecha_creado: null,
        },
        {
            id:7,
            id_usuario:7,
            pieza: "Brazalete Cobalto",
            material: "Oro amarillo y piedras de color Cobalto",
            precio: 17.000,
            descripcion: "Oro de 14 quilates: contiene un 58,3% de oro y un 41,7% de otros metales.",
            imagen: "/images/products/fotoAzul.jpeg",
            fecha_modificacion: null,
            fecha_borrar: null,
            fecha_creado: null,
        },
        {
            id:8,
            id_usuario:8,
            pieza: "Anillo y pulsera Mercury",
            material: "Oro amarillo",
            precio: 14.000,
            descripcion: "Oro de 18 quilates: contiene un 75% de oro y un 25% de otros metales como el cobre, la plata y el paladio.",
            imagen: "/images/products/pulseraYanillos.jpeg",
            fecha_modificacion: null,
            fecha_borrar: null,
            fecha_creado: null,
        },
        {
            id:9,
            id_usuario:9,
            pieza: "Collar Mali Baniado en Oro",
            material: "Oro amarillo",
            precio: 16.000,
            descripcion: "Oro de 24 quilates: también conocido como oro puro, es el tipo de oro más puro que se puede encontrar en el mercado. Contiene un 99,9% de oro.",
            imagen: "/images/products/blazerBlanco.jpeg",
            fecha_modificacion: null,
            fecha_borrar: null,
            fecha_creado: null,
        },


    ],

    usuario: [
        {
            id: 0,
            username: `Guillermina Lopez`,
            foto_perfil: "",
            email: `Glopez@gmail.com`,
            birthDay: `17/03/2003`,
            password: `documento`,
            DNI: `44917243`,
            image: "agregar",
        },
        {
            id: 1,
            username: `Juana Lopez`,
            email: `Glopez@gmail.com`,
            birthDay: `17/03/2003`,
            password: `documento`,
            DNI: `44917243`,
            image: "agregar",
        },
        {
            id: 2,
            username: `Vicky Lopez`,
            email: `Glopez@gmail.com`,
            birthDay: `17/03/2003`,
            password: `documento`,
            DNI: `44917243`,
            image: "agregar",
        },
        {
            id: 3,
            username: `Lola Lopez`,
            email: `Glopez@gmail.com`,
            birthDay: `17/03/2003`,
            password: `documento`,
            DNI: `44917243`,
            image: "agregar",
        }
    ],


    comentarios: [
        {
            id:0,
            fecha:"18/02/2015",
            usuario: `amante_de_joyas`,
            texto: `Buenisima esta pieza, la recomiendo al 100%!`

        },
        {
            id:1,
            fecha: "18/02/2015",
            usuario: `juana_sanchez`,
            texto: `Piezas super autenticas y originales`
        },
        {
            id:2,
            fecha:"18/02/2015",
            usuario: `Joya_lovers`,
            texto: `Lugar super recomendado, piezas de excelente calidad y disenio!`
        },
        {
            id:3,
            fecha:"18/02/2015",
            usuario: `fan_de_collares123`,
            texto: `Me queria llevar todo! Muy buen trabajo y excelentes productos`
        },

    ]

}
module.exports = productos;