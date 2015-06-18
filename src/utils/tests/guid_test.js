import { guidFor, GUID_KEY } from '../guid';

describe('guidFor', function() {
    var obj = {}, guid;

    beforeEach(function() {
        guid = guidFor(obj);
    });

    it('should set a guid to the passed object', function() {
        expect(guid).to.be.ok();
    });

    it("should return object's guid if it was already set", function() {
        expect(guid).to.be(guidFor(obj));
    });

    it('should set guid to the object as property', function() {
        expect(guid).to.be(obj[GUID_KEY]);
    });

    it('should set guid as not numerable', function() {
        expect(Object.keys(obj)).to.be.empty();
    });

    it('should set guid as not writeable', function() {
        expect(() => { obj[GUID_KEY] = 'Custom guid'; }).to.throwError();
    });

    it('should set guid as not configurable', function() {
        expect(() => { delete obj[GUID_KEY]; }).to.throwError();
        expect(() => {
            Object.defineProperty(obj, GUID_KEY, {
                value: 'Custom guid'
            });
        }).to.throwError();
    });
});
