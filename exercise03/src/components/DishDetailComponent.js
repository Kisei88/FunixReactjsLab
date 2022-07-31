import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle,Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from 'react-router-dom';
import AddComment from './Comment(controlledform)';


function RenderDish({dish}) {
    return (
      <div className="col-12 col-md-6">
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  };
 
// function RenderCommentForm (form) {
//   return (
//     <Button outline className = 'fa fa-pencil fa-lg' color = 'success' onClick={() => AddComment()}> Submit Comment </Button>
//   )
// }

function RenderComments({comments}) {
    if (comments != null) {
      return (
        <div className="col-12 col-md-6">
          <h3>Comments</h3>
          <ul className="list-unstyled">
            {comments.map((comment) => {
              return (
                <li key={comment.id}>
                  <p>{comment.comment}</p>
                  <p>
                    -- {comment.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format( new Date(Date.parse(comment.date)))}
                  </p>
                </li>
              );
            })}
          </ul>
          <div className = 'row'>
          {/* <Button className = 'fa fa-pencil fa-lg' color = 'success' onClick = {CommentForm}> Submit Comment </Button> */}
          <AddComment/>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  };

function DishDetail(props) {
    if (props.dish != null) {
      return (
        <div className="container">
           <div className = 'row'>
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to = '/menu'>Menu</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className = 'col-12'>
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
            </div>
          <div className="row">
            <RenderDish dish = {props.dish} />
            <RenderComments comments = {props.comments} />
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
};

export default DishDetail;