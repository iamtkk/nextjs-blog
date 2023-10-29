import Layout from 'components/Layout'
import SubLayout from 'components/SubLayout'

export default function ssg({ time }) {
  return <h1 className="title">{time}</h1>
}

export async function getStaticProps(ctx) {
  console.log('server')
  return {
    props: {
      time: new Date().toISOString(),
    },
  }
}

ssg.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
