const foods = [
  {
      name: "漢堡",
      image: "food/burger.jpg"
  },
  {
      name: "炒飯",
      image: "food/fried_rice.jpeg"
  },
  {
      name: "冰淇淋",
      image: "food/ice_cream.jpeg"
  },
  {
      name: "糖果",
      image: "food/candy.jpeg"
  },
  {
      name: "巧克力",
      image: "food/chocolate.jpeg"
  },
  {
      name: "披薩",
      image: "food/pizza.jpeg"
  },
  {
      name: "沙拉",
      image: "food/salad.jpeg"
  },
  {
      name: "牛排",
      image: "food/steak.jpeg"
  },
  {
      name: "壽司",
      image: "food/sushi.jpeg"
  },
  {
      name: "麵包",
      image: "food/bread.jpeg"
  },
  {
      name: "蛋糕",
      image: "food/cake.jpeg"
  },
  {
      name: "炸雞",
      image: "food/fried_chicken.jpeg"
  }
  // 继续添加更多食物
];

function getRandomFood() {
  if (foods.length === 0) {
      return null;
  }

  const randomIndex = Math.floor(Math.random() * foods.length);
  const selectedFood = foods[randomIndex];
  foods.splice(randomIndex, 1); // 从数据中移除已选择的食物
  return selectedFood;
}
