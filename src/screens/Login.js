import React, { useState, useContext } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { useMutation } from '@apollo/react-hooks/';
import { LOGIN_USER } from '../queries/entry';
import { useForm } from '../util/hooks';
import { AuthContext } from '../context/auth';
import { Text } from '../context/language';

const Login = props => {
  const context = useContext(AuthContext);
  const [errors, setErrors] = useState({});

  const { onChange, onSubmit, values } = useForm(loginUserCallBack, {
    username: '',
    password: '',
  });

  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    update(_, { data: { login: userData } }) {
      context.login(userData);
      console.log(userData);
      props.history.push('/');
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    variables: values,
  });

  function loginUserCallBack() {
    loginUser();
  }

  return (
    <div style={{ width: '50%', margin: 'auto' }}>
      {loading ? (
        <h1>Loading..</h1>
      ) : (
        <div>
          <Form onSubmit={onSubmit}>
            <Form.Input
              label={<Text tid="username" />}
              placeholder="Kullanıcı adınızı girin."
              name="username"
              value={values.username}
              onChange={onChange}
            />

            <Form.Input
              type="password"
              label="Şifre"
              placeholder="Şifrenizi girin."
              name="password"
              value={values.password}
              onChange={onChange}
            />

            <Button style={{ marginTop: 25 }} type="Submit" primary>
              Giriş Yap
            </Button>
          </Form>

          {Object.keys(errors).length > 0 && (
            <div className="ui error message">
              <ul className="list">
                {Object.values(errors).map(e => {
                  return <li key={e}>{e}</li>;
                })}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Login;
