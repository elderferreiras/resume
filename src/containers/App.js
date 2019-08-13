import React, {Component} from 'react';
import './App.scss';
import Common from "../components/Common/Common";
import axios from 'axios';

class App extends Component {
    s3Url = 'https://elder-patten-ferreira-resume.s3-us-west-2.amazonaws.com/';
    
    state = {
        ItemId: null
    };

    componentDidMount() {
        axios.get('resume').then(res => {
            if(res.data) {
                this.setState(res.data);
            }
        })
    }

    render() {
        let root = (
            <div id="circle">
                <div className="loader">
                    <div className="loader">
                        <div className="loader">
                            <div className="loader">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

        if(this.state.ItemId) {
            root =  <Common state={this.state}/>;
        }

        return root;
    }
}

export default App;
