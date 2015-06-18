export default {
    uuid: 0,

    generate() {
        this.uuid++;

        return this.uuid;
    }
};
