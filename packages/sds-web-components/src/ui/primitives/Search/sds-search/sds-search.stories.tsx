import { Components } from '../../../../components';
import { spread } from '../../../../utils/storybook-helpers';
import { withActions } from '@storybook/addon-actions/decorator';
import type { Meta, StoryObj } from '@storybook/html';

type ComponentArgs = Components.SdsSearch;

const fruitsList = `[
  'Acai',
  'Aceola',
  'Alfalfa Sprouts',
  'Apple',
  'Apricot',
  'Apricots',
  'Artichoke',
  'Asian Pear',
  'Asparagus',
  'Atemoya',
  'Avocado',
  'Bamboo Shoots',
  'Banana',
  'Bean Sprouts',
  'Beans',
  'Beets',
  'Belgian Endive',
  'Bell Peppers',
  'Bitter Melon',
  'Blackberries',
  'Blackberry',
  'Blueberries',
  'Bok Choy',
  'Boniato',
  'Boysenberries',
  'Broccoflower',
  'Broccoli',
  'Brussels Sprouts',
  'Cabbage',
  'Cactus Pear',
  'Camu Camu berry',
  'Cantaloupe',
  'Carambola',
  'Carrots',
  'Casaba Melon',
  'Cauliflower',
  'Celery',
  'Chayote',
  'Cherimoya',
  'Cherries',
  'Coconut',
  'Coconuts',
  'Collard Greens',
  'Corn',
  'Cranberries',
  'Cranberry',
  'Cucumber',
  'Currents',
  'Dates',
  'Dried Plums',
  'Durian',
  'Eggplant',
  'Endive',
  'Escarole',
  'Feijoa',
  'Fennel',
  'Fig',
  'Figs',
  'Garlic',
  'Goji berries',
  'Gooseberries',
  'Gooseberry',
  'Grapefruit',
  'Grapes',
  'Green Beans',
  'Green Onions',
  'Greens',
  'Guava',
  'Hominy',
  'Honeydew Melon',
  'Horned Melon',
  'Iceberg Lettuce',
  'Jackfruit',
  'Jerusalem Artichoke',
  'Jicama',
  'Kale',
  'Kiwi',
  'Kiwifruit',
  'Kohlrabi',
  'Kumquat',
  'Leeks',
  'Lemon',
  'Lemons',
  'Lettuce',
  'Lima Beans',
  'Lime',
  'Limes',
  'Longan',
  'Loquat',
  'Lucuma',
  'Lychee',
  'Madarins',
  'Malanga',
  'Mandarin Oranges',
  'Mango',
  'Mangos',
  'Mangosteen',
  'Melon',
  'Mulberries',
  'Mulberry',
  'Mushrooms',
  'Napa',
  'Nectarine',
  'Nectarines',
  'Okra',
  'Onion',
  'Orange',
  'Oranges',
  'Papaya',
  'Papayas',
  'Parsnip',
  'Passion Fruit',
  'Peach',
  'Peaches',
  'Pear',
  'Pears',
  'Peas',
  'Peppers',
  'Persimmons',
  'Pineapple',
  'Plantains',
  'Plum',
  'Plums',
  'Pomegranate',
  'Pomelo',
  'Potatoes',
  'Prickly Pear',
  'Prunes',
  'Pummelo',
  'Pumpkin',
  'Quince',
  'Radicchio',
  'Radishes',
  'Raisins',
  'Raspberries',
  'Red Cabbage',
  'Rhubarb',
  'Romaine Lettuce',
  'Rutabaga',
  'Shallots',
  'Snow Peas',
  'Spinach',
  'Sprouts',
  'Squash',
  'Strawberries',
  'String Beans',
  'Sweet Potato',
  'Tangelo',
  'Tangerine/Clementine',
  'Tangerines',
  'Tomatillo',
  'Tomato',
  'Turnip',
  'Ugli Fruit',
  'Water Chestnuts',
  'Watercress',
  'Watermelon',
  'Waxed Beans',
  'Yams',
  'Yellow Squash',
  'Yuca/Cassava',
  'Zucchini Squash',
]`;

const meta = {
  title: 'SDS primitives/Inputs/Search',
  tags: ['autodocs'],
  parameters: { layout: 'centered', actions: { handles: ['sds-search'] } },
  component: 'sds-search',
  render: args => `
    <sds-search ${spread(args)}></sds-search>

    <script>
      document.addEventListener('DOMContentLoaded', () => {
        const allResults = ${fruitsList};
        const search = document.querySelector('sds-search');
        search.results = [];

        search.addEventListener('sds-search', (e) => {
          const term = e.detail.searchTerm
          const results = term ? allResults.filter((fruit) => fruit.match(new RegExp(term, "i"))) : [];
          search.results = results;
        });
      });
    </script>
  `,
  decorators: [withActions],
} satisfies Meta<ComponentArgs>;

export default meta;

type Story = StoryObj<ComponentArgs>;
export const Primary: Story = {
  args: {
    ariaLabel: 'Search for stuff',
  },
};
