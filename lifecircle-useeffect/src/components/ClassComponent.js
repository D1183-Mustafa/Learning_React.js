import React from 'react'

class ClassComponent extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {count:0}
  // }
  state = {count:0}
  increase = () =>{
    this.setState({count: this.state.count + 1})
    // this.setState({name:"Mustafa"})

  }
  //! class componentlerde merge edilir state'lerde ama function componentlerde overwrite edilir.


  //! component doğduktan sonra gerçekleşecek eylem. (componentDidMount)

  componentDidMount() {
    console.log("Class Component mounted");
    // this.increase();
  }

  //! componentimiz güncellendikten sonra çalışır.
  componentDidUpdate(prevProps,prevState) {
    console.log("Class component did updated");
    console.log(prevState.count);
    prevState.count !== this.state.count && console.log('Class Component Updated!')
  }

  componentWillUnmount() {
    alert("Class comp will unmount bye bye")
  }
  render() {
    console.log("rendered");
    return (
      <div className="class">
        <h2>Class Component</h2>
        <h3>Count:{this.state.count}</h3>
        {/* <h3>{this.state.name}</h3> */}
        <button onClick={this.increase}>İncrease</button>
      </div>
    )
  }
}

export default ClassComponent
