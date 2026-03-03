import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Change this password directly in this file to update the admin password
const ADMIN_PASSWORD = 'zbc@admin2024';

const AdminLogin = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    setTimeout(() => {
      if (password === ADMIN_PASSWORD) {
        sessionStorage.setItem('zbc_admin_auth', 'true');
        navigate('/admin/accounts');
      } else {
        setError('Incorrect password. Please try again.');
      }
      setLoading(false);
    }, 400);
  };

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        {/* Logo / Heading */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-600/20 mb-4">
            <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h1 className="text-white text-2xl font-bold font-serif">Admin Login</h1>
          <p className="text-gray-500 text-sm mt-1">Zion Brethren Assembly — Accounts</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-gray-900 rounded-2xl p-8 border border-gray-800 shadow-xl">
          <div className="mb-5">
            <label className="block text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              autoFocus
              required
              className="w-full bg-gray-800 text-white placeholder-gray-600 border border-gray-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>

          {error && (
            <p className="text-red-400 text-sm mb-4 flex items-center gap-2">
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-lg text-sm transition-colors duration-200"
          >
            {loading ? 'Verifying…' : 'Sign In'}
          </button>
        </form>

        <p className="text-center text-gray-700 text-xs mt-6">
          <a href="/" className="hover:text-gray-500 transition-colors">← Back to website</a>
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
