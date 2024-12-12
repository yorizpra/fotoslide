import { NextPage } from 'next';
import Link from 'next/link';

const PaymentPage: NextPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', textAlign: 'center' }}>
      <h1 className="text-4xl font-bold mb-4">Payment 3rd party</h1>
      <p>
        after payment completed, 
        <Link
          href="/"
          className="items-center gap-2.5 rounded-[7px] p-2 text-sm font-medium text-dark-4 underline duration-300 ease-in-out hover:bg-gray-2 hover:text-dark dark:text-dark-6 dark:hover:bg-dark-3 dark:hover:text-white lg:text-base"
        >
          back to fotoslide
        </Link>
      </p>
    </div>
  );
};

export default PaymentPage;