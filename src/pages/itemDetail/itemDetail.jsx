import React from "react";
import ApplicationComponent from "../../common/applicationComponent";
import ItemDetailView from "./itemDetail.view";
import { GET_ITEM } from "../../service/service";

export default class ItemDetail extends ApplicationComponent {
  state = {
    ...this.state,
    itemDetail: { imageUrls: [] },
    showAgency: false,
  };

  componentDidMount() {
    const companyId = this.appState.company.id;
    const { itemId } = this.getRouterParams();
    this.getLocalItemDetail(companyId, itemId);
  }

  render() {
    const { common, itemDetail } = this.appState.companyCustomise.label;
    return (
      <ItemDetailView
        {...this.state}
        commonLabel={common}
        label={itemDetail}
        toggleShowAgency={this.toggleShowAgency}
      />
    );
  }

  getLocalItemDetail(companyId, itemId) {
    this.appStateService.getItems().then((items) =>
      items.map((item) => {
        if (item.id == itemId) {
          this.setState({ itemDetail: item });
        }
      })
    );
  }

  getRemoteItemDetail(companyId, itemId) {
    this.serviceExecutor
      .execute(GET_ITEM(companyId, itemId))
      .then((itemDetail) =>
        this.setState({
          itemDetail,
        })
      );
  }

  toggleShowAgency = () => {
    this.setState((state) => ({
      showAgency: !state.showAgency,
    }));
  };
}
