import { useState } from 'react';
import './App.css';
import Data from './Data';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = Data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <div className='Table'>
        <h1>Search App</h1>
        <form action="/action_page.php">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
        <br></br>
        <table>
          <tr>
            <th>Number</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default App;
