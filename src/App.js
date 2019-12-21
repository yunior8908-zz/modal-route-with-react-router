import React from 'react';
import { Link, Switch, Route, withRouter } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Modal from './components/modal';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.previousLocation = this.props.location;
  }

  UNSAFE_componentWillUpdate(){
    const {location} = this.props;
    console.log(location);
    if(!(location.state && location.state.modal)){
      this.previousLocation = this.props.location;
    }
  }

  render() {
    const {location} = this.props;
    const isModal = (location.state && location.state.modal && this.previousLocation !== location);
    return (
      <div className="App">
        <div className="menu">
          <Link className='link' to="/" >Home</Link>
          <Link className='link' to="/about" >About</Link>
          <Link className='link' to="/contact" >Contact</Link>
          <Link to={{
            pathname: '/modal/1',
            state: { modal: true }
          }} >Open Modal</Link>
        </div>
        <Switch location={isModal ? this.previousLocation : location}>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/modal/:id' component={Modal} />
          <Route >{'404'}</Route>
        </Switch>
        {isModal && <Route exact path='/modal/:id'>
          <Modal isModal/>
        </Route>}
      </div>
    );
  }
}

export default withRouter(App);
