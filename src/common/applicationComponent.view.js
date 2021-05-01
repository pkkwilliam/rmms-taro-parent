import React from "react";
import { AtModal } from "taro-ui";
import ApplicationComponent from "./applicationComponent";
import { RmmsContext } from "../appState/contextProvider";
import FlexView from "./flexView";

export default class ApplicationComponentView extends ApplicationComponent {
  static contextType = RmmsContext;

  Wrapper = ({ children }) => {
    const { modal } = this.props;
    return (
      <FlexView style={{ height: "100vh" }}>
        <ErrorModal {...modal} />
        {children}
      </FlexView>
    );
  };

  get appState() {
    return this.context;
  }

  get appStyle() {
    return this.appState.companyCustomise.style;
  }
}

function ErrorModal(props) {
  const { isOpen } = props;
  return (
    <AtModal
      isOpen={isOpen}
      title="标题"
      cancelText="取消"
      confirmText="确认"
      onClose={() => console.log("onClose")}
      onCancel={() => console.log("onCancel")}
      onConfirm={() => console.log("onConfirm")}
      content="欢迎加入京东凹凸实验室\n\r欢迎加入京东凹凸实验室"
    />
  );
}
