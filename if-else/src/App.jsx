import React from 'react';
import Netflix from './Netflix';
import Amazon from './Amazon';

const favSeries = 'amazon'

const FavS = () => {

  if (favSeries === 'netflix') {
    return <Netflix />
  } else {
    return <Amazon />
  }
};



const App = () => (
  <>
    <h1 className='heading_style'>Sneha's top 5 Netflix Pick</h1>
    <FavS />
    {/* {Sdata.map((val) => {
      return (
        <Card
          key={val.id}
          imgsrc={val.imgsrc}
          title={val.title}
          sname={val.sname}
          link={val.link}
        />
      )
    })} */}
  </>
);

export default App 