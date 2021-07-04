import React from "react";
import { AtModal } from "taro-ui";
import ApplicationComponent from "./applicationComponent";
import { RmmsContext } from "../appState/contextProvider";
import FlexView from "./flexView";

export default class ApplicationComponentView extends ApplicationComponent {
  static contextType = RmmsContext;

  Wrapper = (props) => {
    const { modal } = this.props;
    return (
      <FlexView style={{ height: "100vh", ...props.style }}>
        <ErrorModal {...modal} />
        {props.children}
      </FlexView>
    );
  };

  get appState() {
    return this.context;
  }

  get appLabel() {
    return this.appState.companyCustomise.label.commonLabel;
  }

  get appStyle() {
    return this.appState.companyCustomise.style;
  }

  get componentLabel() {
    return this.appState.companyCustomise?.label[this.getComponentLabelName()];
  }

  get componentStyle() {
    return this.appState.companyCustomise?.[this.getComponentStyleName()];
  }

  getComponentLabelName() {
    throw "please override this";
  }

  getComponentStyleName() {
    throw "please override this";
  }

  get componentTest() {
    console.log(ApplicationComponentView.compoentLabelName);
    return this.appState.companyCustomise?.label[
      ApplicationComponentView.compoentLabelName
    ];
  }

  getComponentStyle(component) {
    if (this.appState.companyCustomise[component]) {
      return this.appState.companyCustomise[component];
    }
    return {};
  }
}

/**
 * @deprecated now we on es6 babel 7, we do not need this anymore
 * @param {*} style
 * @param {*} defaultValue
 * @param  {...any} keys
 * @returns
 */
export function getObjectValue(style, defaultValue, ...keys) {
  const recursionHelper = function (style, index, keys) {
    if (!style[keys[index]]) {
      return defaultValue;
    }
    if (index === keys.length - 1) {
      return style[keys[index]];
    }
    return recursionHelper(style[keys[index]], index + 1, keys);
  };
  return recursionHelper(style, 0, keys);
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

export function generateDynamicLabel(label, values) {
  console.log(label, values.length);
  for (let index = 0; index < values.length; index++) {
    label = label.replace(`$${index + 1}`, values[index]);
  }
  return label;
}
