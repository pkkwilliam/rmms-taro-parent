import React from "react";
import RmmsAppState from "./appState/contextProvider";

import "taro-ui/dist/style/index.scss";
import "./app.scss";

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
