import React from 'react';
import { useHistory } from 'react-router-dom';

function SignInPage() {

  const history = useHistory();
  return (<React.Fragment>
    <button onClick={() => history.push('/authenticate')}> Sign In </button>
  </React.Fragment>)
}

export default SignInPage;