import React, { useState } from 'react';
import Section from '../../components/Section';
import Button from '../../components/Button';
import Form from '../../components/Form';
import s from './RegisterPage.module.scss';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPass, setRepeatPass] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      case 'repeatPass':
        setRepeatPass(value);
        break;

      default:
        throw new Error();
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (password === repeatPass) {
      // onRegister({ email, password });
      localStorage.setItem('auth', JSON.stringify({ email, password }));
    } else if (password !== repeatPass) {
      setPassword('');
      setRepeatPass('');
    }

    setEmail('');
    setPassword('');
    setRepeatPass('');
  };
  return (
    <Section>
      <Form onSubmit={handleSubmit}>
        <h1 className={s.title}>Registration</h1>
        <div className={s.inputReg}>
          <input
            id="email"
            type="email"
            name="email"
            value={email}
            className={s.input}
            onChange={handleChange}
          />
          <label for="email" className={s.label}>
            E-mail
          </label>
        </div>
        <div className={s.inputReg}>
          <input
            id="password1"
            type="password"
            minlength="5"
            name="password"
            value={password}
            className={s.input}
            onChange={handleChange}
          />
          <label for="password1" className={s.label}>
            Password
          </label>
        </div>
        <div className={s.inputReg}>
          <input
            id="repeatPass"
            type="password"
            className={s.input}
            minlength="5"
            name="repeatPass"
          />
          <label for="repeatPass" className={s.label}>
            Repeate password
          </label>
        </div>
        <Button type="submit" text="Register" />
        <p className={s.linkTo}>
          Do you have an account?
          <a className={s.linkTologin} href="/login">
            Log in
          </a>
        </p>
      </Form>
    </Section>
  );
};

export default RegisterPage;
