import React from 'react';

const ServiceList = ({ services, name }) => {
  if (!services.length) {
    return <h3>No Thoughts Yet</h3>;
  }
  return (
    <div>
      <h3>{name}</h3>
      {services &&
        services.map((service) => (
          <div key={service._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0"></h4>

            <div className="card-body bg-light p-2">
              <p>{service.name}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ServiceList;