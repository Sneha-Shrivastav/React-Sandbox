import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import './index.css'


ReactDOM.render(
  <>
    <Card
      imgsrc="https://wallpapercave.com/wp/wp10747035.jpg"
      title="A Netflix Original Series"
      sname="The Vampire Diaries"
      link="https://www.netflix.com/watch/70212837?trackId=255824129"
    />
    <Card
      imgsrc="https://wallpapercave.com/uwp/uwp3670874.jpeg"
      title="A Netflix Original Series"
      sname="Stranger Things"
      link="https://www.netflix.com/watch/80077368?source=35"
    />
    <Card
      imgsrc="https://wallpapercave.com/wp/wp4112166.jpg"
      title="A Netflix Original Series"
      sname="F.R.I.E.N.D.S"
      link="https://www.netflix.com/watch/70273997?trackId=255824129&tctx=0%2C0%2Ccfd1a60d-9d82-402e-9a7a-777483998718-191569218%2Ccfd1a60d-9d82-402e-9a7a-777483998718-191569218%7C2%2Cunknown%2C%2C%2CtitlesResults%2C70153404%2CVideo%3A70273997%2CdetailsPageEpisodePlayButton"
    />
    <Card
      imgsrc="https://wallpapercave.com/wp/wp8268982.jpg"
      title="A Netflix Original Series"
      sname="Mismatched"
      link="https://www.netflix.com/watch/81089276?source=35"
    />
    <Card
      imgsrc="https://wallpapercave.com/wp/wp11784162.jpg"
      title="A Netflix Original Series"
      sname="WEDNESDAY"
      link="https://www.netflix.com/watch/81257204?source=35"
    />
  </>, document.getElementById('root')
);


