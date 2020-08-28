import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Card, CardBody } from 'reactstrap';

export default class Signin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      remember: false,
      click: false,
      isAuth: false,
    };

    // this.handleEmailChange = this.handleEmailChange.bind(this);
    // this.handlePasswordChange = this.handlePasswordChange.bind(this);
    // this.handleClickChange = this.handleClickChange.bind(this);
    // this.updateState = this.updateState.bind(this);
  }
  handleChange = (event) => {
    event.persist();
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };
  // handleEmailChange(event) {
  //   event.persist();
  //   const value = event.target.value;
  //   this.setState({
  //     email: value,
  //   });
  // }
  // handlePasswordChange(event) {
  //   event.persist();
  //   const value = event.target.value;
  //   this.setState({
  //     password: value,
  //   });
  // }
  // handleClickChange(event) {
  //   event.persist();
  //   const value = event.target.value;
  //   this.setState({
  //     click: true,
  //   });
  // }

  updateState = () => {
    this.setState({
      isAuth: true,
    });
  };

  render() {
    return (
      <div>
        <Row className="custom-form">
          <Col sm="12" md="5" className="m-auto">
            <div className="card-wrapper">
              <div className="btn-grop">
                {this.state.email}
                <br />
                {this.state.password}
                {this.state.remember.toString()}
                <p className="text-muted">Sign in With</p>
                <div className="btn-wrap">
                  <button className="btn text-primary">
                    <i className="fab fa-github"></i>GITHUB
                  </button>
                  <button className="btn text-primary">
                    <i className="fab fa-google"></i>
                    GOOGLE
                  </button>
                </div>
              </div>
              <Card>
                <CardBody>
                  <div className="custom-input">
                    <p className="text-muted">Or sign in with credentials</p>
                    <Form>
                      <FormGroup>
                        <i className="fas fa-envelope"></i>
                        <Input
                          type="email"
                          name="email"
                          id="exampleEmail"
                          placeholder="Email"
                          value={this.state.email}
                          onChange={this.handleChange}
                        />
                      </FormGroup>
                      <FormGroup>
                        <i className="fas fa-lock"></i>
                        <Input
                          type="password"
                          name="password"
                          id="examplePassword"
                          placeholder="Password"
                          value={this.state.password}
                          onChange={this.handleChange}
                        />
                      </FormGroup>
                      <FormGroup check>
                        <Label check>
                          <Input
                            type="checkbox"
                            name="remember"
                            value={this.state.remember}
                            onChange={this.handleChange}
                          />{' '}
                          Remember Me
                        </Label>
                      </FormGroup>
                      <div className="text-center mt-4">
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={this.updateState}
                        >
                          SIGN IN
                        </button>
                        {/* {this.state.isAuth.toString()} */}
                      </div>
                    </Form>
                  </div>
                </CardBody>
              </Card>
            </div>
            <div className="forgot d-flex justify-content-between pt-4">
              <a href="#">Forgot Password?</a>
              <a href="#">Create Account</a>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
