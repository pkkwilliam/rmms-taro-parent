import React, { Fragment } from "react";
import { ScrollView } from "@tarojs/components";
import { AtDivider, AtIcon } from "taro-ui";
import { CardContent } from "../landingPage/landingPage.view";
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
import ApplicationComponentView from "../../common/applicationComponent.view";

import "./itemDetail.scss";

export default class ItemDetailView extends ApplicationComponentView {
  render() {
    const { itemDetail, onClickSubmit = () => {} } = this.props;
    return (
      <this.Wrapper>
        <ImageCarousel imageUrls={itemDetail.imageUrls} />
        <Content onClickSubmit={onClickSubmit} {...itemDetail} />
      </this.Wrapper>
    );
  }
}

export function Content(props) {
  const {
    address,
    area,
    createTime,
    categories = [],
    cost,
    description,
    id,
    listingType,
    name,
    style,
    onClickSubmit,
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
  return (
    <CardContent style={{ height: "100%", justifyContent: "space-between" }}>
      <FlexView>
        <FlexView style={{ marginTop: 20 }}>
          <ItemHeader id={id} listingType={listingType} name={name} />
        </FlexView>
        <FlexView style={{ flexDirection: "row", ...style }}>{tags}</FlexView>
        <Info style={{ marginTop: 5 }}>{address}</Info>
        <ItemAbstractHeaders {...props} />
        <ScrollView scrollY style={{ height: 180 }}>
          <FlexView style={{ marginTop: 20 }}>
            <Description description={description} />
          </FlexView>
        </ScrollView>
      </FlexView>
      <FlexView style={{ marginBottom: 10 }}>
        <ApplicationButton block onClick={onClickSubmit}>
          預約睇樓
        </ApplicationButton>
      </FlexView>
    </CardContent>
  );
}

export function Description({ description }) {
  return (
    <Fragment>
      <FlexView
        style={{ alignItems: "center", flexDirection: "row", marginTop: 5 }}
      >
        <AtIcon value="tags" />
        <H2 style={{ marginLeft: 5 }}>房屋信息</H2>
      </FlexView>
      <FlexView style={{ marginTop: 15 }}>
        <H3 style={{ lineHeight: "38px" }}>{description}</H3>
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
  const { area, cost, livingRoom, restRoom, room } = props;
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
          label="價格"
        />
        <ItemAbstractHeader
          header={`${room}房${livingRoom}廳`}
          icon="numbered-list"
          iconColor="#d7471d"
          label="佈局"
        />
        <ItemAbstractHeader
          header={`${area}平方呎`}
          icon="home"
          iconColor="#007AFF"
          label="面積"
        />
      </FlexView>
    </Fragment>
  );
}

export function ItemHeader(props) {
  const { id, listingType, name } = props;
  return (
    <FlexView
      style={{
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <FlexView
        style={{
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <ListingTypeTag listingType={listingType} />
        <H1>{name}</H1>
      </FlexView>
      <ApplicationTag color="geekblue">ID: {id}</ApplicationTag>
    </FlexView>
  );
}
