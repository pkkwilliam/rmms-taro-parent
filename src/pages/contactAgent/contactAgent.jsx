import React from "react";
import Taro from "@tarojs/taro";
import { AtTextarea, AtInput, AtFloatLayout } from "taro-ui";
import { View } from "@tarojs/components";
import ApplicationButton from "../../common/applicationButton";
import { ItemHeader } from "../itemDetail/itemDetail.view";
import { MAKE_RESERVATION } from "../../service/service";
import ApplicationComponentView, {
  generateDynamicLabel,
} from "../../common/applicationComponent.view";

export default class ContactAgent extends ApplicationComponentView {
  getComponentLabelName() {
    return "contactAgentLabel";
  }

  getComponentStyleName() {
    return "contactAgentStyle";
  }

  state = {
    ...this.state,
    clientName: "",
    phoneNumber: "",
  };

  render() {
    const contactAgentLabel = this.componentLabel;
    const { id, listingType, name, showAgency, toggleShowAgency } = this.props;
    const { clientName, phoneNumber } = this.state;
    return (
      <AtFloatLayout
        isOpened={showAgency}
        title={contactAgentLabel?.header?.value}
        onClose={toggleShowAgency}
      >
        <View style={{ marginLeft: 10, marginRight: 10 }}>
          <ItemHeader id={id} listingType={listingType} name={name} />
          <AtInput
            name="input1"
            customStyle={{ marginLeft: 0, marginTop: 15 }}
            onChange={(value) => this.setClientName(value)}
            placeholder={contactAgentLabel?.nameInputPlaceHolder?.value}
            title={contactAgentLabel?.nameInputTitle?.value}
            value={clientName}
          />
          <AtInput
            name="input2"
            customStyle={{ marginLeft: 0, marginTop: 15 }}
            onChange={(value) => this.setPhoneNumber(value)}
            placeholder={contactAgentLabel?.phoneInputPlaceHolder?.value}
            title={contactAgentLabel?.phoneInputTitle?.value}
            value={phoneNumber}
          />
          <AtTextarea
            count={false}
            customStyle={{ color: "#5F5F5F", marginTop: 15 }}
            disabled
            value={generateDynamicLabel(
              contactAgentLabel?.textAreaValue?.value,
              [id, name, phoneNumber]
            )}
          />
          <ApplicationButton
            onClick={this.makeReservation}
            style={{ marginBottom: 15, marginTop: 30 }}
          >
            {contactAgentLabel?.submitButton?.value}
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
    const { messageSent } = this.componentLabel;
    Taro.showToast({
      title: messageSent?.value,
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
