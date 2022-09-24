import {happyHourLocations} from '../places';

describe('Places', () => {
	it('matches snapshot (sorry Zane)', () => {
		expect(happyHourLocations).toMatchSnapshot();
	});
});
