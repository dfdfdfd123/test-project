import React, { useState } from 'react';

function LoginForm() {
  const [role, setRole] = useState('Head office');

  const containerStyle = {
    height: '100vh',
    backgroundColor: '#2c2f33',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const boxStyle = {
    backgroundColor: '#fff',
    padding: '30px',
    minWidth: '320px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  };

  const iconInputStyle = {
    position: 'relative',
    marginBottom: '20px',
  };

  const inputStyle = {
    paddingLeft: '40px',
    backgroundColor: '#e5e5e5',
    border: 'none',
    height: '45px',
    borderRadius: '6px',
  };

  const iconStyle = {
    position: 'absolute',
    top: '50%',
    left: '10px',
    transform: 'translateY(-50%)',
    fontSize: '18px',
    color: '#555',
  };

  const loginButtonStyle = {
    border: '1px solid #ced4da',
    width: '100%',
    backgroundColor: '#fff',
    color: '#000',
    height: '45px',
  };

  return (
      <div style={containerStyle}>
        <div style={boxStyle}>
          <div className="text-white mb-3" style={{ color: 'white' }}>Order Net</div>

          <div className="btn-group w-100 mb-4" role="group">
            {['Head office', 'DealerPortal', 'Warehouse'].map((item) => (
                <React.Fragment key={item}>
                  <input
                      type="radio"
                      className="btn-check"
                      name="roleOptions"
                      id={item}
                      autoComplete="off"
                      checked={role === item}
                      onChange={() => setRole(item)}
                  />
                  <label
                      className="btn btn-outline-dark"
                      htmlFor={item}
                      style={{ borderRadius: 0 }}
                  >
                    {item}
                  </label>
                </React.Fragment>
            ))}
          </div>

          <div style={iconInputStyle}>
            <span style={iconStyle}>👤</span>
            <input type="text" className="form-control" placeholder="LoginCode" style={inputStyle} />
          </div>

          <div style={iconInputStyle}>
            <span style={iconStyle}>🔒</span>
            <input type="password" className="form-control" placeholder="************" style={inputStyle} />
          </div>

          <button type="button" className="btn btn-outline-primary" style={loginButtonStyle}>
            로그인
          </button>
        </div>
      </div>
  );
}

export default LoginForm;
