import logo from './logo.svg';
import './App.css';
import React  from 'react'
class App extends React.PureComponent {
    state = {
        inputValue :""
    }
    render() {
        return <div className="App">
            {this.state.inputValue }
            <input value={this.state.inputValue} onInput={(e)=>{
                this.setState({
                    inputValue:e.target.value
                })
            }}/>
        </div>

    }

}

export default App;
