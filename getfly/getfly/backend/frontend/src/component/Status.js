import React from 'react';
import './Status.css';
import './Navbar';
import './Sidebar';

const Status = () => {
  const statuses = [
    { id: 1, service: 'Basic Details', status: 'Complete' },
    { id: 2, service: 'Education Details', status: 'Partially Complete' },
    { id: 3, service: 'Upload', status: 'Incomplete' },
  ];

  const calculatePercentage = (status) => {
    switch (status) {
      case 'Complete':
        return '100%';
      case 'Partially Complete':
        return '70%';
      case 'Incomplete':
        const completedServices = statuses.filter(
          (service) => service.status === 'Complete'
        );
        const percentage = (completedServices.length / statuses.length) * 100;
        return `${percentage}%`;
      default:
        return '';
    }
  };

  return (
    <>
  
      <div className="container">
        <div className="dashboard-heading">
          <h1>Dashboard</h1>
        </div>
        <hr />
        <center>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Service</th>
                  <th>Completion Status</th>
                </tr>
              </thead>
              <tbody>
                {statuses.map((status) => (
                  <tr key={status.id}>
                    <td>{status.id}</td>
                    <td>{status.service}</td>
                    <td>{calculatePercentage(status.status)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </center>
      </div>
    </>
  );
};

export default Status;
