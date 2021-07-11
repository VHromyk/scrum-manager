import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import Section from '../../components/Section';
import Button from '../../components/Button';
import IconButton from '../../components/IconButton';
import SvgComponent from '../../components/SvgComponent';
import Form from '../../components/Form';
import styles from './RegisterPage.module.scss';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPass, setRepeatPass] = useState('');
  const [validPassword, setValidPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const onRegister = user => dispatch(authOperations.signup(user));

  const handleShowPassword = useCallback(() => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  }, []);

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
      onRegister({ email, password });
      setEmail('');
      setPassword('');
      setRepeatPass('');
      setValidPassword(false);
    } else if (password !== repeatPass) {
      setValidPassword(true);
    }
  };

  return (
    <Section>
      <Form onSubmit={handleSubmit} classes="formRegister">
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
            type={showPassword ? 'text' : 'password'}
            minLength="3"
            maxLength="15"
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

        <div className={styles.inputReg}>
          <input
            id="repeatPass"
            type={showPassword ? 'text' : 'password'}
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
          {validPassword && (
            <p className={styles.helper}>*Passwords do not match</p>
          )}
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
