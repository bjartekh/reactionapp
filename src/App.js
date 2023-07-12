import logo from './turtles.png';
import './App.css';
import Home from './Home.js'
import GetTurtles from './GetTurtles.js';
import AddTurtle from './AddTurtle';
import DeleteTurtle from './DeleteTurtle';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          AWS Turtles CRUD ops
        </p>
        </header>
        <div className="row center">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Home</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#get-turtles-tab-pane" type="button" role="tab" aria-controls="get-turtles-tab-pane" aria-selected="false">Show Turtles</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#add-tab-pane" type="button" role="tab" aria-controls="add-tab-pane" aria-selected="false">Add Turtle</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#delete-tab-pane" type="button" role="tab" aria-controls="delete-tab-pane" aria-selected="false">Delete Turtle</button>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">
            <br />
            <Home />
          </div>
          <div className="tab-pane fade" id="get-turtles-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0">
          <br />
            <GetTurtles />
          </div>
          <div className="tab-pane fade" id="add-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabIndex="0">
          <br />
            <AddTurtle />
          </div>
          <div className="tab-pane fade" id="delete-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabIndex="0">
          <br />
            <DeleteTurtle />
          </div>
        </div>
        </div>
    </div>

  );
}

export default App;
