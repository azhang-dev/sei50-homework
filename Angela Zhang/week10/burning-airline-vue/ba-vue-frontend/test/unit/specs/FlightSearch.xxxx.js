import Vue from 'vue';
import { mount } from '@vue/test-utils';

import FlightSearch from '@/components/FlightSearch'
import sinonChai from 'sinon-chai';

const $router = {
    push: sinon.spy() // a spy is a mock that keeps track of weather how it was called
};
describe('<FlightSearch>', () => {

    it('should render a search form', async ()=> {
        const wrapper = mount(
            FlightSearch,
            {
                mocks: {
                    $router: {
                        push: function(args){
                            console.log('FAKE $router.push() called:',args);
                        }
                    }
                }
            }
            );

        // console.log('wrapper:', wrapper.html());
        expect(wrapper.text()).to.contain('Search Flight');

        const options = wrapper.findAll('option');
        console.log(options.at(1).html());
        expect(options.at(1).text()).to.equal('SYD');

        const button = wrapper.find('button');
        expect(button.element.tagName).to.equal('BUTTON');

        // simulate user click on the search button
        await button.trigger('click');
    });



}); //describe <FlightSearch>