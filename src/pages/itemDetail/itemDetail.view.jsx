import React, { Fragment } from "react";
import { AtDivider, AtIcon } from "taro-ui";
import CardContent from "../../common/cardContent";
import { ListingTypeTag } from "../category/category.view";
import ImageCarousel from "../../common/imageCarousel";
import H1 from "../../common/text/h1";
import H3 from "../../common/text/h3";
import P from "../../common/text/paragraph";
import FlexView from "../../common/flexView";
import ApplicationTag from "../../common/applicationTag";
import H2 from "../../common/text/h2";
import ApplicationButton from "../../common/applicationButton";
import Info from "../../common/text/info";
import ApplicationComponentView, {
  generateVariableLabel,
} from "../../common/applicationComponent.view";
import ContactAgent from "../contactAgent/contactAgent";

import "./itemDetail.scss";

export default class ItemDetailView extends ApplicationComponentView {
  render() {
    const { itemDetail, label, showAgency, toggleShowAgency } = this.props;
    const { id, listingType, name } = itemDetail;
    return (
      <this.Wrapper>
        <ImageCarousel imageUrls={itemDetail.imageUrls} />
        <CardContent style={{ height: "100%" }}>
          <Content
            onClickSubmit={toggleShowAgency}
            {...itemDetail}
            {...this.props}
          />
          <ContactAgent
            id={id}
            listingType={listingType}
            name={name}
            showAgency={showAgency}
            toggleShowAgency={toggleShowAgency}
          />
          <MakeReservation label={label} onClickSubmit={toggleShowAgency} />
        </CardContent>
      </this.Wrapper>
    );
  }
}

export function Content(props) {
  const {
    address,
    area,
    commonLabel,
    categories = [],
    cost,
    createTime,
    description,
    id,
    isFavoriteItem,
    label,
    listingType,
    name,
    onClickFavorite,
    style,
  } = props;
  const tags = categories.map((category, index) => (
    <ApplicationTag
      color="yellow"
      key={"ApplicationTag" + index}
      style={{ marginRight: 5 }}
    >
      {category.name}
    </ApplicationTag>
  ));
  const favoriteItemTag = (
    <AtIcon
      onClick={onClickFavorite}
      color="#FDCC0D"
      value={isFavoriteItem ? "star-2" : "star"}
    />
  );
  return (
    <Fragment>
      <FlexView style={{ marginTop: 15 }}>
        <ItemHeader
          id={id}
          commonLabel={commonLabel}
          listingType={listingType}
          name={name}
        />
      </FlexView>
      <FlexView
        style={{
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <FlexView
          style={{
            flexDirection: "row",
            ...style,
          }}
        >
          {tags}
        </FlexView>
        <FlexView>{favoriteItemTag}</FlexView>
      </FlexView>
      <Info style={{ marginTop: 5 }}>{address}</Info>
      <ItemAbstractHeaders {...props} />

      <FlexView style={{ marginTop: 15 }}>
        <Description description={description} label={label} />
      </FlexView>
    </Fragment>
  );
}

export function Description({ description, label }) {
  return (
    <Fragment>
      <FlexView
        style={{ alignItems: "center", flexDirection: "row", marginTop: 5 }}
      >
        <AtIcon value="tags" />
        <H2 style={{ marginLeft: 5 }}>{label.detailHeader}</H2>
      </FlexView>
      <FlexView style={{ marginTop: 5 }}>
        <H3 style={{ lineHeight: "28px" }}>{description}</H3>
      </FlexView>
    </Fragment>
  );
}

export function ItemAbstractHeader({ header, icon, iconColor, label }) {
  return (
    <FlexView style={{ alignItems: "center" }}>
      <FlexView style={{ alignItems: "center", flexDirection: "row" }}>
        <AtIcon color={iconColor} value={icon} />
        <P style={{ marginLeft: 5 }}>{label}</P>
      </FlexView>
      <H3 companyColor style={{ fontWeight: 600, marginTop: 8 }}>
        {header}
      </H3>
    </FlexView>
  );
}

export function ItemAbstractHeaders(props) {
  const { area, cost, label, livingRoom, restRoom, room } = props;
  const {
    areaHeader = "",
    areaSuffix,
    layoutHeader = "",
    priceHeader = "",
  } = label;
  return (
    <Fragment>
      <AtDivider height={60} />
      <FlexView
        style={{ flexDirection: "row", justifyContent: "space-around" }}
      >
        <ItemAbstractHeader
          header={parseInt(cost).toLocaleString()}
          icon="money"
          iconColor="#85BB65"
          label={priceHeader}
        />
        <ItemAbstractHeader
          header={generateVariableLabel(label.layoutValue, [livingRoom, room])}
          icon="numbered-list"
          iconColor="#d7471d"
          label={layoutHeader}
        />
        <ItemAbstractHeader
          header={`${parseInt(area).toLocaleString()}${areaSuffix}`}
          icon="home"
          iconColor="#007AFF"
          label={areaHeader}
        />
      </FlexView>
    </Fragment>
  );
}

export function ItemHeader(props) {
  const { commonLabel, id, listingType, name } = props;
  return (
    <FlexView
      style={{
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <H1 style={{ marginTop: 5 }}>{name}</H1>
      <FlexView
        style={{ flexDirection: "row", justifyContent: "space-between" }}
      >
        <ListingTypeTag commonLabel={commonLabel} listingType={listingType} />
        <ApplicationTag color="geekblue">ID: {id}</ApplicationTag>
      </FlexView>
    </FlexView>
  );
}

export function MakeReservation({ label, onClickSubmit }) {
  return (
    <FlexView style={{ flex: 1, justifyContent: "flex-end" }}>
      <ApplicationButton
        block
        onClick={onClickSubmit}
        style={{ marginBottom: 15 }}
      >
        {label.submitButton}
      </ApplicationButton>
    </FlexView>
  );
}
