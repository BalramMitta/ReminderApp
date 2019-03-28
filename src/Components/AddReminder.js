import React, { Component } from 'react';
import './Reminders.css';

class AddReminder extends Component {

    constructor(props){
        super(props);
        this.state = {
            reminders : this.getReminders();
        };

    }


  render() {

        return (
            <div>
            <form>
               <input type="text" placeholder="Description" />
                <input type="date" />
                <select id="time">
                </select>
               </form>



            </div>
        );
  }
}

export default AddReminder;
