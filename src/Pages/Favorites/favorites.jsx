import { Link } from "react-router-dom";

/* import { products } from "../../Data/products.js"; */

import ProductCard from "../../Components/ProductCard/ProductCard.jsx";
import "./favorites.css";

const products = [
  {
    id: "1",
    name: "Calculadora científica",
    description: "Calculadora científica Texas Instruments TI-84 Plus. Usada durante un semestre, en perfecto estado. Ideal para clases de cálculo, física y estadística.",
    price: 850,
    seller: "Carlos Mendoza",
    tags: ["electrónica", "calculadora", "ingeniería"],
    imageUrl: "https://www.edu-casio.es/wp-content/uploads/2021/07/Captura-de-pantalla-2021-07-06-a-las-15.05.26.png",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
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
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
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
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
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
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
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
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
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
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
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
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
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
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
];


export default function FavoritesPage() {
  // Simulamos que algunos productos son favoritos
  const favoriteProducts = products.filter((_, index) => index % 3 === 0);

  return (
    <main>
      <div className="favorites-header">
        <h1>Tus favoritos</h1>
      </div>
      <div className="favorites-container">
        {favoriteProducts.length > 0 ? (
            <div className="favorites-grid">
              {favoriteProducts.map((product) => (
                <Link key={product.id} to={`/product/${product.id}`} className="favorites-link">
                  <ProductCard product={product} />
                </Link>
              ))}
            </div>
          ) : (
            <div className="favorites-empty">
              <h2 className="favorites-empty-title">No tienes favoritos</h2>
              <p className="favorites-empty-text">Explora productos y marca los que te gusten como favoritos</p>
              <Link
                to="/"
                className="favorites-empty-button"
              >
                Explorar productos
              </Link>
            </div>
          )}
      </div>
    </main>
  );
}