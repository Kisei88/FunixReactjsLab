import '../App.css';
import React, { useState } from 'react';
import Menu from './MenuComponents';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import DishDetail from './DishDetailComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
  }
};

function Main() {
  // const [dishes] = useState(DISHES)
  // const [comments] = useState(COMMENTS)
  // const [promotions] = useState(PROMOTIONS)
  // const [leaders,setLeaders] = useState(LEADERS)

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
          <Route path = '/aboutus' component = {() => <About leaders = {leaders}/>}/>
          <Route exact path = '/menu' component = {() => <Menu dishes = {dishes}/>} />
          <Route path = '/menu/:dishId' component = {DishWithId} />
          <Route path = '/contactus' component = {Contact} />
          <Redirect to ='/home' />
        </Switch>
        <Footer />
    </div>
  );
}

export default withRouter(connect(mapStateToProps)(Main));
