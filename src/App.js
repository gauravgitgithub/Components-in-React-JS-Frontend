import React, { Component } from 'react';
import Main_Listicle from './components/Main_Listicle';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div class="main-content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eleifend lacus vel ipsum iaculis luctus. Aenean quis libero eleifend, molestie est ut, hendrerit urna. Nam posuere, lectus ac dictum venenatis, augue lacus ornare mauris, ac vulputate dolor metus id justo. Nullam sit amet nisi sollicitudin, maximus diam non, rutrum urna. Mauris quis pulvinar leo.
       Sed vehicula urna eget augue pulvinar fringilla. Sed non varius elit. Cras porta aliquam nulla, in elementum odio tempor eu. Etiam tincidunt arcu at augue iaculis volutpat. Mauris id elit orci. Fusce non felis nulla.
        <hr ></hr>
        <b>Attending Curators</b><br/>
        <small><b>Maheima Kapoor, John Doe, Meenakshi Kumari</b></small>
        <div class="row col12">
        <a class="waves-effect teal btn-small col s4">Interested</a>
        <a class="waves-effect black btn-small col s4">Attending</a>
        <a class="waves-effect green btn-small col s4">Invite</a>
        
        </div>
        </div>
        <Main_Listicle />  
        
        
      </div>
    );
  }
}

export default App;
