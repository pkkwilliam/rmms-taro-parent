import { Component } from "react";
import { RmmsContext } from "../appState/contextProvider";
import ServiceExecutor from "../service/serviceExecutor";

export default class ApplicationComponent extends Component {
  static _serviceExecutor = new ServiceExecutor();
  static contextType = RmmsContext;

  get appState() {
    return this.context;
  }
}
