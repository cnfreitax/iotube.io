import { render } from 'utils/test';
import { VideoContainer } from '.';

describe('[container] Video', () => {
  it('should match snapshot', () => {
    const sut = render(<VideoContainer />)
      expect(sut).toMatchSnapshot()
  });
});
