import { Component } from "react";
import { RmmsContext } from "../appState/contextProvider";
import ServiceExecutor from "../service/serviceExecutor";
import ApplicationContext from "./applicationContext";

export default class ApplicationComponent extends Component {
  static _applicationContext;
  static _serviceExecutor;
  static contextType = RmmsContext;

  get applicationContext() {
    if (!this._applicationContext) {
      this._applicationContext = new ApplicationContext();
    }
    return this._applicationContext;
  }

  get appState() {
    return this.context;
  }

  get serviceExecutor() {
    if (!this._serviceExecutor) {
      this._serviceExecutor = new ServiceExecutor(this.applicationContext.host);
    }
    return this._serviceExecutor;
  }
}
