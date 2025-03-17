/*Un contexto en React es una forma eficiente y elegante de compartir estados entre componentes
sin necesidad de mandarlos directamente como propiedades*/

import React, { createContext, useState, useContext } from "react";
import initialProducts from  "../Data/products";

/*Nos referiremos ahora al contexto creado como ProductContext*/
export const ProductContext = createContext();

/* Hook personalizado que facilita el acceso a los datos del contexto.
 Permite que los componentes que lo usen obtengan directamente los datos del ProductContext.*/
export const useProducts = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {

  /* Se crea un estado local llamado 'products', inicializado con 'initialProducts'.
  'setProducts' se encarga de actualizar este estado cuando se agreguen nuevos productos.*/
  const [products, setProducts] = useState(initialProducts);

  // Función que agrega un nuevo producto a la lista de productos.
  const addProduct = (newProduct) => {
    /* La función 'setProducts' actualiza el estado, manteniendo los productos anteriores 
    y agregando el nuevo producto al final del array.*/
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  /* El 'ProductProvider' envuelve a todos sus hijos dentro del contexto. El value del contexto 
  contiene la lista de productos y la función 'addProduct'. Esto permite que cualquier componente 
  hijo tenga acceso a estos datos. */
  return (
    <ProductContext.Provider value={{ products, addProduct }}>
      {children} {/* Aquí se renderizan los componentes hijos que estén dentro del ProductProvider */}
    </ProductContext.Provider>
  );
};
