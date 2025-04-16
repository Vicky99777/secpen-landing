import React from 'react';

const Dashboard = () => {
  return (
    <section id="dashboard" className="bg-light py-5">
      <div className="container">
        <h2 className="text-center mb-4">Threat Dashboard</h2>
        <div className="row">
          <div className="col-12">
            <h3>Current Vulnerabilities</h3>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Description</th>
                  <th>Severity</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>SQL Injection in login form</td>
                  <td>High</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>XSS in comment section</td>
                  <td>Medium</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Weak password policy</td>
                  <td>Low</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;