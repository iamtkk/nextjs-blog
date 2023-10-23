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
