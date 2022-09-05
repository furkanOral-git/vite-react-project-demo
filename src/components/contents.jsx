import React from 'react';
import "../public/contents.scss"
import products from "./data/products.json";
import instagram from "./data/instagram.json";
import Banner from "./banner";
import Slider, { SliderItem } from "./slider";
import Product from "./product";

export default function Contents() {
  return (
    <div className='contents'>
      <Banner />
      <Sections />
    </div>
  )
}


function Sections() {


  return (
    <>
      <Section>
        <SectionItem>
          <img className='section__item-img' src="https://cdn.shopify.com/s/files/1/0541/0272/0705/files/22.2-D4-Website-AugustHomepage-SentrySolar-Tier2A-Desktop-V01_1920x.progressive.jpg?v=1658769399" alt="" />
          <div className="section__item-container">
            <h3 className="section__item-head">All Watches</h3>
            <button className="section__item-shop">Shop Men's</button>
            <button style={{ marginLeft: "25px" }} className="section__item-shop">Shop Women's</button>
          </div>
        </SectionItem>
        <SectionItem>
          <img className='section__item-img' src="https://cdn.shopify.com/s/files/1/0541/0272/0705/files/22.2-D4-Website-AugustHomepage-SentrySolar-Tier2B-Desktop-V01_1920x.progressive.jpg?v=1658769455" alt="" srcset="" />
          <div className='section__item-container'>
            <h3 className="section__item-head">Bags & Backpacks</h3>
            <button className="section__item-shop">Shop Now</button>
          </div>
        </SectionItem>
        <SectionItem>
          <img className='section__item-img' src="https://cdn.shopify.com/s/files/1/0541/0272/0705/files/22.2-D4-Website-AugustHomepage-SentrySolar-Tier2C-Desktop-V01_1920x.progressive.jpg?v=1658769544" alt="" />
          <div className='section__item-container'>
            <h3 className="section__item-head">Headwear</h3>
            <button className="section__item-shop">Shop Now</button>
          </div>
        </SectionItem>
      </Section>
      <Section>
        <Slider length={products.length} title="You Might Like" btnName="Shop All" >
          {products.map((p, index) => <SliderItem key={index} index={index}><Product product={p} /></SliderItem>)}
        </Slider>
      </Section>
      <Section>
        <div className='panel'>
          <img className="panel__img section__item-img" src="https://cdn.shopify.com/s/files/1/0541/0272/0705/files/22.2-D4-Website-AugustHomepage-SentrySolar-Tier4A-Desktop-V01_1920x.progressive.jpg?v=1658958585" alt="" />
          <div className="panel__item-container section__item-container">
            <h3 className="panel__item-head section__item-head ">Powered by Light</h3>
            <button className="panel__item-shop section__item-shop ">Shop Solar Watches</button>
          </div>
        </div>
        <div className='panel'>
          <img className="section__item-img" src="https://cdn.shopify.com/s/files/1/0541/0272/0705/files/22.2-D4-Website-AugustHomepage-SentrySolar-Tier4B-Desktop-V01_1920x.progressive.jpg?v=1658769843" alt="" srcset="" />
          <div className="panel__item-container section__item-container">
            <h3 className="panel__item-head section__item-head">Vibrant Acetate Colors</h3>
            <button className="panel__item-shop section__item-shop">Shop Now</button>
          </div>
        </div>
      </Section>
      <Section>
        <div className='section__followOnInsta'>
          <h3 className="section__hashtag">#BIXON</h3>
          <h5 className='section__instagram'>Get featured by showing us how you #bixon on Instagram</h5>
          <button className='banner__advertising-btn section__instagramBtn '>Shop Instagram</button>
        </div>
      </Section>
      <Slider length={4} title="">
        
      </Slider>
    </>

  )
}
function Section(props) {


  return (
    <div className="section contents__item">
      {props.children}
    </div>
  )

}
function SectionItem(props) {

  return (
    <div className="section__item">
      {props.children}
    </div>
  )
}


