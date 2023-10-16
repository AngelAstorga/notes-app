import './App.css';
import './styles/variables.css';
import { ItemList } from './modules/ItemList';
import { SearchBox } from './modules/SearchBox';
import { TagFilter } from './modules/TagFilter';
import { CreateNote } from './modules/CreateNote';


function App() {
  return (
  <div className='AppContainer'>
    <div className='AppWrapper'>
    <SearchBox/>
    <TagFilter/>
    <ItemList/>
    <CreateNote/>
    </div>
  </div>
  );
}

export default App;
