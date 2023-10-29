import Layout from 'components/Layout'
import SubLayout from 'components/SubLayout'

const FirstItem = () => {
  return <h1 className="title">First Time</h1>
}

FirstItem.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}

export default FirstItem
