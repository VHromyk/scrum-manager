import React, { useState } from 'react';
import Section from '../../components/Section';
import Form from '../../components/Form';
import Button from '../../components/Button';
import styles from './LoginPage.module.scss';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeEmail = e => setEmail(e.target.value);
  const handleChangePassword = e => setEmail(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();

    // onLogin({ email, password });

    setEmail('');
    setPassword('');
  };
  return (
    <Section>
      <Form onSubmit={handleSubmit}>
        <h1 className={styles.title}>Enter</h1>
        <div className={styles.inputReg}>
          <label htmlFor="email" className={styles.label}>
            E-mail
          </label>
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
        </div>
        <div className={styles.inputReg}>
          <label htmlFor="password1" className={styles.label}>
            Password
          </label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder=" "
            id="password1"
            className={styles.input}
            onChange={handleChangePassword}
            required
          />
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
