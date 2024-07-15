
import React  from 'react'
class Son extends React.PureComponent {

    state = {
        mesSon: "son"
    }

    f(){
        console.log('1111')
    }


    render() {
        return <div className="Son">
            {this.state.mesSon}
        </div>
    }
    componentDidMount() {
        console.log('componentDidMount')
    }

}

export default Son;
