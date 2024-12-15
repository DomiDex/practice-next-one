import Link from 'next/link';

export default function navbar() {
  return (
    <nav className='flex justify-between items-center h-16 bg-white text-black px-4'>
      <Link href='/'>
        <h1 className='text-2xl font-bold'>Logo</h1>
      </Link>

      <div className='flex gap-4'>
        <Link href='/about'>About</Link>
        <Link href='/project'>Project</Link>
        <Link href='/contact'>Contact</Link>
      </div>
    </nav>
  );
}
