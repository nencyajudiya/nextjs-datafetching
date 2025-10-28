import Link from 'next/link';
import { getData } from '../../utils/axiosInstance';
import { handleError } from '../../utils/handleError';

export const revalidate = 10;

export default async function ProductDetail({ params }) {
  const { id } = await params; // Unwrap params

  try {
    const product = await getData(`/products/${id}`);

    return (
      <div className='p-6 max-w-5xl mx-auto align-middle'>
        {/* Back Button */}
        <Link
          href='/products'
          className='inline-block mb-4 font-medium hover:underline'
        >
          ← Back to Products
        </Link>

        <div className='rounded-xl justify-center p-6 shadow-lg flex flex-col md:flex-row gap-6 bg-white'>
          <div className='flex-shrink-0 w-full md:w-1/3'>
            <img
              src={product.image}
              alt={product.title}
              className='h-64 w-full object-contain rounded-lg'
            />
          </div>

          <div className='flex-1 flex flex-col gap-3'>
            <h1 className='text-2xl font-bold text-gray-900 dark:text-white'>
              {product.title}
            </h1>
            <p className='text-gray-600 dark:text-gray-700'>
              {product.description}
            </p>
            <p className='text-lg font-semibold text-green-600'>
              ${product.price}
            </p>
            <p className='text-sm text-gray-500 dark:text-gray-600'>
              Category: {product.category}
            </p>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    throw new Error(handleError(error));
  }
}
