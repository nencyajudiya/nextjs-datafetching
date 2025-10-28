'use client';
import { useEffect, useState } from 'react';
import axiosInstance from '@/utils/axiosInstance';

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axiosInstance
      .get('/products')
      .then((res) => setProducts(res.data))
      .catch((err) => console.error('Error fetching products:', err));
  }, []);

  return (
    <div className='p-6'>
      <h2 className='text-xl font-semibold mb-4'>
        Client-Fetched Products (useEffect)
      </h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </div>
  );
}
