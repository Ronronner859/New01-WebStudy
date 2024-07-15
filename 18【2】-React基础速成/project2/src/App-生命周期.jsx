import logo from './logo.svg';
import './App.css';
import React  from 'react'
class App extends React.Component {
   constructor(props) {
       super(props);
        this.state ={
            mes:"father"
        }
       console.log('constructor')
   }
   static getDerivedStateFromProps(nextProps) {
       console.log('getDerivedStateFromProps')
       return null
   }
   shouldComponentUpdate(nextProps, nextState, nextContext) {
       console.log('shouldComponentUpdate')
        return true
   }

    render() {
            console.log('render')
            return <div className="App">
            </div>
        }
    componentDidMount() {
       console.log('componentDidMount')
    }

}

export default App;
