const blogAutoReader = require("./blogAutoReader")
// @ponicode
describe("blogAutoReader", () => {
    test("0", () => {
        let callFunction = () => {
            blogAutoReader("foo bar", () => "return callback value", () => "return callback value")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            blogAutoReader("Hello, world!", () => "return callback value", () => "return callback value")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            blogAutoReader("This is a Text", () => "return callback value", () => "return callback value")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            blogAutoReader(undefined, undefined, () => "")
        }
    
        expect(callFunction).not.toThrow()
    })
})
