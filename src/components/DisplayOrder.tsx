// DisplayOrder.tsx
import  { useState, useEffect } from 'react';
//import { db } from '../firebaseConfig';
import { collection, getDocs, doc, updateDoc, deleteDoc,getFirestore,Timestamp } from 'firebase/firestore';

// Total calculation will be moved inside the component where 'orders' is defined

const firestoreDb = getFirestore()
const colRef = collection(firestoreDb, 'orders');

getDocs(colRef)
    .then((snapshot) => {
        let product: { id: string; [key: string]: any }[] = [];
        snapshot.docs.forEach((doc) => {
            product.push({ ...doc.data(), id: doc.id });
        });
        console.log(product)
    });

interface Orders {
  id?: string; // id is optional, as it will only be available after data is fetched
  name: string;
  item: string;
  price: number;
  quantity:number;
  time: Timestamp;
  total:number;
}

const DisplayOrder = () => {
  const [orders, setOrders] = useState<Orders[]>([]);
  //const [newName, setNewName] = useState<string>('');
 // const [newItem, setNewItem] = useState<string>('');
  //const [newPrice, setNewPrice] = useState<number>(0);
  //const [newQuantity, setNewQuantity] = useState<number>(0);


  // updateUser Function
const updateOrders = async (ordersId: string, updatedData: Partial<Orders>): Promise<void> => {
    const productDoc = doc(firestoreDb, 'orders', ordersId);
    await updateDoc(productDoc, updatedData);
};



  // deleteUser Function
const deleteOrders = async (ordersId: string): Promise<void> => {
    await deleteDoc(doc(firestoreDb, 'orders', ordersId));
};

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(firestoreDb, 'orders'));
      const dataArray = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Orders[];
      setOrders(dataArray);
    };

    fetchData();
  }, []);


  let total=0;
  for (const item of orders){
      total += item.price * (item.quantity ?? 0)
  }
  return (
    <div>
      <h2>Order List</h2>

    <div>
      {orders.map((order) => (
        <div
          key={order.id}
          style={{ border: '2px solid black', margin: '10px' }}
        >
          <div>
            <p>Name: {order.name}</p>
            <p>Item: {order.item}</p>
            <p>Price: {order.price}</p>
            <p>Quantity: {order.quantity}</p>
            <p>Time: {order.time.toDate().toLocaleString()}</p>
            <h4>Total:${total}</h4>
          </div>
         
          <button style={{ backgroundColor: 'crimson' }} onClick={() => { if (order.id) { deleteOrders(order.id); alert('Order Deleted!'); } }}>Delete Order</button>
          <button style={{ backgroundColor: 'cyan'}} onClick={() => { if (order.id) { deleteOrders(order.id); alert('Checkout Complete'); } }}>Checkout</button>
       
        </div>
      ))}
    </div>
    </div>
  );
};

export default DisplayOrder;