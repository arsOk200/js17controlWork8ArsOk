import React from 'react';
import {Link} from "react-router-dom";
import {Quote} from "../../../type";

interface Props{
  quotes:Quote;
}

const Item:React.FC<Props> = ({quotes}) => {
  return (
      <div className="card mb-2 mt-2">
        <div className="card-header">
            Author: <strong className='text-success'>{quotes.author}</strong>
        </div>
        <div className="card-body">
          <p className="card-title">Category: <strong className='text-primary'>{quotes.category}</strong></p>
          <p>{quotes.text}</p>
          <div className='d-flex gap-2'>
            <Link to={'/edit-quote/'+ quotes.id} className='btn btn-primary'>Edit</Link>
            <button className='btn btn-danger'>Delete</button>
          </div>
        </div>
      </div>
  );
};

export default Item;