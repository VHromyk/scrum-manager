import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import Section from '../../components/Section';
import Form from '../../components/Form';
import Button from '../../components/Button';
import IconButton from '../../components/IconButton';
import SvgComponent from '../../components/SvgComponent';
import styles from './LoginPage.module.scss';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validPassword, setValidPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const onLogin = user => dispatch(authOperations.login(user));

  const handleShowPassword = useCallback(() => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  }, []);

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
            type={showPassword ? 'text' : 'password'}
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
          {validPassword && (
            <p className={styles.helper}>*Invalid credentials</p>
          )}
        </div>
        <IconButton
          classes={styles.passwordVisibilityBtn}
          aria-label="toggle password button"
          onClick={handleShowPassword}
        >
          {showPassword ? (
            <SvgComponent
              name="show-password"
              classes={styles.passwordVisibilityIcon}
            />
          ) : (
            <SvgComponent
              name="hide-password"
              classes={styles.passwordVisibilityIcon}
            />
          )}
        </IconButton>

        <Button type="submit" text="Enter" />
        <p className={styles.linkTo}>
          No account?
          <a className={styles.linkToRegister} href="/signup">
            Register
          </a>
        </p>
      </Form>
    </Section>
  );
}

export default LoginPage;
