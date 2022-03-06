
// ... and because you can only export one default, the name is irrevelant, and you can name it whatever you want when you import it

//import all nammed exports from utils.js into a local object called 'utils'
//import * as utils from '@/lib/utils';

import adder,{subber, bigNum as num} from '@/lib/utils';
//      ^           ^
//  default-        named-    imports


describe('utils library', () => {

    describe('adder', () => {

        let result;
        beforeEach(()=> {
            result = adder(5, 8);
        });
        it('should add two number correctly', () => {
            // console.log('Does it work?', adder);
            // console.log('subber:', subber);
            // console.log('bigNum:', num);
            
            // const result = adder( 5, 8 );
            expect( result ).to.equal( 13 );
        });

        it('should return a number', () => {
            // const result = adder(5,8);
            expect( typeof result ).to.equal( 'number' );
        });

    });

    describe('subber', () => {

        it('should sub two number correctly', () => {
            const result = subber( 100, 30 );
            expect( result ).to.equal( 70 );
        });

    })

});