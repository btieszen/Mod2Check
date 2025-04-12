// AddDataForm.tsx
import React, { useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

interface Product {
  id?: string; // id is optional, as it will only be available after data is fetched
  product: string;
  price: number;
}

const AddDataForm = () => {
  const [data, setData] = useState<Omit<Product, 'id'>>({ product: '', price: 0 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: name === 'price' ? parseInt(value) : value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'product'), data);
      alert('Data added!');
      setData({ product: '', price: 0 }); // reset form
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="product" value={data.product} onChange={handleChange} placeholder="Product" />
      <input name="price" type="number" value={data.price} onChange={handleChange} placeholder="price" />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddDataForm;