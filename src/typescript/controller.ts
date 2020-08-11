import { View } from './view';
import { Model } from './model';
import { AuthConfig } from './types';
// import firebase from 'firebase'; // TODO my function works
import firebase from 'firebase/app'; // TODO proper
import 'firebase/functions'; // If using Firebase database
import 'firebase/database'; // If using Firebase database
import 'firebase/storage';  // If using Firebase storage

document.addEventListener('DOMContentLoaded', (): Controller => {
  return new Controller(new View(), new Model());
});

class Controller {
  constructor(public view: View, public model: Model) {
    firebase.initializeApp(this.model.firebaseConfig);
    // WELCOME PAGE
    this.view.bindNavigateToLoginModalClick();
    this.view.bindNavigateToRegisterModalClick();
    this.view.bindRegisterClick(this.handleRegister);
    this.view.bindLoginClick(this.handleLogin);
    // HABITS PAGE
    this.view.bindNavigateLogOutClick(this.handleLogout);
  }

  // WELCOME PAGE

  public bindRegisterResult = (isRegistered: boolean): void => {
    this.view.showRegisterResult(isRegistered);
  }
  public bindLoginResult = (isLogged: boolean): void => {
    this.view.showLoginResult(isLogged);
  }

  private handleRegister = (config: AuthConfig): void => {
    this.model.validateRegister(config);
    this.model.onHandleCallableFunction(config, firebase.functions());
    this.bindRegisterResult(this.model.isRegistered);
  }
  private handleLogin = (config: AuthConfig): void => {
    this.model.validateLogin(config);
    this.bindLoginResult(this.model.isLogged);
  }

  // HABITS PAGE
  public bindLogoutResult = (isLogged: boolean): void => {
    this.view.showLogoutResult(isLogged)
  }

  private handleLogout = (): void => {
    this.model.onLogout();
    this.bindLogoutResult(this.model.isLogged)
  }

}
