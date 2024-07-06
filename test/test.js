import {expect} from "chai"
import {multiply} from "../multiply.js"

describe("multiplication" , function()
{
    //cycle 1
    it("1 multiply 1 is 1" , () =>{
        var a = 1
        var b = 1

        var c = multiply(a,b)

        expect(c).to.equal(1)
    })

    //cycle 2
    it("2 multiply 2 is 4" , () =>{
        var a = 2
        var b = 2

        var c = multiply(a,b)

        expect(c).to.equal(4)
    })

    //cycle 3
    it("3 multiply 3 is 9" , () =>{
        var a = 3
        var b = 3

        var c = multiply(a,b)

        expect(c).to.equal(9)
    })

    //cycle 4
    it("4 multiply 4 is 16" , () =>{
        var a = 4
        var b = 4

        var c = multiply(a,b)

        expect(c).to.equal(16)
    })

    //cycle 5
    it("23 multiply 45 is 1035" , () =>{
        var a = 23
        var b = 45

        var c = multiply(a,b)

        expect(c).to.equal(1035)
    })
}
)