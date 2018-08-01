import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import './style.css';
import CustomInput from '../../components/Input';
import CustomButton from '../../components/Button';
import CustomLabel from '../../components/Label';
import ErrorMessage from '../../components/Error/';
import { getUsers, setRegularField } from '../../actions/users';
import { checkLogin } from '../../selectors/login';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      checkboxText: 'Show password',
      disabled: true,
      error: false,
      login: '',
      password: '',
      message: '',
    };
  }

  componentDidMount() {
    this.props.getUsers();
  }

  showPassword = () => {
    const x = document.getElementById('passwordId');

    if (x.type === 'password') {
      x.type = 'text';
      this.setState({
        checkboxText: 'Hide password',
      });
    } else {
      x.type = 'password';
      this.setState({
        checkboxText: 'Show password',
      });
    }
  }

  enableCheckbox = () => {
    const x = document.getElementById('passwordId');

    if (x.value.length !== 0) {
      this.setState({
        disabled: false,
      });
    } else {
      this.setState({
        disabled: true,
      });
    }
  }

  checkData = (login, password) => {
    if (checkLogin(login, password, this.props.usersData)) {
      this.setState({
        error: false,
      });
      this.props.history.push('/dashboard');
    } else {
      this.setState({
        message: 'Wrong login or password',
        error: true,
      });
    }
  }

  tryLogin = (login, password) => {
    this.setState({ error: false });
    if (login === '' || password === '') {
      this.setState({
        message: 'All fields are required',
        error: true,
      });
    } else {
      this.checkData(login, password);
    }
  }

  handleChange = (key, value) => {
    this.setState({ [key]: value });
    this.props.setRegularField({ key, value });
    if (key === 'password') {
      this.enableCheckbox();
    }
  }

  renderRegularError = message => (
    <ErrorMessage message={message} />
  )

  renderRegularLabel = label => (
    <CustomLabel label={label} />
  )

  renderRegularField = (type, name, id, value) => (
    <CustomInput
      type={type}
      name={name}
      value={value}
      id={id}
      onChange={e => this.handleChange(name, e.target.value)}
    />
  )

  renderRegularButton = (title, onClick) => (
    <CustomButton title={title} onClick={onClick} />
  )

  renderShowCheckBox = () => (
    <div>
      <input className="checkBox" type="checkbox" onClick={() => this.showPassword()} disabled={this.state.disabled} />
      <label htmlFor="checkBox" className="checkBoxLabel">
        {this.state.checkboxText}
      </label>
    </div>
  )

  render() {
    const {
      login, password, message,
    } = this.state;

    return (
      <div className="borderLogin">
        {this.state.error ? this.renderRegularError(message) : null}
        {this.renderRegularLabel('Login')}
        {this.renderRegularField('text', 'login', 'loginId', login)}
        {this.renderRegularLabel('Password')}
        {this.renderRegularField('password', 'password', 'passwordId', password)}
        {this.renderShowCheckBox()}
        {this.renderRegularButton('Login', () => this.tryLogin(login, password))}
      </div>
    );
  }
}

Login.propTypes = {
  getUsers: PropTypes.func.isRequired,
  setRegularField: PropTypes.func.isRequired,
  history: PropTypes.shape().isRequired,
  usersData: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

const mapStateToProps =
  ({
    users: { usersData },
  }) =>
    ({
      usersData,
    });

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getUsers,
      setRegularField,
    },
    dispatch,
  );

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
