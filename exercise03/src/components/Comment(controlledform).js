import React, { Component, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, FormFeedback, Label, Input, Col } from 'reactstrap';


// class AddComment extends Component {

//     constructor (props) {
//         super(props);
//         this.state = {
//             rating: '5',
//             yourname: '',
//             comment: '',
//             isModalOpen: false,
//             touched: {
//                 yourname: false,
//             }
//         };
//         // this.toggleModal = this.toggleModal.bind(this);
//         // this.handleBlur = this.handleBlur.bind(this);
//         // this.handleInputChange = this.handleInputChange.bind(this);

//     }
       
//     toggleModal = () => {
//         this.setState({isModalOpen: !this.state.isModalOpen});
//     }
//     handleSubmit = (event) => {
//         //this.props.addComment(this.state)
//         this.toggleModal();
//         alert('Rating: ' + this.rating.value + ' Your Name: ' + this.yourName.value + ' Comment: ' + this.comment.value);
//         event.preventDefault();
//     }
//     handleInputChange =(event) => {
//         const target = event.target;
//         const value = target.type === 'checkbox' ? target.checked : target.value;
//         const name = target.name;
//         this.setState = {
//             [name]: value
//         }
//     }
//     handleBlur = (field) => (evt) => {
//         this.setState({
//             touched: {...this.state.touched, [field]: true }
//         });
//     };
//     validate(yourname) {
//         const errors = {
//             yourname: ''
//         };
//         if (this.state.touched.yourname && yourname.length <2)
//             errors.yourname = 'Your name should be atleast 2 characters';
//         else if (this.state.touched.yourname && yourname.length >= 10)
//             errors.yourname = 'Your name should be less than 10 characters';
//         return errors    

//     }

//     render(){
//         const errors = this.validate(this.state.yourname)
//         return (
//             <div className = 'container'>
//                 <div className = 'row'>
//                 <Button outline onClick = {this.toggleModal} color = 'success'>
//                     <span className = 'fa fa-pencil fa-lg'/> Submit Comment
//                 </Button>
//                 </div>
//                 <Modal isOpen = {this.isModalOpen} toggle = {this.toggleModal}>
//                     <ModalHeader toggle = {this.toggleModal}>
//                         Submit Comment
//                     </ModalHeader>
//                     <ModalBody>
//                     <Form onSubmit={() => this.handleSubmit()}>
//                             <FormGroup row>
//                                 <Label htmlFor='rating' md = {2}>Rating</Label>
//                                 <Col md = {10}>
//                                     <Input type = 'select' id = 'rating' name = 'rating' value = {this.state.rating} 
//                                          onChange = {this.handleInputChange}>
//                                             <option>1</option>
//                                             <option>2</option>
//                                             <option>3</option>
//                                             <option>4</option>
//                                             <option>5</option>
//                                     </Input>
//                                 </Col>
//                             </FormGroup>
//                             <FormGroup row>
//                                 <Label htmlFor='yourname' md = {2}>FirstName</Label>
//                                 <Col md = {10}>
//                                     <Input type = 'text' id = 'yourname' name = 'yourname' placeholder = 'Your Name' value = {this.state.yourname} valid={errors.yourname === ''}
//                                         invalid={errors.yourname !== ''}
//                                         onBlur={this.handleBlur('yourname')} onChange = {this.handleInputChange}/>
//                                     <FormFeedback>{errors.yourname}</FormFeedback>
//                                 </Col>
//                             </FormGroup>
//                             <FormGroup check>
//                                 <Label check>
//                                     <Input type = 'textarea' id = 'comment' name = 'comment' value = {this.state.comment} onChange = {this.handleInputChange}/> Comment
//                                 </Label>
//                             </FormGroup>
//                             <Button type = 'submit' value = 'submit' color = 'primary'>Submit</Button>
//                         </Form>

//                     </ModalBody>
//                 </Modal>
//             </div>
//         )
//     }
// }
export default function AddComment() {
    const [formValue, setFormValue] = useState ({
        rating: '5',
        yourname: '',
        comment: '',
    })
    const {rating, yourname, comment} = formValue
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [touched, setTouched] = useState({yourname: false})
        
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }
    const handleSubmit = (event) => {
        let {rating, yourname, comment} = event.target
        toggleModal();
        alert('Rating: ' + rating.value + ' Your Name: ' + yourname.value + ' Comment: ' + comment.value);
        console.log('Rating: ' + rating.value + ' Your Name: ' + yourname.value + ' Comment: ' + comment.value);
        event.preventDefault();
    }
    const handleInputChange = (event) => {
        const {name, value} = event.target
        setFormValue((prevState) => {
            return {
                prevState,
                [name]:value,
            };}) 
    }
    const closeModal = () => {
        setFormValue({
            ...formValue,
            isModalOpen:!isModalOpen,
        })
    }
    const handleBlur = (field) => (evt) => {
        setTouched({
            touch: {...touched, [field]: true }
        })
    };
    function validate(yourname) {
        const errors = {
            yourname: ''
        };
        if (touched.yourname && yourname.length <2)
            errors.yourname = 'Your name should be atleast 2 characters';
        else if (touched.yourname && yourname.length >= 10)
            errors.yourname = 'Your name should be less than 10 characters';
        return errors    

    }

    const errors = validate(yourname)
        return (
            <div className = 'container'>
                <div className = 'row'>
                <Button outline onClick = {toggleModal} color = 'success' >
                    <span className = 'fa fa-pencil fa-lg'/> Submit Comment
                </Button>
                </div>
                <Modal isOpen = {isModalOpen} toggle = {toggleModal}>
                    <ModalHeader toggle = {toggleModal}>
                        Submit Comment
                    </ModalHeader>
                    <ModalBody>
                    <Form onSubmit={handleSubmit} onClose={closeModal}>
                            <FormGroup row>
                                <Label htmlFor='rating' md = {12}>Rating</Label>
                                <Col md = {12}>
                                    <Input type = 'select' id = 'rating' name = 'rating' value = {rating} 
                                         onChange = {handleInputChange}>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='yourname' md = {12}>FirstName</Label>
                                <Col md = {12}>
                                    <Input type = 'text' id = 'yourname' name = 'yourname' placeholder = 'Your Name' value = {yourname} valid={errors.yourname === ''}
                                        invalid={errors.yourname !== ''}
                                        onBlur={handleBlur('yourname')} onChange = {handleInputChange}/>
                                    <FormFeedback>{errors.yourname}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor = 'comment' md = {12}> Comment </Label>
                                    <Col md ={12}>
                                        <Input type = 'textarea' id = 'comment' name = 'comment' row = '10' value = {comment} onChange = {handleInputChange}/>
                                    </Col>
                            </FormGroup>
                            <Button type = 'submit' color = 'primary' onClick = {closeModal}>Submit</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }

