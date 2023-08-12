import React from 'react'
import HeadBazarProject from '../../../components/SubBazar/HeadBazarProject'
import PurchaseOffer from '../../../components/SubBazar/PurchaseOffer'

function index() {
  return (
    // Secondary market
      <>
      <section className='container mx-auto'>
            <HeadBazarProject/>
            <PurchaseOffer/>
        </section>
      </>
  )
}

export default index