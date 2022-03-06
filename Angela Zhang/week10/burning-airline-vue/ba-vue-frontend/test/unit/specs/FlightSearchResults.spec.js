import Vue from 'vue';
import { mount } from '@vue/test-utils';
import sinonChai from 'sinon-chai';

import FlightSearchResults from '@/components/FlightSearchResults'

import axios from 'axios';

describe('<FlightSearchResults>',() => {
    it('renders without errors', () => {
        const wrapper = mount(FlightSearchResults);
    });// it renders without errors
});// describe <FlightSearchResults>