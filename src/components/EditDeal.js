import React, { useState, useEffect } from 'react';

function EditDeal(props) {
  const [deal, setDeal] = useState({
    id: '',
    name: '',
    description: '',
    status: '',
  });

  useEffect(() => {
    // Fetch deal data from API or props
    // and update the state
    
  }, [props.deal]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDeal((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call API to update deal data
    // or pass data back to parent component
    // for updating the state
  };

  return (
    <div>
      <h2>Edit Deal</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={deal.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={deal.description}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="status">Status:</label>
          <select
            id="status"
            name="status"
            value={deal.status}
            onChange={handleInputChange}
            required
          >
            <option value="">Select status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
            <option value="Deleted">Deleted</option>
            <option value="Expired">Expired</option>
          </select>
        </div>
        <button href='/deals' type="submit">Update Deal</button>
      </form>
    </div>
  );
}

export default EditDeal;
