import React from 'react';
// import {Waypoint} from 'react-waypoint';

import Header from 'sections/header';
// import Activity from 'sections/activity';
import Section from 'components/section';
import Footer from 'sections/footer';
import S1 from 'sections/s1';
import S2 from 'sections/s2';
import S3 from 'sections/s3';
import S4 from 'sections/s4';


// let current = null;
// let next = null;
// let last = null;

// function enter (index) {
//   console.log('enter', index);
//   if (last === null) last = index;
//   if (current === null || index === 2) current = index;
//   next = index;
  
//   console.log({last, next, current})
// }

// function leave (index) {
//   console.log('leave', index);
//     if (index === last) {
//       current = next;
//       last = current;
//     }else if (index === 2) {
//       current = last;
//     }
  
//   console.log({last, next, current})
// }

function App() {
  return (
    <div className="App">
      
      <Header/>
      <div className="header_mask"></div>
      <div className="intro-post">
        {/* <img src="/assets/pics/datu.jpg" alt=""></img> */}
      </div>
      {/* <Waypoint onEnter={() => enter(0)} onLeave={() => leave(0)} topOffset="60px" bottomOffset="50%" fireOnRapidScroll={true}>
        <div><Activity/></div>
      </Waypoint>
      <Waypoint onEnter={() => enter(1)} onLeave={() => leave(1)} topOffset="60px" bottomOffset="50%" fireOnRapidScroll={true}>
        <div><Product/></div>
      </Waypoint>
      <Waypoint onEnter={() => enter(2)} onLeave={() => leave(2)} topOffset="50%" bottomOffset="20%" fireOnRapidScroll={true}>
        <div className="test"></div>
      </Waypoint> */}
      <Section t1="产品展示" t2="Products display" sub="北纬 38.5 - 40°的大连附近海域，可能产出世界上最好的海参，牧葵海参全部出自这片海">
        <S1/>
      </Section>
      <Section t2="Instant Sea Cucumber 牧葵既食海参" single={true}>
        <S2/>
      </Section>
      <Section t1="食参建议" t2="Usage Advise" sub="不同人群吃海参所获得的益处是不同的">
        <S3/>
      </Section>
      <Section left={true} t1="关于牧葵" t2="About MUKUI" sub="店面与微笑是我精心展示的表面">
        <S4/>
      </Section>
      <Footer/>
    </div>
  );
}

export default App;
