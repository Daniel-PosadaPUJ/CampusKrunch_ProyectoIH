const initialProducts  = [
  {
    id: "1",
    name: "Calculadora científica",
    description: "Calculadora científica Texas Instruments TI-84 Plus. Usada durante un semestre, en perfecto estado. Ideal para clases de cálculo, física y estadística.",
    price: 850,
    seller: "Carlos Mendoza",
    tags: ["electrónica", "calculadora", "ingeniería"],
    imageUrl: "https://www.edu-casio.es/wp-content/uploads/2021/07/Captura-de-pantalla-2021-07-06-a-las-15.05.26.png",
    images: [
      "https://www.edu-casio.es/wp-content/uploads/2021/07/Captura-de-pantalla-2021-07-06-a-las-15.05.26.png",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbZCRBFW25SnHs9cnxmAfSbVo01f1ye6QTLw&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRru1a5Tla5NRzb3cNDqPt6gPuaf_9cE4uqSfchrl2_8HiIhgS50KkxBF9JLSi3B8yQoyo&usqp=CAU",
    ],
  },
  {
    id: "2",
    name: "Libro de Cálculo",
    description: "Libro de Cálculo de James Stewart, 8va edición. En buen estado, con algunas anotaciones útiles en lápiz. Incluye solucionario.",
    price: 350,
    seller: "Ana García",
    tags: ["libros", "matemáticas", "cálculo"],
    imageUrl: "https://m.media-amazon.com/images/I/8132ucjiueL._AC_UF1000,1000_QL80_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/8132ucjiueL._AC_UF1000,1000_QL80_.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA7aGZdvPTFSCYwJyt5tXBJoRaSgFg_raOJw&s",
    ],
  },
  {
    id: "3",
    name: "Laptop Dell Inspiron",
    description: "Laptop Dell Inspiron 15, procesador i5, 8GB RAM, 256GB SSD. Tiene 2 años de uso pero funciona perfectamente. Ideal para estudiantes de informática.",
    price: 5500,
    seller: "Miguel Ángel",
    tags: ["electrónica", "computadora", "laptop"],
    imageUrl: "https://noticias.bidcom.com.ar/wp-content/uploads/2022/08/notebook-dell.jpg",
    images: [
      "https://http2.mlstatic.com/D_NQ_NP_820060-MCO76406504326_052024-O.webp",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9rtJlQ8K9RBdjDjZefwhyHlZtuy9O0ZBSlg&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx_L_H2VbuXdFCwQpNpEOrQHR2jrMjsyM69A&s",
    ],
  },
  {
    id: "4",
    name: "Guitarra acústica",
    description: "Guitarra acústica Yamaha F310. Comprada hace 1 año, poco uso. Incluye funda, afinador y púas.",
    price: 1800,
    seller: "Laura Sánchez",
    tags: ["música", "instrumentos", "guitarra"],
    imageUrl: "https://artiumacademy.mo.cloudinary.net/v1n/Learn_Guitar_Online.jpg",
    images: [
      "https://artiumacademy.mo.cloudinary.net/v1n/Learn_Guitar_Online.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAh0LBPdp8e7lNUnpQUvowZcNrURkzLIzURg&s",
    ],
  },
  {
    id: "5",
    name: "Churros",
    description: "Deliciosos churros recién hechos, ideales para un desayuno dulce o un postre.",
    price: 2200,
    seller: "Roberto Díaz",
    tags: ["comidas", "dulces"],
    imageUrl: "https://ca-times.brightspotcdn.com/dims4/default/3eccc73/2147483647/strip/false/crop/1140x1500+0+0/resize/1129x1486!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F03%2Fd3%2Fab6da853405b956a499f9ce345b2%2Fchurros-llenos-de-sabor-1496885.JPG",
    images: [
      "https://ca-times.brightspotcdn.com/dims4/default/3eccc73/2147483647/strip/false/crop/1140x1500+0+0/resize/1129x1486!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F03%2Fd3%2Fab6da853405b956a499f9ce345b2%2Fchurros-llenos-de-sabor-1496885.JPG",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsHFGsgw3Xp7ENR0l_RbBxCmBRljOOnr3KRw&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhl_Z7zMQFJUJIUyumjoVpkAhqQfu_VLJcuA&s",
    ],
  },
  {
    id: "6",
    name: "Bata de laboratorio Talla M",
    description: "Bata blanca de laboratorio talla M. Usada solo un par de veces, en perfecto estado. Cumple con los requisitos para clases de química.",
    price: 180,
    seller: "Sofía Ramírez",
    tags: ["laboratorio", "química", "ropa"],
    imageUrl: "https://dotacionesyseguridad.co/administrador/productos/imagesProductos/8932650536.jpg",
    images: [
      "https://dotacionesyseguridad.co/administrador/productos/imagesProductos/8932650536.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPUSpheKoi7_I0-KYSWay1hRmbIIh-_u_IsA&s",
    ],
  },
  {
    id: "7",
    name: "Tableta gráfica Wacom",
    description: "Tableta gráfica Wacom Intuos S. Perfecta para diseño gráfico y dibujo digital. Incluye lápiz y cable USB.",
    price: 1200,
    seller: "Daniel Torres",
    tags: ["diseño", "arte", "electrónica"],
    imageUrl: "https://estore.wacom.com/media/wysiwyg/localized-assets/Wacom-One-pen-display-feature-list.jpg",
    images: [
      "https://estore.wacom.com/media/wysiwyg/localized-assets/Wacom-One-pen-display-feature-list.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOZjkv8NuKyPCMndMpiKEeKhLrYL1_QRmy9A&s",
    ],
  },
  {
    id: "8",
    name: "Donas",
    description: "Deliciosas donas de chocolate, vainilla y fresa. Ideales para un desayuno dulce o un postre.",
    price: 250,
    seller: "Javier López",
    tags: ["comidas", "dulces", "donas"],
    imageUrl: "https://aluminiomonarca.mx/cdn/shop/articles/Como-hacer-donas_1024x1024.jpg?v=1663189228",
    images: [
      "https://defoodieachef.com/wp-content/uploads/2020/01/donas.jpg",
      "https://img-global.cpcdn.com/recipes/22679109c6bc9d20/400x400cq70/photo.jpg",
    ],
  },
  {
    id: "9",
    name: "Pizza Pepperoni",
    description: "Pizza recién horneada con abundante pepperoni, queso fundido y una base crujiente.",
    price: 350,
    seller: "Mariana Pérez",
    tags: ["comidas", "pizza", "cena"],
    imageUrl: "https://www.novachef.es/media/images/pizza-pepperoni.jpg",
    images: [
      "https://papajohns.vtexassets.com/arquivos/ids/155958-800-auto?v=637732053132170000&width=800&height=auto&aspect=truehttps://atsloanestable.com/wp-content/uploads/2023/06/new-york-style-pizza2.jpg",
      "https://www.novachef.es/media/images/pizza-pepperoni.jpg",
    ],
  },
];

export default initialProducts;