import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import './index.css';
import { App } from './components/App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const router = <HashRouter> <App /> </HashRouter>;

ReactDOM.render(router, document.getElementById('root'));

serviceWorkerRegistration.register();