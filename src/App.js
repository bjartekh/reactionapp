import { useState } from 'react';
import logo from './turtles.png';
import './App.css';
import Home from './Home.js'
import GetTurtles from './GetTurtles.js';
import AddTurtle from './AddTurtle';
import DeleteTurtle from './DeleteTurtle';
import SearchTurtle from './SearchTurtle';

function App() {

  const [activeIndex, setActiveIndex] = useState(0);  


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          AWS Turtles CRUD ops
        </p>
        </header>
        <div className="row center p-3">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Home</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#get-turtles-tab-pane" type="button" role="tab" aria-controls="get-turtles-tab-pane" aria-selected="false" onClick={() => setActiveIndex(1)}>Show Turtles</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#add-tab-pane" type="button" role="tab" aria-controls="add-tab-pane" aria-selected="false" onClick={() => setActiveIndex(2)}>Add Turtle</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#delete-tab-pane" type="button" role="tab" aria-controls="delete-tab-pane" aria-selected="false" onClick={() => setActiveIndex(3)}>Delete Turtle</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#search-tab-pane" type="button" role="tab" aria-controls="delete-tab-pane" aria-selected="false" onClick={() => setActiveIndex(4)}>Search Turtle</button>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">
            <br />
            <Home isActive={activeIndex === 0} />
          </div>
          <div className="tab-pane fade" id="get-turtles-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0">
          <br />
            <GetTurtles isActive={activeIndex === 1} />
          </div>
          <div className="tab-pane fade" id="add-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabIndex="0">
          <br />
            <AddTurtle isActive={activeIndex === 2}/>
          </div>
          <div className="tab-pane fade" id="delete-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabIndex="0">
          <br />
            <DeleteTurtle isActive={activeIndex === 3}/>
          </div>
          <div className="tab-pane fade" id="search-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabIndex="0">
          <br />
            <SearchTurtle isActive={activeIndex === 4}/>
          </div>          
        </div>
        </div>
    </div>

  );
}

export default App;
