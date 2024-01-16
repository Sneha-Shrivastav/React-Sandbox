import React from 'react'
import ReactDom from 'react-dom'

ReactDom.render(
  <>
    <h1>Sneha's Netflix Pick</h1>
    <p>List of 5 best Series</p>
    <ol>
      <li>The Vampire Diaries</li>
      <li>Stranger Things</li>
      <li>F.r.i.e.n.d.s</li>
      <li>Mismatched</li>
      <li>Wednesday</li>
    </ol>
  </>,
  document.getElementById("root")
);