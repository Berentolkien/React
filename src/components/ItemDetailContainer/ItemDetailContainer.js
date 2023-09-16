import './ItemDetailContainer.css';
import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from "../../services/firebase/firebaseConfig";


const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const { itemId } = useParams();

    useEffect(() => {
        const productRef = doc(db, 'products', itemId);

        getDoc(productRef)
            .then((docSnapshot) => {
                if (docSnapshot.exists()) {
                    setProduct({ id: docSnapshot.id, ...docSnapshot.data() });
                } else {
                    console.error("No se encontró el producto");
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }, [itemId]);

    return (
        <div className='ItemDetailContainer'>
            {product ? <ItemDetail {...product} /> : <p>Cargando...</p>}
        </div>
    );
}

export default ItemDetailContainer;
