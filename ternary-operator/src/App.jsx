import React from 'react';
import Netflix from './Netflix';
import Amazon from './Amazon';

const favSeries = 'netflix'

// const FavS = () => {

//   if (favSeries === 'netflix') {
//     return <Netflix />
//   } else {
//     return <Amazon />
//   }
// };



const App = () => (
  <>
    <h1 className='heading_style'>Sneha's top 5 Netflix Pick</h1>
    {(favSeries === 'netflix') ? <Netflix /> : <Amazon />}
  </>
);

export default App 