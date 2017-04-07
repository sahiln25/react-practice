import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCompleted } from '../actions';
import { completeGoalRef } from '../firebase';

class CompleteGoalList extends Component {
    componentDidMount() {
        completeGoalRef.on('value', snap => {
            let completedGoals = [];
            snap.forEach(completeGoal => {
                const { email, title } = completeGoal.val();
                completedGoals.push({email, title});
            });
            this.props.setCompleted(completedGoals);
        });
    }

    clearCompleted() {
        completeGoalRef.set([]);
    }

    render() {
        return (
            <div>
                {
                    this.props.completedGoals.map((goal, i) => {
                        return (
                            <div key={i}>
                                <strong>{goal.title}</strong> completed by <em>{goal.email}</em>
                            </div>
                        )
                    })
                }
                <button className="btn btn-primary" onClick={() => this.clearCompleted()}>Clear All</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { completedGoals } = state;
    return { completedGoals };
}

export default connect(mapStateToProps, {setCompleted})(CompleteGoalList);