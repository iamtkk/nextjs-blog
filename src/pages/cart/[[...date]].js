import Layout from 'components/Layout'
import SubLayout from 'components/SubLayout'
import Link from 'next/link'
import { useRouter } from 'next/router'

const CartDateSlug = () => {
  const router = useRouter()
  const { date } = router.query
  return (
    <>
      <h1 className="title">Cart Date Slug {JSON.stringify(date)}</h1>
      <Link href="/cart/2023/10/29" legacyBehavior>
        <a>2023년10월29일</a>
      </Link>
      <br />
      <button onClick={() => router.push('/cart/2023/10/28')}>
        2023년10월28일
      </button>
    </>
  )
}

CartDateSlug.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}

export default CartDateSlug
