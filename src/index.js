import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { BrowserRouter} from 'react-router-dom';

ReactDOM.render(
        <BrowserRouter>
            <App />
        </BrowserRouter>,
    document.querySelector('#root')
);
//<Link to="/about">소개</Link>

//<button><Link to= '/' className="links">Home</Link></button>
//<button><Link to= '/Login' className="links">로그인</Link></button>