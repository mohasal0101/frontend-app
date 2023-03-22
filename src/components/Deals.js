import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from '@mui/material/Button';
import '../style/Deals.css'
import '../style/Deals.scss'

const DealForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    amount: 0,
    expiryDate: '',
    isActive: ''
  });
  const [deals, setDeals] = useState([]);

    const handleDelete = (index) => {
        const newDeals = [...deals];
        newDeals.splice(index, 1);
        setDeals(newDeals);
    }


  const handleSubmit = e => {
    e.preventDefault();
    setDeals([...deals, formData]);
    setFormData({
      title: '',
      description: '',
      amount: 0,
      expiryDate: '',
      isActive: true
    });

  }

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  useEffect(() => {
    const deals = JSON.parse(localStorage.getItem('deals'));
    if (deals) {
        setDeals(deals);
    }
}, []); 


    

  return (
    <div>
        <h3>
            <span>Deal </span>Form<span></span>
            </h3>      
      <Button
      //move the button a little bit to the right
      sx={{ position: 'absolute', top: 105, right: 16 }}
      href="/griduser" variant="outlined">View Users</Button>
      <form  onSubmit={handleSubmit}>

        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" value={formData.description} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="amount">Amount:</label>
          <input type="number" id="amount" name="amount" value={formData.amount} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="expiryDate">Expiry Date:</label>
          <input type="date" id="expiryDate" name="expiryDate" value={formData.expiryDate} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="isActive">Is Active:</label>
          <input type="checkbox" id="isActive" name="isActive" onChange={handleChange} />
        </div>
        <Button variant="outlined" color="success" type="submit">Submit</Button>
      </form>
      <hr />
      <h3>Deals</h3>
      <div className="card-deck">
        {deals.map((deal, index) => (
          <Card key={index}>
            <Card.Body>
              <Card.Title>Deal {index + 1}</Card.Title>
              <Card.Title>{deal.title}</Card.Title>
              <Card.Text>{deal.description}</Card.Text>
              <Card.Text>Amount: {deal.amount}</Card.Text>
              <Card.Text>Expiry Date: {deal.expiryDate}</Card.Text>
                <Card.Text>Is Active: {deal.isActive ? 'Yes' : 'No'}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <Button href="/editdeal" variant="outlined">Edit</Button>
                <Button onClick={handleDelete} variant="outlined" color="error">Delete</Button>
            </Card.Footer>
            </Card>
        ))}
        </div>
    </div>
    );
}

export default DealForm;
