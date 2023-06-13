function App()
{
  let str =`Hello World`;
  let user = {id : 10 ,name : "Rohit"};
  let user1 = {id : 20 ,name : "Shubham"};
  // object literal 
  return (
    <>
    <h1>{str}</h1>
    <h1>ID : {user.id}</h1>
    <h1>Name : {user.name}</h1>
    <h2>ID : {user1.id}</h2>
    <h2>Name : {user1.name}</h2>
    </>
  );
}

export default App;