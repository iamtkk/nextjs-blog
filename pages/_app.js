import Layout from '../components/Layout.js';
import SubLayout from '../components/SubLayout.js';

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);
  // return (
  //   <Layout>
  //     <Component {...pageProps} />
  //   </Layout>
  // );
  return getLayout(<Component {...pageProps} />);
}
