import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import SearchForm from "./SearchForm";
import EmployeeDetail from "./EmployeeDetail";
import API from "../controller/API";

class ApiContainer extends Component {
  state = {
    result: [],
    search: "",
  };

  componentDidMount() {
    API.search("")
      .then((res) => {
        console.log("mounting", res.data.results);
        this.setState({ result: res.data.results });
      })
      .catch((err) => console.log(err));
  }

  searchEmployees = (query) => {
    return this.state.result.filter(
      (person) =>
        person.name.first.includes(query) ||
        person.name.last.includes(query) ||
        person.phone.includes(query)
    );
  };

  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.render();
  };

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col size="sm-12">
              <div heading="Search">
                <SearchForm
                  value={this.state.search}
                  handleInputChange={this.handleInputChange}
                  handleFormSubmit={this.handleFormSubmit}
                />
              </div>
              <Card>
                {this.state.result.size !== 0 ? (
                  this.state.result
                    .filter(
                      (person) =>
                        person.name.first.includes(this.state.search) ||
                        person.name.last.includes(this.state.search) ||
                        person.phone.includes(this.state.search)
                    )
                    .map((x) => (
                      <EmployeeDetail
                        key={x.login.uuid}
                        name={x.name}
                        phone={x.phone}
                        email={x.email}
                        dob={x.dob}
                        picture={x.picture.thumbnail}
                      />
                    ))
                ) : (
                  <ul className="list-group list-group-primary-sm">
                    No Results to Display
                  </ul>
                )}
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ApiContainer;
