
'use client'
import React, { useEffect, useState } from 'react'
import Div from 'funuicss/ui/div/Div'
import Text from 'funuicss/ui/text/Text'
import Grid from 'funuicss/ui/grid/Grid'
import Col from 'funuicss/ui/grid/Col'
import Section from 'funuicss/ui/specials/Section'
import Button from 'funuicss/ui/button/Button'
import Container from 'funuicss/ui/container/Container'
import RowFlex from 'funuicss/ui/specials/RowFlex'
import FullCenteredPage from 'funuicss/ui/specials/FullCenteredPage'
import { PiArrowRight } from 'react-icons/pi'
import Logo from '@/components/Logo'



export default function Home() {
  const bgs = ["home1.jpg" , "home2.jpg", "home3.jpg"]
  let [count, setcount] = useState(0)

  useEffect(() => {
    setTimeout(() => {

      if(count < (bgs.length - 1)){
       setcount(count + 1)
      }else{
       setcount(0)
      }
      
    
      return () => {
        clearTimeout()
      }
    }, 10000);
  }, [count])
  
  return (
  <div>

<FullCenteredPage style={{width:"100%", minWidth:"100%"}}>

<Grid align='center'>
       <Col sm={12} md={12} lg={7} funcss='padding'>
           <Container>
          <Logo />
           <Section gap={2} />
           <Button
           startIcon={
               <Text 
               text='Anim aute id magna aliqua ad '
               color='dark400'
               article
               />
           }
           text='Our mechanics'
           color='primary'
           bg='dark600'
           rounded
           endIcon={<span><PiArrowRight /></span>}
           outlined
           />
           <Section  gap={2} />
           <Text
           text='On-Demand Mechanic in Your Pocket'
           size='bigger'
           bold
           />
           <Section  gap={2} />
           <Text
           text='Bringing Expert Automotive Assistance to Your Doorstep, Anytime, Anywhere'
           article
           />
            <Section  gap={3} />
            <RowFlex gap={1}>
               <Button 
               text='Our Mechanics'
               raised
               bg='primary'
               />
               <Button 
               text='Sign Up | Login'
               endIcon={<PiArrowRight />}
               color='primary'
               funcss='text-bold'
               />
            </RowFlex>
           </Container>
       </Col>
       <Col sm={12} md={5} lg={5} funcss='hide-medium-down' >
           <Div 
           minHeight='100vh'
           customStyle={{
               backgroundImage:`url('/images/${bgs[count]}')`, 
           backgroundSize:"cover"}} />

       </Col>
      </Grid>
     
   </FullCenteredPage>

   <div className='padding-top-100 padding-bottom-100 dark900 text-dark'>

    <div className="text-center">
      <Text
      text="About Us"
      heading="h1"
      block
      />
      <Text
      text="A Happy car, makes a happy driver"
      block
      />
    </div>

    <Section gap={2}/>
    <Div padding='2rem 1.5rem'>
<Grid>

<Col sm={12} md={4} lg={4} funcss='padding-20  width-400-max '>
  <RowFlex alignItems='flex-start' gap={1}>
      <Div>
      <img src='/components_images/icon-delivery.svg' className='width-80'/>
      </Div>
      <Div>
  <Text 
  text='FAST DELIVERY'
  bold
  color='primary'
  />
  <Section />
  <Text 
  text={"It's not actually free we just price it into the products. Someone's paying for it, and it's not us."}
  color='dark400'
  article

  />
      </Div>
  </RowFlex>


</Col>

<Col sm={12} md={4} lg={4} funcss='padding-20  width-400-max '> 
<RowFlex alignItems='flex-start' gap={1}>
      <Div>
  <img src='/comp/delivery.jpg' className='width-80'/>
  </Div>
      <Div>
  <Text 
  text='24/7 CUSTOMER SUPPORT'
  bold
  color='primary'
  />
  <Section />
  <Text 
  text={"Our AI chat widget is powered by a naive series of if/else statements. Guaranteed to irritate."}
  color='dark400'
  article
  />
  </Div>
  </RowFlex>
</Col>
<Col sm={12} md={4} lg={4} funcss='padding-20  width-400-max '>
<RowFlex alignItems='flex-start' gap={1}>
      <Div>
  <img src='/comp/service.png' className='width-80'/>
  </Div>
      <Div>
  <Text 
  text='FAST SERVICE'
  bold
  color='primary'
  />
  <Section />
  <Text 
  text={"Look how fast that cart is going. What does this mean for the actual experience? I don't know."}
  color='dark400'
  article
  />
  </Div>
  </RowFlex>
</Col>
</Grid>
</Div>

   </div>
 
  </div>
  )
}
