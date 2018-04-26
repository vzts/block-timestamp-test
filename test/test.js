const Test = artifacts.require("./Test.sol")

contract("Test", accounts => {
    it("test", async function () {
        const instance = await Test.new()
        for (let i = 0; i < 100; i++) {
            console.log(await instance.test())
        }
    })
})