/* Redux Toolkit es una herramienta poderosa que facilita la gestión del estado global en aplicaciones React. 
   En este ejemplo, reemplazaremos el uso de Context API con Redux Toolkit de manera clara y pedagógica. */

   import { createSlice, configureStore } from "@reduxjs/toolkit";
   import { Provider, useDispatch, useSelector } from "react-redux";
   import initialProducts from "../Data/products";
   
   /* Se crea un 'slice', que es la unidad básica en Redux Toolkit para gestionar el estado. 
      Este slice contendrá tanto el estado inicial como las funciones (reducers) que lo modifican. */
   
   const productsSlice = createSlice({
     name: "products", // Nombre del slice, importante para identificar este estado en el store.
     initialState: initialProducts, // Estado inicial igual al que teníamos antes.
     reducers: {
       // Reducer para agregar un nuevo producto a la lista de productos.
       addProduct: (state, action) => {
         state.push(action.payload); // Redux Toolkit permite manipular el estado directamente usando Immer internamente.
       },
     },
   });
   
   // Se exporta la acción 'addProduct' para poder ser llamada desde cualquier componente.
   export const { addProduct } = productsSlice.actions;
   
   // Se crea el 'store', que es el único lugar donde se guarda el estado global de la aplicación.
   const store = configureStore({
     reducer: {
       products: productsSlice.reducer, // Se registra el reducer de productos en el store.
     },
   });
   
   /* Hook personalizado para acceder fácilmente a la lista de productos en los componentes. */
   export const useProducts = () => useSelector((state) => state.products);
   
   /* Hook personalizado que facilita el envío de acciones (dispatch) al store. */
   export const useAddProduct = () => {
     const dispatch = useDispatch();
     return (newProduct) => dispatch(addProduct(newProduct));
   };
   
   /* El componente 'ProductProvider' ahora utiliza el componente 'Provider' de Redux Toolkit, 
      que se encarga de hacer que el store esté disponible en toda la aplicación. */
   export const ProductProvider = ({ children }) => {
     return <Provider store={store}>{children}</Provider>;
   };
   
