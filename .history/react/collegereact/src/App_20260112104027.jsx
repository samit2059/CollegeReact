let App = () =>{
  // return always return only one jsx element
  // user fragment (<></>) or div to return multiple jsx elements
  // always use () to return jsx elements
  return (
    <div>
      <h1>helllo world</h1>
      <h2>helllo world</h2>
      {/* never use capital letter for jsx elements (html like tag) */}
      {/* <B>this is bold text</B> */}
      <h3>helllo world</h3>
      <b className="boldText font-m"> This is a bold text</b>
    </div>
  )
}

export default App;