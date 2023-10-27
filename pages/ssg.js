import Layout from '../components/Layout';
import SubLayout from '../components/SubLayout';

export default function ssg({ time }) {
  return <div>{time}</div>;
}

export async function getStaticProps(ctx) {
  console.log('server');
  return {
    props: {
      time: new Date().toISOString(),
    },
  };
}

ssg.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
