import React, { useEffect } from "react";

import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { connect } from "react-redux";

// fetchSmurfs thunk action. Passed into App via connect()
import { fetchSmurfs } from "./actions";


const App = (props) => {

  // Fetch smurfs from API via action invocation upon App's mount
  useEffect(() => {
    props.fetchSmurfs();
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <SmurfList/>
        <AddForm/>
      </main>
    </div>
  );
}

// Just returns state. No prop drilling necessary
const mapStateToProps = state => {
  return {
    state
  }
}

// Passes fetchSmurfs function into the App. Made available via props.
export default connect(mapStateToProps, {fetchSmurfs})(App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component mounts.