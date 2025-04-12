// DisplayData.tsx
import  { useState, useEffect } from 'react';
//import { db } from '../firebaseConfig';
import { collection, getDocs, doc, updateDoc, deleteDoc,getFirestore } from 'firebase/firestore';



const firestoreDb = getFirestore()
const colRef = collection(firestoreDb, 'product');

getDocs(colRef)
    .then((snapshot) => {
        let product: { id: string; [key: string]: any }[] = [];
        snapshot.docs.forEach((doc) => {
            product.push({ ...doc.data(), id: doc.id });
        });
        console.log(product)
    });

interface Product {
  id?: string; // id is optional, as it will only be available after data is fetched
  product: string;
  price: number;
}

const DisplayData = () => {
  const [product, setProduct] = useState<Product[]>([]);
  const [newPrice, setNewPrice] = useState<string>('');
  const [newProduct, setNewProduct] = useState<string>('');

  // updateUser Function
const updateProduct = async (productId: string, updatedData: Partial<Product>): Promise<void> => {
    const productDoc = doc(firestoreDb, 'product', productId);
    await updateDoc(productDoc, updatedData);
};

  // deleteUser Function
const deleteProduct = async (productId: string): Promise<void> => {
    await deleteDoc(doc(firestoreDb, 'product', productId));
};

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(firestoreDb, 'product'));
      const dataArray = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Product[];
      setProduct(dataArray);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      
      {product.map((product) => (
        <div
          key={product.id}
          style={{ border: '2px solid black', margin: '10px' }}
        >
          <div key={product.id}>
            <p>Product: {product.product}</p>
            <p>Price: {product.price}</p>
          </div>
          <input
            onChange={(e) => setNewProduct(e.target.value)}
            type="string"
            placeholder="Enter new Product:"
          />
          <button onClick={() => product.id && updateProduct(product.id, { product: newProduct })}>
            Update Product
          </button>
          <input
            onChange={(e) => setNewPrice(e.target.value)}
            type="number"
            placeholder="Enter new Price:"
          />
          <button onClick={() => product.id && updateProduct(product.id, { price: Number(newPrice) })}>
            Update Price
          </button>
          <button style={{ backgroundColor: 'crimson'}} onClick={() => product.id && deleteProduct(product.id)}>Delete Product</button>
         
        </div>
      ))}
    </div>
  );
};

export default DisplayData;