import Taro from "@tarojs/taro";
import { AtTextarea, AtInput, AtFloatLayout } from "taro-ui";
import { View } from "@tarojs/components";
import ApplicationButton from "../../common/applicationButton";
import ApplicationComponent from "../../common/applicationComponent";
import { ItemHeader } from "../itemDetail/itemDetail.view";
import { MAKE_RESERVATION } from "../../service/service";

export default class ContactAgent extends ApplicationComponent {
  state = {
    ...this.state,
    clientName: "",
    phoneNumber: "",
  };

  render() {
    const { id, listingType, name, showAgency, toggleShowAgency } = this.props;
    const { clientName, phoneNumber } = this.state;
    return (
      <AtFloatLayout
        isOpened={showAgency}
        title="預約睇樓"
        onClose={toggleShowAgency}
      >
        <View style={{ marginLeft: 10, marginRight: 10 }}>
          <ItemHeader id={id} listingType={listingType} name={name} />
          <AtInput
            name="input1"
            customStyle={{ marginLeft: 0, marginTop: 15 }}
            onChange={(value) => this.setClientName(value)}
            placeholder="請輸入你的姓名"
            title="姓名"
            value={clientName}
          />
          <AtInput
            name="input2"
            customStyle={{ marginLeft: 0, marginTop: 15 }}
            onChange={(value) => this.setPhoneNumber(value)}
            placeholder="請輸入你的電話號碼"
            title="電話號碼"
            value={phoneNumber}
          />
          <AtTextarea
            count={false}
            customStyle={{ color: "#5F5F5F", marginTop: 15 }}
            disabled
            value={`你好，我想預約關於${id}:${name}，我的電話:${phoneNumber}`}
          />
          <ApplicationButton
            onClick={this.makeReservation}
            style={{ marginBottom: 15, marginTop: 30 }}
          >
            通知中介
          </ApplicationButton>
        </View>
      </AtFloatLayout>
    );
  }

  makeReservation = () => {
    const { clientName, phoneNumber } = this.state;
    this.serviceExecutor
      .execute(
        MAKE_RESERVATION({
          companyId: process.env.COMPANY_ID,
          itemId: this.props.id,
          requestCountryCode: "853",
          requestName: clientName,
          requestSmsNumber: phoneNumber,
        })
      )
      .then(() => this.onMakeReservationSuccess());
  };

  onMakeReservationSuccess() {
    Taro.showToast({
      title: "通知已發送",
      icon: "success",
      duration: 2000,
    });
    this.setState({ phoneNumber: "" });
    this.props.toggleShowAgency();
  }

  setClientName = (clientName) => {
    this.setState({
      clientName,
    });
  };

  setPhoneNumber = (phoneNumber) => {
    this.setState({
      phoneNumber,
    });
  };
}
