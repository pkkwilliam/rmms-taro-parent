import React from "react";
import ApplicationComponent from "../../common/applicationComponent";
import ItemDetailView from "./itemDetail.view";
import { GET_ITEM } from "../../service/service";

export default class ItemDetail extends ApplicationComponent {
  state = {
    ...this.state,
    itemDetail: { imageUrls: [] },
  };

  componentDidMount() {
    const companyId = this.appState.company.id;
    const { itemId } = this.getRouterParams();
    this.getLocalItemDetail(companyId, itemId);
  }

  render() {
    return <ItemDetailView {...this.state} />;
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
}
