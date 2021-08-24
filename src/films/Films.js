import React, { Component } from "react";

class Films extends Component {
    // State & Props
    constructor() {
        super();
        this.state = {
          greeting: "Hello", 
          fname: "Justin",
          loaded: false
        };
        console.log(this.state)
    }

    async componentDidMount() {
      let res = await fetch("https://ghibliapi.herokuapp.com/films");
      let json = await res.json()

      this.setState({
        loaded: true,
        results: json
      })
    }

    render() {
        return (
          <div>
            {!this.state.loaded 
            ? "Loading"
            : this.state.results.map((film, index) => <li key={index}>{film.title}</li>)
            }
          </div>
        ) 
    }
}

// Functional component
/* const Films = () => {
  return(
  <>
  This is the films comp
  </>
    )
}
*/

export default Films;