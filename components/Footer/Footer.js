export default function Footer() {
  return (
    <footer>
      <p className='bg-fuchsia text-center text-sm'>
        Copyright © {`${new Date().getFullYear()}`}
      </p>
    </footer>
  );
}
