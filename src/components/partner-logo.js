import React from 'react'

const PartnerLogo = ({partner}) => {
  return (
    <>
      <img src={`../../images/partners/${partner.logo}`} alt={partner.title} />
    </>
  )
}

export default PartnerLogo
