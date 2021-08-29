const rewire = require("rewire")
const HomeScreen = rewire("./HomeScreen")
const handleLearnMorePress = HomeScreen.__get__("handleLearnMorePress")
// @ponicode
describe("handleLearnMorePress", () => {
    test("0", () => {
        let callFunction = () => {
            handleLearnMorePress()
        }
    
        expect(callFunction).not.toThrow()
    })
})
