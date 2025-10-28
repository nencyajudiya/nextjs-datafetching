// nextjs-datafetching/app/page.js
import Link from 'next/link';

export default function Home() {
  return (
    <div className='flex min-h-screen items-center justify-center bg-white font-sans'>
      <main className='flex flex-col items-center justify-center py-32 px-6 sm:px-16 '>
        <h1 className='text-5xl font-bold mb-6 text-center text-gray-800'>
          Welcome to FakeStore
        </h1>
        <p className='text-lg mb-8 text-gray-700 text-center max-w-md'>
          Browse our wide collection of products fetched using SSR and ISR in
          Next.js.
        </p>
        <Link
          href='/products'
          className='bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-md'
        >
          Go to Product List
        </Link>
      </main>
    </div>
  );
}
