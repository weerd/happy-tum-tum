const foods = [
  {
    name: 'alfalfa',
    category: 'legume',
    rating: 'low',
    servingSize: null,
  },
  {
    name: 'bamboo shoots',
    category: '',
    rating: 'low',
    servingSize: null,
  },
  {
    name: 'bean sprouts',
    category: '',
    rating: 'low',
    servingSize: null,
  },
  {
    name: 'beetroot, canned and pickled',
    category: '',
    rating: 'low',
    servingSize: null,
  },
  {
    name: 'black beans',
    category: '',
    rating: 'low',
    servingSize: '1/4 cup / 45g',
  },
  {
    name: 'bok choy / pak choi',
    category: '',
    rating: 'low',
    servingSize: null,
  },
  {
    name: 'broccoli, whole',
    category: 'vegetable',
    rating: 'low',
    servingSize: '1/2 cup',
  },
  {
    name: 'broccoli, heads only',
    category: 'vegetable',
    rating: 'low',
    servingSize: '3/4 cup',
  },
  {
    name: 'broccoli, stalks only',
    category: 'vegetable',
    rating: 'low',
    servingSize: '1/2 cup',
  },
  {
    name: 'broccolini, whole',
    category: 'vegetable',
    rating: 'low',
    servingSize: '1/2 cup chopped',
  },
  {
    name: 'broccolini, heads only',
    category: 'vegetable',
    rating: 'low',
    servingSize: '1/2 cup',
  },
  {
    name: 'broccolini, stalks only',
    category: 'vegetable',
    rating: 'low',
    servingSize: '1 cup',
  },
  {
    name: 'brussels sprouts',
    category: 'vegetable',
    rating: 'low',
    servingSize: '2 sprouts',
  },
  {
    name: 'butternut squash',
    category: 'vegetable',
    rating: 'low',
    servingSize: '1/4 cup',
  },
  {
    name: 'cabbage, common and red',
    category: '',
    rating: 'low',
    servingSize: 'up to 1 cup',
  },
  {
    name: 'callaloo',
    category: '',
    rating: 'low',
    servingSize: null,
  },
  {
    name: 'carrots',
    category: '',
    rating: 'low',
    servingSize: null,
  },
  {
    name: 'celeriac',
    category: '',
    rating: 'low',
    servingSize: null,
  },
  {
    name: 'celery',
    category: '',
    rating: 'low',
    servingSize: 'less than 5cm of stalk',
  },
  {
    name: 'chicory leaves',
    category: '',
    rating: 'low',
    servingSize: null,
  },
  {
    name: 'chick peas',
    category: '',
    rating: 'low',
    servingSize: '1/4 cup',
  },
  {
    name: 'chilli – if tolerable',
    category: '',
    rating: 'low',
    servingSize: null,
  },
  {
    name: 'chives',
    category: '',
    rating: 'low',
    servingSize: null,
  },
  {
    name: 'cho cho',
    category: '',
    rating: 'low',
    servingSize: '1/2 cup diced',
  },
  {
    name: 'choy sum',
    category: '',
    rating: 'low',
    servingSize: null,
  },
  {
    name: 'collard greens',
    category: '',
    rating: 'low',
    servingSize: null,
  },
  {
    name: 'corn / sweet corn – if tolerable and only in small amounts',
    category: '',
    rating: 'low',
    servingSize: '1/2 cob',
  },
  {
    name: 'courgette',
    category: '',
    rating: 'low',
    servingSize: null,
  },
  {
    name: 'cucumber',
    category: '',
    rating: 'low',
    servingSize: null,
  },
  {
    name: 'eggplant / aubergine',
    category: '',
    rating: 'low',
    servingSize: null,
  },
  {
    name: 'fennel',
    category: '',
    rating: 'low',
    servingSize: null,
  },
  {
    name: 'green beans',
    category: '',
    rating: 'low',
    servingSize: null,
  },
  {
    name: 'green pepper / green bell pepper / green capsicum',
    category: '',
    rating: 'low',
    servingSize: null,
  },
  {
    name: 'ginger',
    category: '',
    rating: 'low',
    servingSize: null,
  },
  {
    name: 'kale',
    category: '',
    rating: 'low',
    servingSize: null,
  },
  {
    name: 'karela',
    category: '',
    rating: 'low',
    servingSize: null,
  },
  {
    name: 'leek leaves',
    category: '',
    rating: 'low',
    servingSize: null,
  },
  {
    name: 'lentils – in small amounts',
    category: '',
    rating: 'low',
    servingSize: null,
  },
  {
    name: 'butter lettuce',
    category: '',
    rating: 'low',
    servingSize: null,
  },
  {
    name: 'iceberg lettuce',
    category: '',
    rating: 'low',
    servingSize: null,
  },
  {
    name: 'radicchio lettuce',
    category: '',
    rating: 'low',
    servingSize: null,
  },
  {
    name: 'red coral lettuce',
    category: '',
    rating: 'low',
    servingSize: null,
  },
  {
    name: 'rocket lettuce',
    category: '',
    rating: 'low',
    servingSize: null,
  },
  {
    name: 'romaine/cos lettuce',
    category: '',
    rating: 'low',
    servingSize: null,
  },
  {
    name: 'marrow',
    category: '',
    rating: 'low',
    servingSize: null,
  },
  {
    name: 'okra',
    category: '',
    rating: 'low',
    servingSize: null,
  },
  {
    name: 'olives',
    category: '',
    rating: 'low',
    servingSize: null,
  },
  {
    name: 'parsnip',
    category: '',
    rating: 'low',
    servingSize: null,
  },
  {
    name: 'peas, snow',
    category: '',
    rating: 'low',
    servingSize: '5 pods',
  },
  {
    name: 'pickled gherkins',
    category: '',
    rating: 'low',
    servingSize: null,
  },
  {
    name: 'pickled onions, large',
    category: '',
    rating: 'low',
    servingSize: null,
  },
  {
    name: 'potato',
    category: '',
    rating: 'low',
    servingSize: null,
  },
  {
    name: 'pumpkin',
    category: '',
    rating: 'low',
    servingSize: null,
  },
  {
    name: 'pumpkin, canned',
    category: '',
    rating: 'low',
    servingSize: '1/4 cup, 2.2 oz',
  },
  {
    name: 'radish',
    category: '',
    rating: 'low',
    servingSize: null,
  },
  {
    name: 'red peppers / red bell pepper / red capsicum',
    category: '',
    rating: 'low',
    servingSize: null,
  },
  {
    name: 'scallions / spring onions (green part)',
    category: '',
    rating: 'low',
    servingSize: null,
  },
  {
    name: 'seaweed / nori',
    category: '',
    rating: 'low',
    servingSize: null,
  },
  {
    name: 'silverbeet / chard',
    category: '',
    rating: 'low',
    servingSize: null,
  },
  {
    name: 'spaghetti squash',
    category: '',
    rating: 'low',
    servingSize: null,
  },
  {
    name: 'spinach, baby',
    category: '',
    rating: 'low',
    servingSize: null,
  },
  {
    name: 'squash',
    category: '',
    rating: 'low',
    servingSize: null,
  },
  {
    name: 'sun-dried tomatoes',
    category: '',
    rating: 'low',
    servingSize: '4 pieces',
  },
  {
    name: 'swede',
    category: '',
    rating: 'low',
    servingSize: null,
  },
  {
    name: 'swiss chard',
    category: '',
    rating: 'low',
    servingSize: null,
  },
  {
    name: 'sweet potato',
    category: '',
    rating: 'low',
    servingSize: '1/2 cup',
  },
  {
    name: 'tomato – canned, cherry, common, roma',
    category: '',
    rating: 'low',
    servingSize: null,
  },
  {
    name: 'tomatillos – canned',
    category: '',
    rating: 'low',
    servingSize: null,
  },
  {
    name: 'turnip',
    category: '',
    rating: 'low',
    servingSize: null,
  },
  {
    name: 'water chestnuts',
    category: '',
    rating: 'low',
    servingSize: null,
  },
  {
    name: 'yam',
    category: '',
    rating: 'low',
    servingSize: null,
  },
  {
    name: 'zucchini ',
    category: '',
    rating: 'low',
    servingSize: null,
  },
  {
    name: 'ackee',
    category: '',
    rating: 'low',
    servingSize: null,
  },
  {
    name: 'bananas, unripe',
    category: '',
    rating: 'low',
    servingSize: null,
  },
  {
    name: 'bilberries',
    category: '',
    rating: 'low',
    servingSize: null,
  },
  {
    name: 'blueberries',
    category: '',
    rating: 'low',
    servingSize: null,
  },
  {
    name: 'breadfruit',
    category: '',
    rating: 'low',
    servingSize: null,
  },
  {
    name: 'carambola',
    category: '',
    rating: 'low',
    servingSize: null,
  },
  {
    name: 'cantaloupe',
    category: '',
    rating: 'low',
    servingSize: null,
  },
  {
    name: 'cranberry',
    category: '',
    rating: 'low',
    servingSize: '1 tbsp',
  },
  {
    name: 'clementine',
    category: '',
    rating: 'low',
    servingSize: null,
  },
  {
    name: 'dragon fruit',
    category: '',
    rating: 'low',
    servingSize: null,
  },
  {
    name: 'lingonberries',
    category: '',
    rating: 'low',
    servingSize: null,
  },
  {
    name: 'grapes',
    category: '',
    rating: 'low',
    servingSize: null,
  },
  {
    name: 'guava, ripe',
    category: '',
    rating: 'low',
    servingSize: null,
  },
  {
    name: 'honeydew and galia melons',
    category: '',
    rating: 'low',
    servingSize: null,
  },
  {
    name: 'kiwifruit',
    category: '',
    rating: 'low',
    servingSize: null,
  },
  {
    name: 'lemon including lemon juice',
    category: '',
    rating: 'low',
    servingSize: null,
  },
  {
    name: 'lime including lime juice',
    category: '',
    rating: 'low',
    servingSize: null,
  },
  {
    name: 'mandarin',
    category: '',
    rating: 'low',
    servingSize: null,
  },
  {
    name: 'orange',
    category: '',
    rating: 'low',
    servingSize: null,
  },
  {
    name: 'passion fruit',
    category: '',
    rating: 'low',
    servingSize: null,
  },
  {
    name: 'paw paw',
    category: '',
    rating: 'low',
    servingSize: null,
  },
  {
    name: 'papaya',
    category: '',
    rating: 'low',
    servingSize: null,
  },
  {
    name: 'pineapple',
    category: '',
    rating: 'low',
    servingSize: null,
  },
  {
    name: 'plantain, peeled',
    category: '',
    rating: 'low',
    servingSize: null,
  },
  {
    name: 'prickly pear / nopales',
    category: '',
    rating: 'low',
    servingSize: null,
  },
  {
    name: 'raspberry',
    category: '',
    rating: 'low',
    servingSize: null,
  },
  {
    name: 'rhubarb',
    category: '',
    rating: 'low',
    servingSize: null,
  },
  {
    name: 'strawberry',
    category: '',
    rating: 'low',
    servingSize: null,
  },
  {
    name: 'tamarind',
    category: '',
    rating: 'low',
    servingSize: null,
  },
  {
    name: 'tangelo',
    category: '',
    rating: 'low',
    servingSize: null,
  },
];

// Export foods list in alphabetical order.
// @TODO: Potentially use getInitialProps that runs for App on the server first?
export default foods.sort((item1, item2) => {
  return item1.name < item2.name ? -1 : item1.name > item2.name ? 1 : 0;
});
