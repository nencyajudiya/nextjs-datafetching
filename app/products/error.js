// nextjs-datafetching/app/products/error.js
'use client';
export default function Error({ error, reset }) {
  return (
    <div className='p-6 text-red-600'>
      <h2>Failed to load products</h2>
      <p>{error.message}</p>
      <button
        onClick={() => reset()}
        className='mt-2 bg-red-500 text-white px-4 py-2 rounded-lg'
      >
        Try Again
      </button>
    </div>
  );
}
