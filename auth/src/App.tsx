import { NextUIProvider } from '@nextui-org/react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import "./index.scss";

import Signin from './components/Signin'
import Signup from './components/Signup';

const generateClassName = createGenerateClassName({
  productionPrefix: 'au',
});

interface AuthProps {
  history: any
  onSignIn: any
}


function App({ onSignIn }: AuthProps) {
  return (
    <NextUIProvider>
      <div>
        <StylesProvider generateClassName={generateClassName}>
          <BrowserRouter>
            <Routes>
              <Route path="/auth/signin" element={<Signin onSignIn={onSignIn} />} />
              <Route path="/auth/signup" element={<Signup onSignIn={onSignIn} />} />
              <Route path="/auth/signup/new" element={<Signup onSignIn={onSignIn} />} />
            </Routes>
          </BrowserRouter>
        </StylesProvider>

      </div>

    </NextUIProvider>
  );
}

export default App
