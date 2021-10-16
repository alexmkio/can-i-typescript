import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { App } from './components/App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const router = <BrowserRouter><App /></BrowserRouter>;

ReactDOM.render(router, document.getElementById('root'));

serviceWorkerRegistration.register();