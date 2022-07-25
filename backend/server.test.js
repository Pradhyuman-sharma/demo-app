import test2 from './server'
import Keploy from 'typescript-sdk/src/keploy'
import {describe,test,beforeAll,afterAll,expect} from '@jest/globals'

describe("test function", ()=>{

    beforeAll( done=>{
       try{
           process.env.KEPLOY_MODE = "test"
            test2()
            console.log("test starting")

            done()
       }
        catch (err){
           done(err)
        }

    })
    test("should be running", async ()=> {


    //while(Keploy.testPassed === -1) {

    //}
   // setTimeout(async()=>
    const result = new Keploy()
        const res = result.test()

            await expect(res).resolves.toBeFalsy()
    //)
    });
    afterAll(()=>{
        if(process.env.KEPLOY_MODE="test"){
           process.exit(1);
        }
    })
})

