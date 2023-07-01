
import './App.css';
import ListBox from './component/ListBox';
import Searchbar from './component/SearchBar';

function App() {

  const dataPromise=async(query,signal)=>await fetch(`https://swapi.dev/api/people/?search=${query}`,{signal})

  const transformData=(data)=>data.results
  return (
    <div className="wrapper">
     <Searchbar
      id="personName"
      name="personName"
      placeholder="Enter person Name"
      label="Enter Person Name"
      maxItems={5}
      listBox={(lists)=><ListBox items={lists}/>}
      transformData={transformData}
      promise={dataPromise}
      debounceWait={400}
     />
    </div>
  );
}

export default App;
