import React from 'react';
import CaseSummary from '../cases/CaseSummary'
import Quarantunes from '../quarantunes/Quarantunes'
import Quarantales from '../quarantales/Quarantales'
import TaskList from '../todo/TaskList'
import BookList from '../bookList/BookList'


function Dashboard() {
  return (
    <div>
      <div className="row">
        <div className="col s12 m12 l3">
            <CaseSummary/>
        </div>
        <div className="col s12 m12 l6 center">
            <Quarantunes/>
        </div>
        <div className="col s12 m12 l3">
        <TaskList/>
        </div>
      </div>
      <BookList/>
      <div className="">
        <Quarantales/>
      </div>
      </div>
  );
}

export default Dashboard;
