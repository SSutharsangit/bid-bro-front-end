"use client";
import Startfooter from '@/app/widgets/startfooter/page';
import Startnav from '@/app/widgets/startnav/page';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; 
import Link from 'next/link';


export default function SignIn() {
  return (
    <div>
      <Startnav />

      <div className="container p-24 mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h5>Sign In</h5>
              </div>
              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="loginEmail" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="loginEmail" placeholder="Enter your email" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="loginPassword" className="form-label">Password</label>
                    <input type="password" className="form-control" id="loginPassword" placeholder="Enter your password" />
                  </div>
                  <div className='flex justify-between items-center'>
                    <button type="submit" className="btn btn-primary">
                      Sign In
                    </button>
                    <Link
                      href=""
                      className="text-primary mt-7 transition-all">
                      <span className="font-bold text-purple-900">Forgot Password</span>
                    </Link>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>If you don't have an account</div>
                    <Link
                      href="/customer/register"
                      className="text-primary mt-7 transition-all">
                      <span className="font-bold text-purple-900">Register</span>
                    </Link>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Startfooter />
    </div>

  );
}
