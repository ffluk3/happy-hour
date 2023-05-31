import places from '../places.json';

describe('Places', () => {
	it('matches snapshot (sorry Zane)', () => {
		expect(Object.keys(places)).toMatchSnapshot();
	});
});
