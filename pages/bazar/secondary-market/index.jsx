import React from 'react'
import HeadBazarProject from '../../../components/SubBazar/HeadBazarProject'
import PurchaseOffer from '../../../components/SubBazar/PurchaseOffer'
import ReturnLink from '../../../components/ReturnLink'

function index() {
  const market = {

    title: "  بازار ثانویه",

  };
  return (
    // Secondary market
      <>
      <section className='container mx-auto'>
            <div className="bg-white my-10 px-6 py-9 rounded-lg">
            <ReturnLink caption={market.title} />
              <HeadBazarProject />
            </div>

            <PurchaseOffer/>
        </section>
      </>
  )
}

export default index