import { useState } from 'react';
import { useSignIn } from '@clerk/clerk-react';
import { ClerkAPIError } from '@clerk/types';
import { isClerkAPIResponseError } from '@clerk/clerk-react/errors';
import { useNavigate } from '@tanstack/react-router';

const LoginComponent = () => {
  const [validationErrors, setValidationErrors] = useState({
    emailError: '',
    passwordError: '',
  });
  const [form, setForm] = useState({ emailAddress: '', password: '' });
  const [errors, setErrors] = useState<ClerkAPIError[]>([]);

  const { isLoaded, signIn, setActive } = useSignIn();

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) ? '' : 'Invalid email format';
  };

  const validatePassword = (password: string) => {
    return password.length >= 4
      ? ''
      : 'Password must be at least 4 characters long';
  };

  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    if (name === 'emailAddress') {
      const emailError = validateEmail(value);
      setValidationErrors((prev) => ({ ...prev, emailError }));
    } else if (name === 'password') {
      const passwordError = validatePassword(value);
      setValidationErrors((prev) => ({ ...prev, passwordError }));
    }
  };

  const attemptSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors([]);

    if (!isLoaded || !signIn) return;

    try {
      const result = await signIn.create({
        identifier: form.emailAddress,
        password: form.password,
      });

      switch (result.status) {
        case 'complete':
          await setActive({ session: result.createdSessionId });
          navigate({ to: '/dashboard' });
          break;
        case 'needs_identifier':
        case 'needs_first_factor':
        case 'needs_second_factor':
        case 'needs_new_password':
          setErrors([
            {
              code: result.status,
              message: `Error: ${result.status.replace('needs_', '').replace('_', ' ')}`,
            },
          ]);
          break;
        default:
          setErrors([
            { code: 'unknown', message: 'An unknown error occurred.' },
          ]);
      }
    } catch (err: unknown) {
      if (isClerkAPIResponseError(err)) setErrors(err.errors);
    }
  };

  return (
    <div>
      <form onSubmit={attemptSignIn}>
        <div>
          <label htmlFor="email">Email address</label>
          <input
            id="email"
            name="emailAddress"
            type="email"
            value={form.emailAddress}
            onChange={handleInputChange}
          />
          {validationErrors.emailError && (
            <div className="errorText">{validationErrors.emailError}</div>
          )}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleInputChange}
          />
          {validationErrors.passwordError && (
            <div className="errorText">{validationErrors.passwordError}</div>
          )}
        </div>
        {errors.length > 0 && (
          <ul>
            {errors.map((error, index) => (
              <li key={index}>{error.message}</li>
            ))}
          </ul>
        )}
        <button
          type="submit"
          className={
            !form.emailAddress ||
            !form.password ||
            validationErrors.emailError !== '' ||
            validationErrors.passwordError !== ''
              ? 'disabled-button'
              : ''
          }
          disabled={
            !form.emailAddress ||
            !form.password ||
            validationErrors.emailError !== '' ||
            validationErrors.passwordError !== ''
          }
        >
          {!form.emailAddress ||
          !form.password ||
          validationErrors.emailError !== '' ||
          validationErrors.passwordError !== ''
            ? 'Disabled'
            : 'Sign In'}
        </button>
      </form>
    </div>
  );
};

export default LoginComponent;
