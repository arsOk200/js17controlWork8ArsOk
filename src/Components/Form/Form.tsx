import React, {useState} from 'react';
import {QuoteApi, QuoteMutation} from "../../type";
import {useNavigate} from "react-router-dom";

interface Props {
  onSubmit:(quote:QuoteApi) => void;
  editQuote?:QuoteApi;
}

const Form:React.FC<Props> = ({onSubmit, editQuote}) => {

  const initialState = editQuote? {
    ...editQuote,
  }:{
    author: '',
    category: '',
    text: '',
  }
  const navigate = useNavigate();
  const [quote, setQuote] = useState<QuoteMutation>(initialState);

  const onQuoteChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    setQuote(prev => ({...prev, [name]: value}));
  };

  const onFormSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    navigate('/');
    onSubmit(quote);
    console.log(quote);
  };


  return (
    <form className='container mt-3 w-75' onSubmit={onFormSubmit}>
      <h4>{editQuote? "Edit Quote": "Add new quote"}</h4>
      <div className="form-group mb-4">
        <label htmlFor="category" className='me-3'>Category: </label>
        <select required name="category" id="category" value={quote.category} onChange={onQuoteChange}>
          <option disabled value=''>Select a category</option>
          <option>star-wars</option>
          <option>famous people</option>
          <option>humor</option>
          <option>saying</option>
          <option>motivational</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="author">Author</label>
        <input id='author' name='author' type="text" className="form-control" value={quote.author} onChange={onQuoteChange}/>
      </div>
      <div className="form-group">
        <label htmlFor='text'>Text</label>
        <textarea name="text" id="text" className='form-control' value={quote.text} onChange={onQuoteChange} style={{height:'200px', resize:'none'}}/>
      </div>
      <div className='d-flex gap-2'>
        <button type='submit' className="btn btn-primary mt-2">
          Save
        </button>
      </div>
    </form>
  );
};

export default Form;