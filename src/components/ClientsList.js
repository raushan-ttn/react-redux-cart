import React from 'react';
import { authService } from '../services';
import userService from '../services/user.service';

const ClientsList = () => {

  return (
    <>
      <section className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12 text-center">
              <h3 className="mb-4">Clients page</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClientsList;
