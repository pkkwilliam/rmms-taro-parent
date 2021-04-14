import { Button, Text, View } from "@tarojs/components";

export default function CategoryView(props) {
  return (
    <View>
      <Text>CategoryView</Text>
      <CategoryList {...props} />
    </View>
  );
}

function CategoryList(props) {
  const { categories } = props;
  return categories.map((category) => {
    const { id, name } = category;
    return <Button>{name}</Button>;
  });
}
