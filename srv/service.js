const cds = require('@sap/cds');
const { request } = require('express');

module.exports = cds.service.impl( async srv => {

	console.log("Inside Read impl");
	//const { Authors } = this.entities;

	// const msg = await cds.connect.to("messaging");
	// console.log("Message = " + msg);

	srv.after('READ', "Authors", async (req) => {
		console.log("Inside Read event");

		//const tx = msg.transaction(req);
		//console.log(" Transaction = " + tx);

		// msg.emit("com/sme/drifters/topic1", {
		// 	"data": "MyData"
		// });

		console.log("Event send on READ and return is = ");
		return;
	});

});