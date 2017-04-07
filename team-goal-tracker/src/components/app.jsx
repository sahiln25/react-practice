import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebaseApp from '../firebase';
import AddGoal from './add-goal';
import GoalList from './goal-list';
import CompleteGoalList from './complete-goal-list';

class App extends Component {

    signOut() {
        firebaseApp.auth().signOut();
    }

    render() {
        return (
            <div style={{margin: '5px'}}>
                <h3>Team Goal Tracker</h3>
                <AddGoal />
                <hr/>
                <h3>Goals</h3>
                <GoalList />
                <hr/>
                <h4>Completed Goals</h4>
                <CompleteGoalList />
                <hr/>
                <button className="btn btn-danger" onClick={() => this.signOut()}>Logout</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps, null)(App);