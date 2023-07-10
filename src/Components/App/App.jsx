import Person from "../Persons/Person";

const App = () => {
const changeFirstName=(e)=>{
  console.log(e.target.value);
}
const changeLastName=(e)=>{
  console.log(e.target.value);
}
  return (
    <div className=" col-6 offset-3 p-5 bg-dark text-white mt-2">
      <Person changeFirstName={changeFirstName}  changeLastName={changeLastName}/>
    </div>
  );
};

export default App;
