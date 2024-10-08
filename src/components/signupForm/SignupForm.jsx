import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import { NavLink, useNavigate } from 'react-router-dom';
import { credentialsSignupHandler } from '../../features/user/userSlice';
import LoginButtons from '../google&facebook/LoginButtons';

const SignupForm = () => {
  const { t } = useTranslation();
  const [userName, setUserName] = useState('');
  const [userSurname, setUserSurname] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userConfirmEmail, setUserConfirmEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userConfirmPassword, setUserConfirmPassword] = useState('');
  const [userBirthDay, setUserBirthDay] = useState('');
  const [userBirthMonth, setUserBirthMonth] = useState('');
  const [userBirthYear, setUserBirthYear] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleState = (state) => (e) => {
    state(e.target.value);
  };
  // eslint-disable-next-line no-unused-vars

  // Register function
  const navigation = () => {
    navigate('/signup-thanks');
  };

  const register = async (e) => {
    e.preventDefault();
    dispatch(
      credentialsSignupHandler({
        name: userName,
        surname: userSurname,
        email: userEmail,
        password: userPassword,
        bookings: [],
        cards: [],
        tickets: 0,
        birthday: moment(userBirthDay, userBirthMonth, userBirthYear).format(
          'DD MM YYYY'
        ),
        navigation,
      })
    );
  };

  return (
    <form data-testid="signup">
      <div className="flex flex-col lg:mt-10 mt-4 px-10 py-5 rounded-md shadow-[0px_10px_16px_rgba(0,0,0,0.1)]">
        <section className="flex gap-5">
          <input
            type="text"
            value={userName}
            onChange={handleState(setUserName)}
            placeholder={t('first')}
            className="rounded-md w-1/2 mb-3 h-12 pl-2 border border-solid border-[#D1DBE3]"
          />
          <input
            type="text"
            value={userSurname}
            onChange={handleState(setUserSurname)}
            placeholder={t('last')}
            pattern="^[a-zA-Z0-9]{1,30}$"
            required
            title={t('must4')}
            className="rounded-md w-1/2 mb-3 h-12 pl-2 border border-solid border-[#D1DBE3]"
          />
        </section>

        <input
          type="email"
          value={userEmail}
          onChange={handleState(setUserEmail)}
          placeholder={t('yourEmail')}
          required
          className="rounded-md mb-3 h-12 pl-2 border border-solid border-[#D1DBE3]"
        />
        <input
          type="email"
          value={userConfirmEmail}
          onChange={handleState(setUserConfirmEmail)}
          placeholder={t('confirmEmail')}
          pattern={userEmail}
          title={t('must5')}
          className="rounded-md mb-3 h-12 pl-2 border border-solid border-[#D1DBE3]"
        />
        <section className="flex gap-5 ">
          <input
            type="password"
            value={userPassword}
            onChange={handleState(setUserPassword)}
            placeholder={t('password')}
            pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
            required
            title={t('must2')}
            className="rounded-md mb-3 h-12 w-1/2 425:w-full pl-2 border border-solid border-[#D1DBE3] tablet2:w-full"
          />
          <input
            type="password"
            value={userConfirmPassword}
            onChange={handleState(setUserConfirmPassword)}
            placeholder={t('confirmPassword')}
            pattern={userPassword}
            title={t('must3')}
            required
            className="rounded-md mb-3 h-12 w-1/2 425:w-full pl-2 border border-solid border-[#D1DBE3] tablet2:w-full"
          />
        </section>

        <div className="flex lg:gap-5 lg:flex-row flex-col">
          <p className="rounded-md lg:mb-3 h-12 lg:w-2/5 lg:text-center flex lg:justify-center items-center	">
            {t('Birth Date')}
          </p>
          <input
            type="text"
            value={userBirthDay}
            onChange={handleState(setUserBirthDay)}
            placeholder={t('dd')}
            className="rounded-md mb-3 h-12 lg:w-1/5 pl-2 425:text-center 425:pl-0 border border-solid border-[#D1DBE3] tablet2:text-xs tablet2:pl-0 tablet2:w-2/3"
          />
          <input
            type="text"
            value={userBirthMonth}
            onChange={handleState(setUserBirthMonth)}
            placeholder={t('mm')}
            className="rounded-md mb-3 h-12 lg:w-1/5 pl-2 425:text-center 425:pl-0 border border-solid border-[#D1DBE3] tablet2:text-xs tablet2:pl-0 tablet2:w-2/3"
          />
          <input
            type="text"
            value={userBirthYear}
            onChange={handleState(setUserBirthYear)}
            placeholder={t('yy')}
            className="rounded-md mb-3 h-12 lg:w-2/5 pl-2 425:text-center 425:pl-0  border border-solid border-[#D1DBE3] tablet2:text-xs tablet2:pl-0 tablet2:w-full"
          />
        </div>
        <section className="flex justify-center lg:gap-10 font-medium mt-5 gap-4">
          <button
            type="submit"
            className="h-16 lg:w-1/3 w-full	rounded-md border border-solid border-[#2DD3E3] text-2xl text-[#2DD3E3] 425:text-xl tablet2:text-xl tablet2:w-2/3"
          >
            <NavLink to="/login">{t('login2')}</NavLink>
          </button>
          <button
            type="submit"
            className="h-16	lg:w-1/3 w-full	rounded-md bg-[#2DD3E3] text-2xl text-black shadow-[0px_7px_20px_rgba(0,0,0,0.2)] 425:text-xl tablet2:text-xl tablet2:w-2/3"
            onClick={
              userPassword === userConfirmPassword &&
              userEmail === userConfirmEmail
                ? register
                : null
            }
          >
            {t('signup')}
          </button>
        </section>
      </div>
      <LoginButtons />
    </form>
  );
};
export default SignupForm;
