import uuid from '../uuid';

describe('uuid', function() {
    describe('#generate', function() {
        it('generates a number', function() {
           expect(uuid.generate()).to.be.a('number');
        });

        it('generates new number each call', function() {
            var first = uuid.generate(),
                second = uuid.generate();

            expect(first).not.to.be(second);
        });
    });
});
