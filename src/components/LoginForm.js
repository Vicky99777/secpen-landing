import React from 'react';

const Login = () => {
  return (
    <section id="login" className="bg-light py-5">
      <div className="container">
        <h2 className="text-center mb-4">Login</h2>
        <form className="w-100 w-md-50 mx-auto">
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input type="text" className="form-control" id="username" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    </section>
  );
};

export default Login;