// AddDataForm.tsx
import React, { useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

interface orders {
  id?: string; // id is optional, as it will only be available after data is fetched
  name:string
  item: string;
  price: number;
  quantity:number;
  time: Timestamp;
}

const AddOrderForm = () => {
  const [data, setData] = useState<Omit<orders, 'id'>>({ name: '', item: '', price: 0, quantity: 0, time: Timestamp.now() });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: name === 'price' ? parseInt(value) : value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'orders'), data);
      alert('Order added!');
      setData({ name: '', item: '', price: 0, quantity: 0, time: Timestamp.now() }); // reset form
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={data.name} onChange={handleChange} placeholder="Name" />
      <input name="item" value={data.item} onChange={handleChange} placeholder="Item" />,<p>Price</p>
      <input name="price" type="number" value={data.price} onChange={handleChange} placeholder="price" />,<p>Quantity</p>
      <input name="quantity" value={data.quantity} onChange={handleChange} placeholder="quantity" />
      <button type="submit">Add Order</button>
    </form>
  );
};

export default AddOrderForm;