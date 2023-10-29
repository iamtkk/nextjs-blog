import React, { useEffect, useState } from 'react'
import Layout from 'components/Layout'
import SubLayout from 'components/SubLayout'

const CSR = () => {
  const [time, setTime] = useState()

  useEffect(() => {
    console.log('client')
    setTime(new Date().toISOString())
  }, [])

  return (
    <>
      <h1 className="title">{time}</h1>
    </>
  )
}

export default CSR

CSR.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
