import React from 'react';

class Bomb extends React.Component {
    
    state = {
        count: 0
    }


    componentDidMount() {
        let interval = setInterval(() => {
            console.log('hi')
            this.setState({
                count: this.state.count + 1
            })
        }, 1000)     
        setTimeout(() => { clearInterval(interval); }, 8000);
    }


    handleCountUp() {
        
        if(this.state.count >= 8) {
            return 'BOOM!!!!';
        }
        else if(this.state.count % 2 === 0) {
            return 'tick';
        } 
        else if(this.state.count % 2 !== 0) {
            return 'tock';   
        } 
        
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render()  {
        return (
          <div>
              <p>{this.handleCountUp()}</p>
          </div>
      )
    }
    
}



export default Bomb

// const milliseconds = 1000
// setInterval(
//   function callback() {
//     // update the state.date in here
//   },
//   milliseconds
// )