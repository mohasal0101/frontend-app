import React, { useState } from 'react';
import '../style/GridDeals.css';

const Deals = () => {
  const [deals, setDeals] = useState([
    {  title: 'Deal 1', description: 'Save up to 50% on select electronics during our spring sale.', amount: 50, status: 'Active' },
    {  title: 'Deal 2', description: 'Get free shipping on all orders over $50.', amount: 100, status: 'Inactive' },
    {  title: 'Deal 3', description: 'Buy one, get one 50% off on all shoes.', amount: 75, status: 'Deleted' },
    {  title: 'Deal 4', description: 'Upgrade your wardrobe with our buy one, get one 30% off sale.', amount: 200, status: 'Expired' },
    {  title: 'Deal 5', description: 'Enjoy a free gift with any purchase over $100.', amount: 150, status: 'Active' },
    {  title: 'Deal 6', description: 'Save 20% on your first purchase when you sign up for our newsletter.', amount: 75, status: 'Inactive' },
    {  title: 'Deal 7', description: 'Limited time offer: 25% off all jewelry.', amount: 125, status: 'Active' },
    {  title: 'Deal 8', description: 'Buy two, get one free on all beauty products.', amount: 300, status: 'Active' },
    {  title: 'Deal 9', description: 'Get a $10 gift card with any purchase over $50.', amount: 50, status: 'Inactive' },
    {  title: 'Deal 10', description: 'Last chance to save up to 70% off on  items.', amount: 100, status: 'Deleted' },
  ]);

  return (
    <div className='form'>
      <h1>Deals</h1>
      <table>
        <thead>
          <tr>
            <th>FORM</th>
            <th>Title</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {deals.map((deal) => (
            <tr key={deal.id}>
              <td>{deal.id}</td>
              <td>{deal.title}</td>
              <td>{deal.description}</td>
              <td>{deal.amount}</td>
              <td>{deal.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Deals;
