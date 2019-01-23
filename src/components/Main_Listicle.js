import React, { Component } from 'react';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import '../component1.css';

class Main_Listicle extends Component {
  render() {
    return (
      <div className="main_listicle">
      
        <div class="col s6 m7">
        <div class="row ">
          <div class="card">
          <div class="title-box">
          Darjeeling Hot Momos <img class="bookmark" src={require('../img/bookmark_border.png')} alt="Bookmark"></img>
          <div class="sub-title">
          Koramangala, Bangalore
          </div>
          <div class="info">
          <italic>"Streets are an integral part of how a city and its culture has evolved."</italic>
          </div>
          <div class="specials">
           <ul>Must Try Dishes</ul>
           <a href="#"> Filter Coffee </a> , Mini Idli, Keer Vada , Sabundana Vada, <a href="#">Special Kozhukhattai </a>
          </div>
          
          
          </div>
          <span class="card-title"></span>
            <div class="card-image">
                  <img src={require('../img/momos.jpg')} alt="Momos"></img>
                  
            </div>
            <div class="card-content">
              <p>This stall looks like any other stall but has a lot more to offer. Sangeeta servers a wide variety of momos with
                different stuffings. Although, there is only one non-veg momo (chicken), which is also great, this stall is a treat for 
                vegetarians. There are four kinds of veg-momos with different stuffing, in each, to add to that,
                they add natural colouring from vegetables to the dough to make them more appealing and nutrious.  </p>
            </div>
            
          </div>
        </div>
        </div>
        
      </div>
    );
  }
}

export default Main_Listicle;