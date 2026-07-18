import { render } from '@testing-library/react';

import FortuneFundingUi from './ui';

describe('FortuneFundingUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FortuneFundingUi />);
    expect(baseElement).toBeTruthy();
  });
});
