import '../App.css';

import Menu from './MenuComponents';
import { DISHES } from '../shared/dishes';
import DishDetail from './DishDetailComponent';
import React, {Component} from 'react';
import Header from './HeaderComponent';

class Main extends Component {
constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }
  onDishSelected(dishId) {
    this.setState({ selectedDish: dishId });
}
render() {
return (
    <div>
        <Header />
        <Menu dishes = {this.state.dishes}
        onClick = {(dishId) => this.onDishSelected(dishId)}/>
        <DishDetail dish = {this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
    </div>
  );
}
}

export default Main;
