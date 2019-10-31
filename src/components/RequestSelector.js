import { withRouter } from 'react-router-dom';
import React, { Component } from 'react'
import { Button, Col, Container, Row } from 'reactstrap';

class RequestSelector extends Component {
  constructor(props) {
    super(props);
 
    this.routeToAdd = this.routeToAdd.bind(this);
    this.routeToGet = this.routeToGet.bind(this);
  }

  routeToAdd() {
    this.props.history.push("add");
  }

  routeToGet() {
    this.props.history.push("get");
  }


  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row>
            <Col>
              <Button color="primary"
                onClick={this.routeToAdd}
                  >
                  Add transaction
                </Button>
            </Col>
            <Col>
              <Button color="link"
                onClick={this.routeToGet}
                >
                Get Transactions</Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withRouter(RequestSelector);