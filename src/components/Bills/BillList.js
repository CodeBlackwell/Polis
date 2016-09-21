import React, { Component } from 'react'
import Bill from './Bill'
import './Bills.scss'

export default class BillList extends Component {

  render() {
    const { bills, billsToShow, role } = this.props
    let count = 0
    return (
      <div>
       {bills.map( (bill, i)=> {
         if (role) {
           if (bill[role]) {
            while (count < billsToShow) {
              count++
              return <Bill bill={bill} key={i}/>
            }
          }
         } else {
           while (count < billsToShow) {
             count++
             return <Bill bill={bill} key={i}/>
           }
         }
       }) 
        }
       <button type="button" className="btn btn-default show_more_bills" onClick={e => this.props.showMoreBills()}>More</button>
      </div> 
    )
  } 
}