import React, { Component } from 'react'
import { connect } from 'react-redux'
import RepresentativeIntermediary from '../../components/RepresentativeView/RepresentativeIntermediary'
import RepresentativeLeftNavBar from '../../components/RepresentativeView/RepresentativeLeftNavBar'
import ContributorVisualization from '../../components/RepresentativeView/ContributorVisualization'
import { getCurrentPosition, getRepresentatives } from '../../actions/actionRepresentatives'

import '../../components/RepresentativeView/RepView.scss'

class RepresentativeInfo extends Component {

	  render() {
		  const { params, representatives, children } = this.props
		  return (
			<div>
				{representatives.map(function(representative, i) {
					  if (representative.person.id === JSON.parse(params.id)) {
						  let image = 'https://www.govtrack.us/data/photos/' + representative.person.id + '-200px.jpeg'
						  return ( 
							<RepresentativeIntermediary
								representative={representative}
								image={image} 
								key={i} />
						)
					}
				})}
				<div className='rep-container'>
					<div className='rep-left-navbar'>
						<RepresentativeLeftNavBar id={params.id}/>
					</div>
					<div className='rep-info-graph-container'>
						{children }
					</div>
				</div>
			</div>
		)
	}
}


function mapStateToProps(state) {
  const representatives = state.Representatives.representatives
  return {
    representatives,
  }
}

export default connect(mapStateToProps)(RepresentativeInfo)
