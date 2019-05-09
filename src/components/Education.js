import React, { Component } from 'react'
import {Grid, Cell} from 'react-mdl'

export default class Education extends Component {
  render() {
    return (
      <div>
        <Grid>
            <Cell col={4}>
                <h4>{this.props.startYear} - {this.props.endYear}</h4>
            </Cell>
            <Cell col={8}>
                <h2 style={{marginTop: '0px'}}>{this.props.collegeName}</h2>
                <p>{this.props.fieldOfStudy}</p>
                <p>{this.props.description}</p>
            </Cell>
        </Grid>
      </div>
    )
  }
}
