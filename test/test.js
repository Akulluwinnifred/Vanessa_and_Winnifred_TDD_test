import {expect} from "chai"
import {multiply} from "../multiply.js"

describe("multiplication" , function()
{
    //cycle 1
    it("one multiply 1 is 1" , () =>{
        var a = 1
        var b = 1

        var c = multiply(a,b)

        expect(c).to.equal(1)
    })

    //cycle 2
    it("one multiply 2 is 2" , () =>{
        var a = 2
        var b = 2

        var c = multiply(a,b)

        expect(c).to.equal(4)
    })

    //cycle 3
    it("one multiply 3 is 3" , () =>{
        var a = 3
        var b = 3

        var c = multiply(a,b)

        expect(c).to.equal(9)
    })

    //cycle 4
    it("one multiply 4 is 4" , () =>{
        var a = 4
        var b = 4

        var c = multiply(a,b)

        expect(c).to.equal(16)
    })
}
)