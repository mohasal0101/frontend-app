import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../style/Deals.css'
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
    localStorage.setItem('deals', JSON.stringify(deals));

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
        <button type="submit">Submit</button>
      </form>
      <hr />
      <h3>Deals</h3>
      <div className="card-deck">
        {deals.map((deal, index) => (
          <Card key={index}>
            <Card.Body>
              <Card.Title>{deal.title}</Card.Title>
              <Card.Text>{deal.description}</Card.Text>
              <Card.Text>Amount: {deal.amount}</Card.Text>
              <Card.Text>Expiry Date: {deal.expiryDate}</Card.Text>
                <Card.Text>Is Active: {deal.isActive ? 'Yes' : 'No'}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <Button variant="primary">Edit</Button>
                <Button onClick={handleDelete} variant="danger">Delete</Button>
            </Card.Footer>
            </Card>
        ))}
        </div>
    </div>
    );
}

export default DealForm;
