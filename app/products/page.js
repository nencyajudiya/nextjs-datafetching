// nextjs-datafetching/app/products/page.js
import Link from 'next/link';
import { getData } from '../utils/axiosInstance';
import { handleError } from '../utils/handleError';

export const dynamic = 'force-dynamic';

export default async function ProductsPage() {
  try {
    const products = await getData('/products');

    return (
      <div className='p-6'>
        <h1 className='text-2xl flex justify-center font-bold mb-4'>
          Product List{' '}
        </h1>
        <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {products.map((product) => (
            <li
              key={product.id}
              className='border rounded-xl p-4 hover:shadow-lg'
            >
              <Link href={`/products/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.title}
                  className='h-40 mx-auto mb-2'
                />
                <h2 className='font-semibold'>{product.title}</h2>
                <p className='text-gray-500'>${product.price}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  } catch (error) {
    throw new Error(handleError(error));
  }
}
