
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
import Circle from 'funuicss/ui/specials/Circle'
import { PiArrowRight } from 'react-icons/pi'
import Logo from '@/components/Logo'
import Input from 'funuicss/ui/input/Input'


import {PiStarDuotone} from 'react-icons/pi'
import List from 'funuicss/ui/list/List'
import ListItem from 'funuicss/ui/list/Item'

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
      text="How Does It Work?"
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
<Grid funcss='central'>

<Col sm={12} md={4} lg={4} funcss='padding-20'>
      <img src='/comp/quote.png' className='fit'/>
</Col>
<Col sm={12} md={6} lg={6} funcss='padding-20'>
<Div>
  <RowFlex gap={1} >
    <Circle raised size={3.3} bg="gradient">
    <Text
    text="1"
    block
    heading={"h4"}
    />
    </Circle>
  <Text 
  text='Qoute -'
  heading="h2"
  bold
  color='primary'
  block
  />
  </RowFlex>

  <Section gap={2} />
  <Text 
  text={"You get a quick response for pricing. Our mechanics already know the value of the service. That ensures that there will be no need for negotiations or any last minute surprises. In the case that we feel there is any additional work that needs to be done or any additional parts that need replacement, we will let you know.."}
  color='dark400'
  article

  />
      </Div>
</Col>

<Col sm={12} md={6} lg={6} funcss='padding-20'>
<Div>
  <RowFlex gap={1} >
    <Circle raised size={3.3} bg="gradient">
    <Text
    text="2"
    block
    heading={"h4"}
    />
    </Circle>
  <Text 
  text='SCHEDULE YOUR APPOINTMENT -'
  heading="h2"
  bold
  color='primary'
  block
  />
  </RowFlex>

  <Section gap={2} />
  <Text 
  text={"Schedule your appointment and we will get you one of our carefully selected certified mechanics to take care of your car. You can view mechanic’s previous ratings from other valued customers as well. We have mechanics available 7 days a week from 7am to 7pm and you can easily request one from our website or mobile app."}
  color='dark400'
  article

  />
      </Div>
</Col>
<Col sm={12} md={4} lg={4} funcss='padding-20'>
      <img src='/comp/appointment.png' className='fit'/>
</Col>
<Col sm={12} md={4} lg={4} funcss='padding-20'>
      <img src='/comp/car.png' className='fit'/>
</Col>
<Col sm={12} md={6} lg={6} funcss='padding-20'>
<Div>
  <RowFlex gap={1} >
    <Circle raised size={3.3} bg="success">
    <Text
    text="3"
    block
    heading={"h4"}
    />
    </Circle>
  <Text 
  text='Get Your Car Fixed -'
  heading="h2"
  bold
  color='primary'
  block
  />
  </RowFlex>

  <Section gap={2} />
  <Text 
  text={"Just exactly how it sounds. We get the job done."}
  color='dark400'
  article

  />
      </Div>
</Col>

</Grid>
</Div>

   </div>

   <div>
   <Div margin="2rem 0" padding='2rem'>
<Div maxWidth='700px' funcss='center' >

<Text
 text='Our Reviews' 
 heading='h5'
 bold
 color='dark200'
 block
 />
 <Text
 text='If you’ve used this product, share your thoughts with other customers' 
 color='dark400'
 block
 />
<Section gap={2} />
         <List>
             <ListItem funcss='hr padding-bottom-50 padding-top-50'>
                 <RowFlex gap={1} alignItems='flex-start'>
                     <img src="/users/deo.jpg" className='width-50 height-50 circle raised' alt="" />
                     <Div>
                         <Text
                         text='John Deo'
                         block
                         />
                         <Text
                         text='September 3, 2090'
                         block 
                         size='small'
                         bold
                         color='primary'
                         />
                     <RowFlex funcss='section' >
                     <span className='text-primary'><PiStarDuotone size={20} /></span>
                     <span className='text-primary'><PiStarDuotone size={20} /></span>
                     <span className='text-primary'><PiStarDuotone size={20} /></span>
                     <span className='text-primary'><PiStarDuotone size={20} /></span>
                     <span className='text-dark500'><PiStarDuotone size={20} /></span>
                     </RowFlex>
                     <Section />
                 <Text
               text={`enjoyed Acheampong's services. He made me understand my car better. Now I feel safe on the road as I know I am in good hands.`}
                 color='dark400'
                 article
                 />
                     </Div>
                 </RowFlex>
              
             </ListItem>
             <ListItem funcss='hr padding-bottom-50 padding-top-50'>
                 <RowFlex gap={1} alignItems='flex-start'>
                     <img src="/users/john.jpg" className='width-50 height-50 circle raised' alt="" />
                     <Div>
                         <Text
                         text='John Bobby'
                         block
                         />
                         <Text
                         text='September 3, 2090'
                         block 
                         size='small'
                         bold
                         color='primary'
                         />
                     <RowFlex funcss='section' >
                     <span className='text-primary'><PiStarDuotone size={20} /></span>
                     <span className='text-primary'><PiStarDuotone size={20} /></span>
                     <span className='text-primary'><PiStarDuotone size={20} /></span>
                     <span className='text-primary'><PiStarDuotone size={20} /></span>
                     <span className='text-dark500'><PiStarDuotone size={20} /></span>
                     </RowFlex>
                     <Section />
                 <Text
                text={`enjoyed Acheampong's services. He made me understand my car better. Now I feel safe on the road as I know I am in good hands.`}
                 color='dark400'
                 article
                 />
                     </Div>
                 </RowFlex>
              
             </ListItem>
             <ListItem funcss='hr padding-bottom-50 padding-top-50'>
                 <RowFlex gap={1} alignItems='flex-start'>
                     <img src="/users/jane.jpg" className='width-50 height-50 circle raised' alt="" />
                     <Div>
                         <Text
                         text='Emily Jane Deo'
                         block
                         />
                         <Text
                         text='September 3, 2090'
                         block 
                         size='small'
                         bold
                         color='primary'
                         />
                     <RowFlex funcss='section' >
                     <span className='text-primary'><PiStarDuotone size={20} /></span>
                     <span className='text-primary'><PiStarDuotone size={20} /></span>
                     <span className='text-primary'><PiStarDuotone size={20} /></span>
                     <span className='text-primary'><PiStarDuotone size={20} /></span>
                     <span className='text-dark500'><PiStarDuotone size={20} /></span>
                     </RowFlex>
                     <Section />
                 <Text
                 text={`enjoyed Acheampong's services. He made me understand my car better. Now I feel safe on the road as I know I am in good hands.`}
                 color='dark400'
                 article
                 />
                     </Div>
                 </RowFlex>
              
             </ListItem>


         </List>
   
 </Div>


</Div>
   </div>
   <div className='padding-top-100 padding-bottom-100 dark900 text-dark'>

    <div className="text-center width-600-max center">
      <Text
      text="We service most models"
      heading="h1"
      block
      />
      <Text
      text="We have mechanics that are specialists and we also have mechanics for general car problems. Either way, we have a wide range of car makes and models that we service."
      block
      article
      />
    </div>

    <Section gap={2}/>
    <Div padding='2rem 1.5rem'>
<Grid>

<Col sm={12} md={6} lg={3} funcss='padding-20 text-center'>
<img src='/cars/bmw.jpg' className='width-100 circle'/>
</Col>
<Col sm={12} md={6} lg={3} funcss='padding-20 text-center'>
<img src='/cars/ford.jpg' className='width-100 circle'/>
</Col>
<Col sm={12} md={6} lg={3} funcss='padding-20 text-center'>
<img src='/cars/jeep.jpg' className='width-100 circle'/>
</Col>
<Col sm={12} md={6} lg={3} funcss='padding-20 text-center'>
<img src='/cars/nissan.jpg' className='width-100 circle'/>
</Col>

<Col sm={12} md={6} lg={3} funcss='padding-20 text-center'>
<img src='/cars/acura.jpg' className='width-100 circle'/>
</Col>
<Col sm={12} md={6} lg={3} funcss='padding-20 text-center'>
<img src='/cars/audi.jpg' className='width-100 circle'/>
</Col>
<Col sm={12} md={6} lg={3} funcss='padding-20 text-center'>
<img src='/cars/volks.jpg' className='width-100 circle'/>
</Col>
<Col sm={12} md={6} lg={3} funcss='padding-20 text-center'>
<img src='/cars/toyota.jpg' className='width-100 circle'/>
</Col>


</Grid>
</Div>

   </div>
 
   <div className='padding-top-100 padding-bottom-100 text-dark dark800'>



    <Section gap={2}/>
    <Div margin="5rem 0">
<Container >
    <Grid>
        <Col sm={12} md={5} lg={5} funcss="padding">
        <Text
        text="Book Appointment"
        bold
        heading={"h3"}
        block
        />
        <Section />
        <Text
        article
        text="This information will be displayed publicly so be careful what you share."
        block
        color="dark400"
        />
        </Col>
        <Col sm={12} md={7} lg={7} funcss="padding">
      <Section gap={1}>
      <RowFlex gap={2}>
        <Col >
        <Text text="First Name" block bold size="small" color="primary" funcss="margin-bottom-10" />
        <Input fullWidth bordered />
        </Col>
        <Col  > 
        <Text text="Last Name" block bold size="small" color="primary" funcss="margin-bottom-10" />
        <Input fullWidth bordered />
        </Col>
      </RowFlex>
      </Section>
      <Section gap={1}>
        <Text text="Email" block bold size="small" color="primary" funcss="margin-bottom-10" />
        <Input type="email" fullWidth bordered />
      </Section>
      <Section gap={1}>
        <Text text="About" block bold size="small" color="primary" funcss="margin-bottom-10" />
        <Input multiline rows={3} fullWidth bordered />
      </Section>
      <Section gap={1}>
       <Button
       text="Submit"
       raised 
       bg="primary"
       />
      </Section>
        </Col>
    </Grid>
</Container>
</Div>

   </div>

   <div>
   <Div margin="5rem 0">
<Grid>
    <Col sm={12} md={5} lg={5} funcss="padding ">
<Container >
    <Text
    text="Get in touch"
    bold
    block
    heading='h3'
    />
    <Section />
    <Text
    text="Proin volutpat consequat porttitor cras nullam gravida at. Orci molestie a eu arcu. Sed ut tincidunt integer elementum id sem. Arcu sed malesuada et magna."
    block
    color="dark400"
    article
    />
</Container>
    </Col>
    <Col sm={12} md={7} lg={7} funcss="padding"> 
     <Grid>
        <Col sm={12} md={6} lg={6} funcss='padding'>
            <Div funcss='dark900 padding-30 round-edge '>
                <Text
                text='Collaborate'
                color='dark'
                bold 
                />
                <Section gap={1}/>
                <Text 
                text='collaborate@example.com'
                color='primary'
                block
                />
             <Section />
                <Text 
                text='+1 (555) 905-2345'
                color='dark300'
                block
                />
            </Div>
        </Col>
        <Col sm={12} md={6} lg={6} funcss='padding'>
            <Div funcss='dark900 padding-30 round-edge '>
                <Text
                text='Press'
                color='dark'
                bold 
                />
                <Section gap={1}/>
                <Text 
                text='Press@example.com'
                color='primary'
                block
                />
             <Section />
                <Text 
                text='+1 (555) 905-2345'
                color='dark300'
                block
                />
            </Div>
        </Col>
        <Col sm={12} md={6} lg={6} funcss='padding'>
            <Div funcss='dark900 padding-30 round-edge '>
                <Text
                text='Join our join'
                color='dark'
                bold 
                />
                <Section gap={1}/>
                <Text 
                text='careers@example.com'
                color='primary'
                block
                />
             <Section />
                <Text 
                text='+1 (555) 905-2345'
                color='dark300'
                block
                />
            </Div>
        </Col>
        <Col sm={12} md={6} lg={6} funcss='padding'>
            <Div funcss='dark900 padding-30 round-edge '>
                <Text
                text='Say Hello'
                color='dark'
                bold 
                />
                <Section gap={1}/>
                <Text 
                text='hello@example.com'
                color='primary'
                block
                />
             <Section />
                <Text 
                text='+1 (555) 905-2345'
                color='dark300'
                block
                />
            </Div>
        </Col>
        
     </Grid>
    </Col>
</Grid>
</Div>
   </div>
 
  </div>
  )
}
