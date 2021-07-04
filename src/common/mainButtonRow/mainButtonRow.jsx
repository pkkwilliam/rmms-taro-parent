import React from "react";
import ApplicationComponent from "../applicationComponent";
import {
  RENT_SEGMENT,
  SELL_SEGMENT,
} from "../../pages/category/categorySegment";
import { CATEGORY } from "../../routes/applicationRoutes";
import MainButtonRowView from "./mainButtonRow.view";

export default class MainButtonRow extends ApplicationComponent {
  render() {
    return (
      <MainButtonRowView
        onClickBuySegment={this.onClickBuySegment}
        onClickRentSegment={this.onClickRentSegment}
        {...this.state}
      />
    );
  }

  onClickBuySegment = () => {
    this.appState.shortTermMemory.setShortTermMemory({
      currentSegmentTypeIndex: SELL_SEGMENT.index,
    });
    this.goToTabBar(CATEGORY);
  };

  onClickRentSegment = () => {
    this.appState.shortTermMemory.setShortTermMemory({
      // this is so wrong, not sure why we cant import value
      currentSegmentTypeIndex: RENT_SEGMENT.index,
    });
    this.goToTabBar(CATEGORY);
  };
}
