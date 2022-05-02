import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className='bg-gray-600 pb-4 pt-6 px-4'>
      <Link href='/'>
        <a className='flex place-content-center'>
          <div className='relative active:top-px'>
            <Image
              alt='Happy Tum-Tum logo'
              src='/images/happy_tum_tum.svg'
              height={91}
              width={80}
            />
          </div>

          <div className='flex flex-col-reverse justify-center ml-4'>
            <h1 className='font-bold text-3xl md:text-4xl text-gray-300'>
              Happy Tum-Tum
            </h1>

            <h2 className='text-gray-500 uppercase'>FODMAP Food Reference</h2>
          </div>
        </a>
      </Link>
    </header>
  );
}
