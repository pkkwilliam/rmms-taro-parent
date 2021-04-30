import { AtTag } from "taro-ui";
import ApplicationComponentView from "./applicationComponent.view";
import FlexView from "./flexView";

const COLORS = {
  blue: { backgroundColor: "#e6f8ff", border: "#90d5ff", color: "#086dd9" },
  cyan: { backgroundColor: "#e7fffb", border: "#87e8de", color: "#189fa2" },
  geekblue: { backgroundColor: "#f0f5ff", border: "#adc6ff", color: "#314ac9" },
  green: { backgroundColor: "#fcffe6", border: "#b7eb8f", color: "#389e0f" },
  lime: { backgroundColor: "#f6ffed", border: "#ecff98", color: "#8ebe22" },
  orange: { backgroundColor: "#fff7e6", border: "#ffd99a", color: "#da8029" },
  purple: { backgroundColor: "#f9f0ff", border: "#d3adf7", color: "#5e2ab0" },
  red: { backgroundColor: "#fff1f0", border: "#ffaba7", color: "#d63b45" },
  volcano: { backgroundColor: "#fff2e8", border: "#ffc19f", color: "#d7471d" },
  yellow: { backgroundColor: "#fffbe6", border: "#ffecac", color: "#d89219" },
};

export default class ApplicationTag extends ApplicationComponentView {
  render() {
    const { children, color, style } = this.props;
    return (
      <AtTag
        circle
        customStyle={{
          padding: 0,
          width: "max-content",
          ...COLORS[color],
          ...style,
        }}
        type="primary"
        {...this.props}
      >
        <FlexView style={{ paddingLeft: 6, paddingRight: 6 }}>
          {children}
        </FlexView>
      </AtTag>
    );
  }
}
