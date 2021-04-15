import { View, Text } from "@tarojs/components";
import { AtSearchBar } from "taro-ui";
import { AtList, AtListItem } from "taro-ui";

export default function CategoryView(props) {
  return (
    <View>
      <AtSearchBar />
      <View className="at-row">
        <View>
          <CategoryList {...props} />
        </View>
        <View className="at-col">
          <CateegoryItems {...props} />
        </View>
      </View>
    </View>
  );
}

function CategoryList(props) {
  const { categories, onClickCategory } = props;
  const CategoriesListItems = categories.map((category) => {
    const { id, name } = category;
    return (
      <AtListItem
        hasBorder={false}
        onClick={() => onClickCategory(category)}
        title={name}
      />
    );
  });
  return <AtList hasBorder={false}>{CategoriesListItems}</AtList>;
}

function CateegoryItems(props) {
  return <Text>hello</Text>;
}
