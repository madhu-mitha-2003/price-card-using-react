import React from 'react';
import './Card.css';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
export default function LeftCard() {
  return (
    <div className="card  ">
      <div className="card-body">
        <h4 className="card-title header__category">
          PERSONAL <hr className="hr" />
        </h4>
        <h6 className="card-subtitle text-muted">Best for Personal Use</h6>
        <hr />
        <div>
          <h2>$160</h2>
          <p className="text-muted">per month, billed yearly </p>
        </div>
        <div className="text-center">
          <div className="btn btn-primary button__width">
            Start With Personal
          </div>
        </div>
        <div>
          <div className="mergeIcons">
            <CheckCircleIcon className="icon__class" />
            <p className="first__condition">Free Domain for One Year</p>
          </div>
          <div className="mergeIcons">
            <CheckCircleIcon className="icon__class" />
            <p className="first__condition">Best-in-class hosting</p>
          </div>
          <div className="mergeIcons">
            <CancelIcon className="icon__class__Canncel" />
            <p className="first__condition">Remove WordPress.com Ads</p>
          </div>
          <div className="mergeIcons">
            <CancelIcon className="icon__class__Canncel" />
            <p className="first__condition">Collect payments</p>
          </div>
          <div className="mergeIcons">
            <CancelIcon className="icon__class__Canncel" />
            <p className="first__condition">Unlimited Email Support</p>
          </div>
        </div>
      </div>
    </div>
  );
}
