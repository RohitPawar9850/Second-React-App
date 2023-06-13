//JSX :: return HTML
//Syntax : <h1>Hello</h1>
// Syntax : ( <h1>Hello</h1> )

function App()
{
  let jsx1 = <h1>Hello Universe</h1>

  //multilinear with required parameter
  let jsx2= (
    <>
      <h1>Hello World</h1>
      <p>
        <h2>I am Rohit Pawar</h2>
        <h2>I am From Shevgaon.</h2>
      </p>
    </>
  );
  return jsx2;
}
export default App;
// new function