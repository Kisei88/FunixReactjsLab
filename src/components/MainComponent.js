import '../App.css';
import React, {Component} from 'react';
import Menu from './MenuComponents';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import { DISHES } from '../shared/dishes';
import DishDetail from './DishDetailComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
    };
  }
render() {
  const HomePage = () => {
    return (
      <Home/>
    )
  }
return (
    <div>
        <Header />
        <Switch>
          <Route path = '/home' component = {HomePage}/>
          <Route exact path = '/menu' component = {() => <Menu dishes = {this.state.dishes}/>} />
          <Route path = '/contactus' component = {Contact} />
          <Redirect to ='/home' />
        </Switch>
        <Footer />
    </div>
  );
}
}

export default Main;
