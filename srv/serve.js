// const cds = require("@sap/cds");

// class Serve extends cds.ApplicationService {
//     async init() {
//         try{
//             console.log("Inside Consumer");
//             await super.init();

//             const msg = await cds.connect.to("messaging");
//             console.log("Inside Consumer Message = " + msg);
//             msg.on("com/sme/drifters/topic1", reg => {
//                 console.log("MyEvent-1 local", reg);
//             });
//         } catch(e){
//             console.log("In error : " + e);
//         }

//     }
// }

// module.exports = { Serve };