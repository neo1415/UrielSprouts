import React from 'react'
import { images } from '../../Constants'

import { ServicesContainer,ServicesH1,Video, ServicesWrapper, ServicesCard, ServicesH2, ServicesP } from './ServiceElements'

const Services = () => {
  return (
    <ServicesContainer id ='services'>
        <ServicesH1><span>How it Works</span></ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
            <Video autoPlay loop src={images.upload} type='video/mp4' />
                <ServicesH2>Send Your Resume </ServicesH2>
                <ServicesP>Upload your CV or your resume document so it can be improved</ServicesP>
            </ServicesCard>
            <ServicesCard>
              <Video autoPlay loop src={images.wait} type='video/mp4' />
                <ServicesH2>Wait For The Results</ServicesH2>
                <ServicesP>Once Uploaded, Your results will get back to you within 48 hours</ServicesP>
            </ServicesCard>
            <ServicesCard>
            <Video autoPlay loop src={images.Email} type='video/mp4' />
                <ServicesH2>Get Your Review</ServicesH2>
                <ServicesP>Your improved resume will be sent to your inbox once it has been reviwed</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services