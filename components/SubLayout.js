import Link from 'next/link';

const SubLayout = ({ children }) => {
  return (
    <div>
      <h1>
        <Link href="/" legacyBehavior>
          <a>Home 으로</a>
        </Link>
      </h1>
      {children}
    </div>
  );
};

export default SubLayout;
