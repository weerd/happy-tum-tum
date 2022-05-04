import { render } from '@testing-library/react';

import Results from './Results';

const sampleFoods = [
  {
    name: 'alfalfa',
    category: 'legume',
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
    name: 'sweet potato',
    category: '',
    rating: 'low',
    servingSize: '1/2 cup',
  },
];

describe('Results component', () => {
  /* @test */
  it('shows a message if no results available', async () => {
    const resultsComponent = render(<Results />);

    const noResultsMessage = await resultsComponent.findByTestId('no-results');

    expect(noResultsMessage.textContent).toMatch(/sorry/i);
  });

  /* @test */
  it('shows a list of results when results available', async () => {
    const resultsComponent = render(<Results foods={sampleFoods} />);

    const results = await resultsComponent.findByTestId('results');

    expect(results.childElementCount).toEqual(3);
  });
});
