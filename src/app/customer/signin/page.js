"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Link from 'next/link';
import { useState } from 'react';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Implement your form submission logic here
    try {
      const response = await fetch('http://localhost:5000/api/signin', { // Ensure this matches the backend port
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('Sign in successful:', result);
      // Redirect or handle successful sign-in here
    } catch (error) {
      console.error('Error during sign-in:', error);
      // Handle error response here
    }
  };

  return (
    <div>
      <div className="container p-5 mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h5>Sign In</h5>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="loginEmail" className="form-label">Email</label>
                    <input 
                      type="email" 
                      className="form-control" 
                      id="loginEmail" 
                      placeholder="Enter your email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required 
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="loginPassword" className="form-label">Password</label>
                    <input 
                      type="password" 
                      className="form-control" 
                      id="loginPassword" 
                      placeholder="Enter your password" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required 
                    />
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <button type="submit" className="btn btn-primary">
                      Sign In
                    </button>
                    <Link
                      href="/forgot-password"
                      className="text-primary mt-2">
                      <span className="font-bold text-purple-900">Forgot Password</span>
                    </Link>
                  </div>

                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <div>If you don't have an account</div>
                    <Link
                      href="/pages/abc/register"
                      className="text-primary">
                      <span className="font-bold text-purple-900">Register</span>
                    </Link>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
