import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from "../../services/firebase/firebaseConfig";


const ItemListContainer = ({ saludos }) => {
    const [products, setProducts] = useState([]);
    
    const { categoryId } = useParams();

    useEffect (() => {
        const productsRef = collection(db, 'products');
        
        const q = categoryId ? query(productsRef, where('category', '==', categoryId)) : productsRef;

        getDocs(q)
            .then((querySnapshot) => {
                const productsData = [];
                querySnapshot.forEach((doc) => {
                    productsData.push({ id: doc.id, ...doc.data() });
                });
                setProducts(productsData);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [categoryId]);

    return (
        <div>
            <h1>{saludos}</h1>
            <ItemList products={products} />
        </div>
    );
}

export default ItemListContainer;
