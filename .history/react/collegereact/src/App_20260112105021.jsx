let App = () =>{
  // return always return only one jsx element
  // user fragment (<></>) or div to return multiple jsx elements
  // always use () to return jsx elements
  let count =100;
  return (
    <div className="p-6 bg-slate-100 min-h-screen">
      <h1 className="text-3xl font-semibold">helllo world</h1>
      <h2 className="text-2xl text-slate-700">helllo world</h2>
      {/* never use capital letter for jsx elements (html like tag) */}
      {/* <B>this is bold text</B> */}
      <h3>helllo world</h3>
      <b className="font-bold text-indigo-600"> This is a bold text</b>
      <h4>total amount : {20+20}</h4>
      <p>Even or odd : {45%2==0?"Even":"Odd"}</p>
      <h3>Count value ={count}</h3>
    </div>
  )
}

export default App;