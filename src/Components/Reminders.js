import React, { Component } from 'react';
import axios from 'axios';
class Reminders extends Component {

    constructor(props){
        super(props);
        this.state = {
            reminders : []
        };

    }


    componentDidMount(){
                axios.get('http://localhost:8080/api/reminders')
                      .then((response) => {
                            console.log(response.data);
                        this.setState({
                            reminders : response.data
                        })

                      })
                      .catch((error) => {
                        console.log(error);
                      });
    }

  render() {
        return (
            <div>
                ({this.state.reminders.map(function(data,index){
                   return(
                    <div className="reminder-name" key="index">
                        {data.description}
                    </div>
                    );
                })})
            </div>
        );
  }
}

export default Reminders;
