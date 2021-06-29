import React from "react";
import Taro from "@tarojs/taro";
import { AtTextarea, AtInput, AtFloatLayout } from "taro-ui";
import { View } from "@tarojs/components";
import ApplicationButton from "../../common/applicationButton";
import ApplicationComponent from "../../common/applicationComponent";
import { ItemHeader } from "../itemDetail/itemDetail.view";
import { MAKE_RESERVATION } from "../../service/service";
import { generateVariableLabel } from "../../common/applicationComponent.view";

export default class ContactAgent extends ApplicationComponent {
  state = {
    ...this.state,
    clientName: "",
    phoneNumber: "",
  };

  render() {
    const { common, contactAgent } = this.appState.companyCustomise.label;
    const { id, listingType, name, showAgency, toggleShowAgency } = this.props;
    const { clientName, phoneNumber } = this.state;
    return (
      <AtFloatLayout
        isOpened={showAgency}
        title={contactAgent.header}
        onClose={toggleShowAgency}
      >
        <View style={{ marginLeft: 10, marginRight: 10 }}>
          <ItemHeader
            id={id}
            commonLabel={common}
            listingType={listingType}
            name={name}
          />
          <AtInput
            name="input1"
            customStyle={{ marginLeft: 0, marginTop: 15 }}
            onChange={(value) => this.setClientName(value)}
            placeholder={contactAgent.nameInputPlaceHolder}
            title={contactAgent.nameInputTitle}
            value={clientName}
          />
          <AtInput
            name="input2"
            customStyle={{ marginLeft: 0, marginTop: 15 }}
            onChange={(value) => this.setPhoneNumber(value)}
            placeholder={contactAgent.phoneInputPlaceHolder}
            title={contactAgent.phoneInputTitle}
            value={phoneNumber}
          />
          <AtTextarea
            count={false}
            customStyle={{ color: "#5F5F5F", marginTop: 15 }}
            disabled
            value={generateVariableLabel(contactAgent.textAreaValue, [
              id,
              name,
              phoneNumber,
            ])}
          />
          <ApplicationButton
            onClick={this.makeReservation}
            style={{ marginBottom: 15, marginTop: 30 }}
          >
            {contactAgent.submitButton}
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
    const label = this.appState.companyCustomise.label.contactAgent;
    Taro.showToast({
      title: label.messageSent,
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
