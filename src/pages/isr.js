export async function getStaticProps(ctx) {
  console.log('server');

  return {
    props: {
      time: new Date().toISOString(),
    },
    revalidate: 1,
  };
}

const ISR = ({ time }) => {
  return <div>{time}</div>;
};

export default ISR;
