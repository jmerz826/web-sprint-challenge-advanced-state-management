import React from 'react';
import Smurf from './Smurf';
import { connect } from 'react-redux';

const SmurfList = (props) => {
    // Only displayed in time between axios call in actions/fetchSmurfs initiation and completion
    if (props.isLoading) {
        return <h1>Loading...</h1>;
    }

     return (
         <div className="listContainer">
             {/* render a Smurf component for each item (smurf) in smurfs state array, passed in via props */}
            {props.smurfs.map(smurf => {
                return (
                    <Smurf smurf={smurf} key={smurf.id} />
                );
            })}
        </div>
     );
}

// Pass in slices of state as props to be used in component.
const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isLoading: state.isLoading
    }
}

export default connect(mapStateToProps)(SmurfList);

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.