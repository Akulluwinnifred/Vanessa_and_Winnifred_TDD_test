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
}
)