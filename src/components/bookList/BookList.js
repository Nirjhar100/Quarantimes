import React from 'react'
import './bookList.css'

const BookList=()=>{
    return(
        <div class = "collection white-text">
            <h4 class ="center">Reading List</h4>
        <ul class="collection ">
            <li class="collection-item avatar black">
            <i class="material-icons circle red">insert_chart</i>
                <span class="title">Title</span>
                <p>First Line <br/>
                Second Line
                </p>
                <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
            </li>
    <li class="collection-item avatar black">
      <i class="material-icons circle">folder</i>
      <span class="title">Title</span>
      <p>First Line <br/>
         Second Line
      </p>
      <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
    </li>
    <li class="collection-item avatar  black">
      <i class="material-icons circle green">insert_chart</i>
      <span class="title">Title</span>
      <p>First Line <br/>
         Second Line
      </p>
      <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
    </li>
    <li class="collection-item avatar  black">
      <i class="material-icons circle red">play_arrow</i>
      <span class="title">Title</span>
      <p>First Line <br/>
         Second Line
      </p>
      <a href="#!" class="secondary-content "><i class="material-icons">grade</i></a>
    </li>
  </ul>
        </div>
    )
}

export default BookList;
