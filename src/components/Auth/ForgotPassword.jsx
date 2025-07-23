import React, { useState } from 'react';
import { auth } from '../../utils/firebase';
import { sendPasswordResetEmail } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import '../../styles/ForgotPassword.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('✅ Password reset email sent!');
      setError('');
    } catch (err) {
      setError(err.message);
      setMessage('');
    }
  };

  return (
    <div className="forgot-password-wrapper">
      <form onSubmit={handleReset} className="forgot-password-form">
        <h2 className="forgot-password-title">🔐 Reset Password</h2>

        {message && <p className="forgot-password-success">{message}</p>}
        {error && <p className="forgot-password-error">{error}</p>}

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="forgot-password-input"
          required
        />

        <button type="submit" className="forgot-password-button">
          Send Reset Link
        </button>

        <p className="back-to-login" onClick={() => navigate('/login')}>
          ← Back to Login
        </p>
      </form>
    </div>
  );
};

export default ForgotPassword;
