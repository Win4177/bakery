/* =========================================================
   Pastry House Hippo — Menu data
   Edit this file to add, remove, or rename products.
   tags: "signature" | "gf" (gluten free) | "veg" (no meat) | "new"
   ========================================================= */

window.HIPPO_MENU = [
  {
    id: "bread",
    name: "Bread",
    note: "Our famous Japanese milk bread, sliced to order.",
    items: [
      { name: "Shokupan — Thin Cut", desc: "Japanese milk bread, 13 slices", tags: ["signature"] },
      { name: "Shokupan — Thick Cut", desc: "Japanese milk bread, 9 slices", tags: ["signature"] },
      { name: "Shokupan — Extra Thick Cut", desc: "Japanese milk bread, 6 slices", tags: ["signature"] },
      { name: "Miminashi Shokupan", desc: "Crustless milk bread, pillow-soft to the edge" },
      { name: "Whole Wheat Bread — Thin Cut", desc: "13 slices" },
      { name: "Whole Wheat Bread — Thick Cut", desc: "9 slices" },
      { name: "Black Sesame Shokupan", desc: "Nutty, aromatic milk bread" },
      { name: "Cranberry Bread", desc: "Studded with tart cranberries" },
      { name: "Raisin Bread", desc: "Sweet raisins in every slice" },
      { name: "Danish Bread", desc: "Buttery, flaky layered loaf" },
      { name: "English Bread", desc: "Classic toasting loaf" },
      { name: "Butter Top", desc: "Golden loaf finished with butter" }
    ]
  },
  {
    id: "sweet",
    name: "Sweet Buns",
    note: "Kashi pan — the soft, filled buns every Japanese bakery is loved for.",
    items: [
      { name: "Cream Pan", desc: "Filled with silky custard", tags: ["signature"] },
      { name: "UFO", desc: "Our signature custard inside", tags: ["signature"] },
      { name: "Melon Pan Choco", desc: "Crisp cookie crust, filled with chocolate chips" },
      { name: "Melon Pan Raisin", desc: "Crisp cookie crust, filled with raisins" },
      { name: "Matcha Anpan", desc: "Green tea bun with red bean" },
      { name: "Anpanman", desc: "Filled with red bean" },
      { name: "Panda", desc: "Filled with chocolate custard" },
      { name: "Kani", desc: "Crab-shaped bun with chocolate custard" },
      { name: "Kame", desc: "Turtle-shaped bun with chocolate custard" },
      { name: "Choco Cornet", desc: "Spiral bun filled with chocolate custard" },
      { name: "Ringo", desc: "Custard and apple chunks" },
      { name: "Coffee & Cream", desc: "Coffee bun with sweet cream" },
      { name: "Jam Pan", desc: "Filled with strawberry jam" },
      { name: "Tsubu An", desc: "Chunky red bean" },
      { name: "Koshi An", desc: "Smooth red bean" },
      { name: "Shiro An", desc: "Filled with white bean" },
      { name: "Yomogi An", desc: "Red bean with mugwort" },
      { name: "Kurumi An", desc: "Red bean and walnut" },
      { name: "Raisin Bun", desc: "Soft bun with raisins" }
    ]
  },
  {
    id: "savory",
    name: "Savory Buns",
    note: "Hearty, satisfying, and perfect for lunch on the go.",
    items: [
      { name: "Takoyaki", desc: "Octopus ball baked inside", tags: ["signature"] },
      { name: "Spam Cheese", desc: "Spam and melted cheese" },
      { name: "Hot Dog", desc: "100% beef" },
      { name: "Ham Roll", desc: "Ham with Kewpie mayonnaise" },
      { name: "Corn Mayo", desc: "Sweet corn and Kewpie mayonnaise" },
      { name: "Spinach & Bacon", desc: "Savory spinach and smoky bacon" },
      { name: "Onion Roll", desc: "Savory onion bun" },
      { name: "Focaccia", desc: "Olive oil herb bread" },
      { name: "Pão de Queijo", desc: "Brazilian cheese bread balls" }
    ]
  },
  {
    id: "cakes",
    name: "Cakes & Desserts",
    note: "Delicate Japanese-style slices, mousses, and puddings.",
    items: [
      { name: "Strawberry Shortcake", desc: "Fluffy sponge, fresh cream, strawberries", tags: ["signature"] },
      { name: "Japanese Rare Cheesecake", desc: "No-bake cheesecake with a hint of lemon", tags: ["signature"] },
      { name: "Chocolate Cake", desc: "Rich chocolate sponge and cream" },
      { name: "Green Tea Mousse", desc: "Light, earthy matcha mousse" },
      { name: "Strawberry Cheesecake", desc: "Creamy cheesecake with strawberry" },
      { name: "Strawberry Mousse", desc: "Airy strawberry mousse" },
      { name: "Mango Mousse", desc: "Bright, tropical mango mousse" },
      { name: "Mont Blanc", desc: "Chestnut cream cupcake" },
      { name: "Chocolate Mont Blanc", desc: "Chocolate cupcake with chocolate filling" },
      { name: "Tiramisu", desc: "Espresso, mascarpone, cocoa" },
      { name: "Pie Choux", desc: "Cream puff with strawberries, whipped cream, and custard" },
      { name: "English Afternoon", desc: "Earl Grey chocolate cream" },
      { name: "Baked Cheesecake", desc: "Classic baked cheesecake" },
      { name: "Baked Chocolate Cheesecake", desc: "Soufflé-like cheesecake with chocolate coating" },
      { name: "Mango Peach Roll", desc: "Roll cake with mango cream and peach chunks" },
      { name: "Gâteau Chocolat Classic", desc: "Flourless chocolate cake", tags: ["gf"] },
      { name: "Earl Grey Pound Cake", desc: "Fragrant tea-infused pound cake" },
      { name: "Whole Baked Cheesecake", desc: "Our baked cheesecake, whole" },
      { name: "Custard Pudding", desc: "Silky caramel custard" },
      { name: "Creamy Pudding", desc: "Smooth, rich milk pudding" },
      { name: "Black Sesame Pudding", desc: "Toasty, nutty sesame pudding" }
    ]
  },
  {
    id: "danish",
    name: "Danish & Croissants",
    note: "Laminated by hand for that shatter-crisp, buttery bite.",
    items: [
      { name: "Butter Croissant", desc: "Flaky, all-butter classic", tags: ["signature"] },
      { name: "Choco Croissant", desc: "Croissant with chocolate chunks" },
      { name: "Danish Cake", desc: "Apple chunks, sponge cake, and raisins" },
      { name: "Custard Danish", desc: "Golden pastry with custard" },
      { name: "Choco Custard", desc: "Filled with chocolate custard" },
      { name: "Fruit Danish", desc: "Fresh fruit with custard" },
      { name: "Strawberry Danish", desc: "Filled with strawberry jam" },
      { name: "Cream Cheese Danish", desc: "Topped with blueberry" },
      { name: "Pear Danish", desc: "Pear with custard" },
      { name: "Peach Danish", desc: "Sweet peach and pastry" },
      { name: "Banana Danish", desc: "Ripe banana and pastry" },
      { name: "Apple & Cream", desc: "Apple with sweet cream" },
      { name: "Maron", desc: "Chestnut" },
      { name: "Coffee Danish", desc: "Coffee icing and almonds" },
      { name: "Almond Rock", desc: "Crunchy almond pastry" },
      { name: "Cinnamon Raisin", desc: "Warm cinnamon swirl with raisins" }
    ]
  },
  {
    id: "french",
    name: "French Bread",
    note: "Crisp crusts, open crumb, baked throughout the day.",
    items: [
      { name: "Bacon Epi", desc: "Wheat-stalk baguette with bacon", tags: ["signature"] },
      { name: "Epi", desc: "Wheat-stalk French bread" },
      { name: "Baguette or Bâtard", desc: "Traditional French loaves" },
      { name: "Garlic French", desc: "Garlic butter French bread" },
      { name: "Cheese French", desc: "French bread with cheese" },
      { name: "Cranberry French", desc: "Filled with cream cheese and cranberry" },
      { name: "French Cream", desc: "French bread with sweet cream" },
      { name: "Coupe", desc: "Rustic scored French roll" }
    ]
  },
  {
    id: "donuts",
    name: "Donuts",
    note: "Japanese-style donuts, sweet and savory.",
    items: [
      { name: "Curry Donut", desc: "Crispy donut filled with curry (no meat)", tags: ["signature", "veg"] },
      { name: "Potato Donut", desc: "Filled with potato salad" },
      { name: "An Donut", desc: "Filled with red bean" },
      { name: "Twist Donut", desc: "Light, sugar-dusted twist" }
    ]
  },
  {
    id: "rolls",
    name: "Rolls",
    note: "Sold in bags of 5 — perfect for the family.",
    items: [
      { name: "Butter Roll", desc: "Bag of 5", tags: ["signature"] },
      { name: "Milk Pan", desc: "Milk bread sticks, bag of 5" },
      { name: "Choco Chip Roll", desc: "Bag of 5" },
      { name: "Cheddar Cheese Roll", desc: "Bag of 5" },
      { name: "Orange Roll", desc: "Bag of 5" },
      { name: "Raisin Sticks", desc: "Bag of 5" }
    ]
  },
  {
    id: "sandwiches",
    name: "Sandwiches",
    note: "Made fresh on our own shokupan and buns.",
    items: [
      { name: "Ichigo Sandwich", desc: "Strawberries and whipped cream on shokupan", tags: ["signature"] },
      { name: "Egg Sandwich", desc: "Creamy Japanese egg salad" },
      { name: "Fruit Sandwich", desc: "Seasonal fruit and cream" },
      { name: "Pork Katsu Sandwich", desc: "Crispy pork cutlet with katsu sauce" },
      { name: "Chicken Katsu Sandwich", desc: "Crispy chicken cutlet with katsu sauce" },
      { name: "Tuna Sandwich", desc: "Classic tuna salad" },
      { name: "Ham & Cheese Sandwich", desc: "Simple and satisfying" },
      { name: "Yakisoba Bun", desc: "Stir-fried noodles in a bun (no meat)", tags: ["veg"] },
      { name: "Croquette Bun", desc: "Vegetable croquette in a bun", tags: ["veg"] }
    ]
  },
  {
    id: "pie",
    name: "Pies & Cookies",
    note: "Little treats to go with your coffee or tea.",
    items: [
      { name: "Madeleines", desc: "Lemon, yuzu, or chocolate" },
      { name: "Matcha Cookie", desc: "Buttery green tea cookie" },
      { name: "Apple Pie", desc: "Flaky crust, spiced apples" },
      { name: "Apricot Stick", desc: "Puff pastry with apricot" }
    ]
  },
  {
    id: "weekend",
    name: "Weekend Only",
    note: "Available Saturdays and Sundays — come early.",
    items: [
      { name: "Ichigo Daifuku", desc: "Mochi with red bean and fresh strawberry", tags: ["signature"] },
      { name: "Daifuku", desc: "Mochi with red bean paste" },
      { name: "Ham & Cheese Danish", desc: "Savory flaky pastry" },
      { name: "Fruit Tart", desc: "Contains almond powder" }
    ]
  },
  {
    id: "seasonal",
    name: "Seasonal",
    note: "Limited-time favorites that return throughout the year.",
    items: [
      { name: "Sakura Anpan", desc: "White bean paste with real cherry blossom" },
      { name: "Sakura Daifuku", desc: "White bean paste with cherry blossom" },
      { name: "Pumpkin Pan", desc: "Sweet pumpkin custard" },
      { name: "Sweet Potato Tart", desc: "Autumn favorite" },
      { name: "Nikuman", desc: "Steamed bun with pork and vegetables" },
      { name: "Chikuwa Pan", desc: "Roll with cheese, seaweed, and chikuwa" },
      { name: "Nama Choco Daifuku", desc: "Mochi with fresh chocolate ganache" },
      { name: "Christmas Strawberry Shortcake", desc: "6\" or 8\"" },
      { name: "Christmas Chocolate Cake", desc: "6\"" },
      { name: "Christmas Baked Cheesecake", desc: "Holiday edition" },
      { name: "Valentine's Day Chocolate Cake", desc: "6\"" },
      { name: "Valentine's Day Strawberry Shortcake", desc: "6\"" },
      { name: "Mother's Day Baked Cheesecake", desc: "Seasonal special" }
    ]
  }
];
