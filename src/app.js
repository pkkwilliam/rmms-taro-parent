import React from "react";

import "./app.scss";
import RmmsAppState from "./appState/contextProvider";

class App extends RmmsAppState {
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  render() {
    return <this.AppStateWrapper>{this.props.children}</this.AppStateWrapper>;
  }
}

export default App;
