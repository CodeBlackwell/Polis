import React, { Component } from 'react';

import './Bills.scss';

const BillVotes = ({ bill }) => (
  <div>
    Bill: {bill.vote.question}<br />
    Date: {bill.vote.created}<br />
    Current Status: {bill.vote.result}<br />
    Check Out The Full Text On Govtrack <a href={bill.vote.link} target="_blank">here</a> <br />
    Your Rep Voted: {bill.option.value}<br />
    <hr />
  </div> 
)

export default BillVotes