import React, { useState } from 'react';
import Section from '../../components/Section';
import Button from '../../components/Button';
import Form from '../../components/Form';
import localStorageService from '../../utils/localStorage/service';
import styles from './RegisterPage.module.scss';

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

      localStorageService.saveIn('auth', { email });
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
        <h1 className={styles.title}>Registration</h1>
        <div className={styles.inputReg}>
          <input
            id="email"
            type="email"
            name="email"
            placeholder=" "
            value={email}
            className={styles.input}
            onChange={handleChange}
            required
          />
          <label htmlFor="email" className={styles.label}>
            E-mail
          </label>
        </div>
        <div className={styles.inputReg}>
          <input
            id="password1"
            type="password"
            minLength="5"
            name="password"
            placeholder=" "
            value={password}
            className={styles.input}
            onChange={handleChange}
            required
          />
          <label htmlFor="password1" className={styles.label}>
            Password
          </label>
        </div>
        <div className={styles.inputReg}>
          <input
            id="repeatPass"
            type="password"
            placeholder=" "
            className={styles.input}
            minLength="5"
            name="repeatPass"
            value={repeatPass}
            onChange={handleChange}
            required
          />
          <label htmlFor="repeatPass" className={styles.label}>
            Repeate password
          </label>
        </div>
        <Button type="submit" text="Register" />
        <p className={styles.linkTo}>
          Do you have an account?
          <a className={styles.linkTologin} href="/login">
            Log in
          </a>
        </p>
      </Form>
    </Section>
  );
};

export default RegisterPage;
