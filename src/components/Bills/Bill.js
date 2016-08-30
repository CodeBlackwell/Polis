import React, { Component } from 'react';

import './Bills.scss';

const Bill = ({ bill }) => (
  <div>
    <b>Bill Number: </b>{bill.billNumber} <br />
    <b>Bill Name: </b>{bill.billName} <br />
    <b>Current Status: </b>{bill.statusDescription}<br />
    <b>Full Text On Govtrack: </b> <a href={bill.fullTextLink} target="_blank">click here</a> <br />
    <b>Sponsored By: </b>{bill.sponsor}<br />
    <hr />
  </div> 
)

export default Bill