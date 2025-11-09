import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Hello Office Boy</h1>
        </div>
    );
}

ReactDOM.createRoot(document.getElementById('app')).render(<App />);
