import React, { Component, Fragment } from 'react';
import gql from "graphql-tag";
import { Query } from 'react-apollo';
import { Link } from "react-router-dom";
import classNames from "classnames";

const LAUNCH_QUERY = gql `
    query LaunchQuery($flight_number: Int!){
        launch(flight_number: $flight_number){
            flight_number
            mission_name
            launch_year
            launch-success
            launch_date_local,
            rocket{
                rocket_id
                rocket_name
                rocket_type
            }
        }
    }
`;

export class Launch extends Component {
  render() {
    let {flight_number} = this.props.match.params;
    flight_number = parseInt(flight_number);
    return(
        <Fragment>
          <Query query={LAUNCH_QUERY} variables={{flight_number}} >

          </Query>
        </Fragment>
    );
  }
}

export default Launch;
