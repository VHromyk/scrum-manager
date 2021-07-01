import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperation from '../../redux/auth/auth-operations';
import Section from '../../components/Section';
import Form from '../../components/Form';
import Button from '../../components/Button';
import styles from './LoginPage.module.scss';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const onLogin = user => dispatch(authOperation.login(user));

  const handleChangeEmail = e => setEmail(e.target.value);
  const handleChangePassword = e => setPassword(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();

    onLogin({ email, password });

    setEmail('');
    setPassword('');
  };
  return (
    <Section>
      <Form onSubmit={handleSubmit} classes="formlogin">
        <h1 className={styles.title}>Enter</h1>
        <div className={styles.inputReg}>
          <input
            type="email"
            name="email"
            value={email}
            id="email"
            placeholder=" "
            className={styles.input}
            onChange={handleChangeEmail}
            required
          />
          <label htmlFor="email" className={styles.label}>
            E-mail
          </label>
        </div>
        <div className={styles.inputReg}>
          <input
            type="password"
            name="password"
            value={password}
            placeholder=" "
            id="password"
            className={styles.input}
            onChange={handleChangePassword}
            required
          />
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
        </div>
        <Button type="submit" text="Enter" />
        <p className={styles.linkTo}>
          No account?
          <a className={styles.linkToRegister} href="/register">
            Register
          </a>
        </p>
      </Form>
    </Section>
  );
}

export default LoginPage;
