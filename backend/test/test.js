const {test2} = require('../server')
//import Keploy from 'typescript-sdk/src/keploy'
const {keploy}  = require('typescript-sdk/dist/integrations/express/register')
const {describe,test,before,after}=  require('mocha')

const assert = require('assert')
describe("test function", ()=>{

    before( (done)=>{
           keploy.setTestMode();
            test2()
            console.log("test starting")
            done()
    })
    test("should be running", async ()=> {
          //while(Keploy.testPassed === -1) {
    //}
   // setTimeout(async()=>

    //const result = new Keploy()
      await keploy.assertTests();
        //)
    });
    after(()=>{
           process.exit(1);

    })
})

