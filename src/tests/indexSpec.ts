const myFunc = (num: number) => {
    return num * num;
};
// it("expect myFunc(5) to equal 25", () => {
//     expect(myFunc(5)).toEqual(25);
// });

describe("someting", () => {
    it("expect myFunc(5) to equal 25", () => {
        expect(myFunc(5)).toEqual(25);
    });
});
