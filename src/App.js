import './App.css';
import './styles/variables.css';
import { ItemList } from './modules/ItemList';
import { SearchBox } from './modules/SearchBox';
import { TagFilter } from './modules/TagFilter';
import { CreateNote } from './modules/CreateNote';
import { ModalCreateNote } from './modals/ModalCreateNote';


function App() {
  return (
  <div className='AppContainer'>
    <div className='AppWrapper'>
    <SearchBox type="Search" text="Search"/>
    <TagFilter/>
    <ItemList/>    
    <CreateNote/>
    <ModalCreateNote/>  
    </div>
  </div>
  );
}

export default App;
