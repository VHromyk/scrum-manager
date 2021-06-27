import React, { useState } from 'react';
import Section from '../../components/Section';
import Form from '../../components/Form';
import Button from '../../components/Button';
import s from './LoginPage.module.scss';

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
        <h1>Enter</h1>
        <div className={s.input}>
          <label for="email">E-mail</label>
          <input
            type="email"
            name="email"
            value={email}
            id="email"
            onChange={handleChangeEmail}
          />
        </div>
        <label for="password1">Password</label>
        <input
          type="password"
          name="password"
          value={password}
          id="password1"
          onChange={handleChangePassword}
        />
        <Button type="submit" text="Enter" />
        <p>
          No account?
          <a className={s.linkToRegister} href="/register">
            Register
          </a>
        </p>
      </Form>
    </Section>
  );
}

export default LoginPage;
