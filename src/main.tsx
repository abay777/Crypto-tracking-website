import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import store from './store.ts';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import App from './App.tsx';
const CoinDetails = lazy(() => import('./components').then(module => ({ default: module.CoinDetails })));
 const App = lazy(()=>import('./App.tsx'))
 const Loader: React.FC = lazy(()=>import('./components').then(module=>({default:module.Loader})))


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={(
            <Suspense fallback={<Loader/>}>
              <App/>
            </Suspense>
          )} />
          <Route
            path='/:id'
            element={(
              <Suspense fallback={<Loader/>}>
                <CoinDetails />
              </Suspense>
            )}
          />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
);
