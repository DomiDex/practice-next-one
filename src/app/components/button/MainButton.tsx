import Link from 'next/link';

export default function MainButton() {
  return (
    <Link href='/project/project-single'>
      <button className='bg-blue-500 text-white px-4 py-2 rounded-md'>
        Main Button
      </button>
    </Link>
  );
}
