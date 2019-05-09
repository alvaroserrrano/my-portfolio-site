import React, { Component } from 'react'
import {Grid, Cell} from 'react-mdl'

export default class Skills extends Component {
  render() {
    return (
      <div>
        <Grid>
            <Cell col={4}>
                
            </Cell>
            <Cell col={8}>
                <h4>{this.props.nameOfSkill}</h4>
                <p>{this.props.description}</p>
            </Cell>
        </Grid>
      </div>
    )
  }
}
