import '../App.css';
import React, {Component, useState} from 'react';
import Menu from './MenuComponents';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import DishDetail from './DishDetailComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

function Main() {
  const [dishes] = useState(DISHES)
  const [comments] = useState(COMMENTS)
  const [promotions] = useState(PROMOTIONS)
  const [leaders] = useState(LEADERS)

// class Main extends Component {
// constructor(props) {
//     super(props);
//     this.state = {
//       dishes: DISHES,
//       comments: COMMENTS,
//       promotions: PROMOTIONS,
//       leaders:LEADERS,
//     };
//   }
// render() {
  const HomePage = () => {
    return (
      <Home 
      dish = {dishes.filter((dish) => dish.featured)[0]}

      promotion = {promotions.filter((promo) => promo.featured)[0]}

      leader = {leaders.filter((leader) => leader.featured)[0]}
      />
    )
  }

  const DishWithId = ({match}) => {
    return(
      <DishDetail 
      dish = {dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}

      comments = {comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
      />
    )
  }
return (
    <div>
        <Header />
        <Switch>
          <Route path = '/home' component = {HomePage}/>
          <Route exact path = '/menu' component = {() => <Menu dishes = {dishes}/>} />
          <Route path = '/menu/:dishId' component = {DishWithId} />
          <Route path = '/contactus' component = {Contact} />
          <Redirect to ='/home' />
        </Switch>
        <Footer />
    </div>
  );
}
// }

export default Main;
