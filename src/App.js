import './App.css';
import './styles/variables.css';
import { Button } from './modules/Button';
import { ItemList } from './modules/ItemList';
import { SearchBox } from './modules/SearchBox';
import { TagFilter } from './modules/TagFilter';


function App() {
  return (
  <div className='AppContainer'>
    <div className='AppWrapper'>
    <SearchBox/>
    <TagFilter/>
    <ItemList>
    </ItemList>
    <Button/>
    </div>
  </div>
  );
}

export default App;
