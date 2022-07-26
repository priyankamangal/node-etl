const mongoose = require("mongoose");

var NestDeviceSchema = new mongoose.Schema({

    name: {
        type: String
    },
	type: {
		type: String
	},
	assignee: {
		type: String
	},
	traits: {
        sdm_devices_traits_Info: {
			customName: String
		},
		sdm_devices_traits_Humidity: {
			ambientHumidityPercent: Number
		},
		sdm_devices_traits_Connectivity: {
			status: String
		},
		sdm_devices_traits_Fan: {
			timerMode: String
		},
		sdm_devices_traits_ThermostatMode: {
			mode: String,
			availableModes: [String]
		},
		sdm_devices_traits_ThermostatEco: {
			availableModes: [String],
			mode: String,
			heatCelsius: Number,
			coolCelsius: Number
		},
		sdm_devices_traits_ThermostatHvac: {
		  status: String
		},
		sdm_devices_traits_Settings: {
		  temperatureScale: String
		},
		sdm_devices_traits_ThermostatTemperatureSetpoint: {
		  coolCelsius: Number
		},
		sdm_devices_traits_Temperature: {
		  ambientTemperatureCelsius: String
		}
		
	},
	parentRelations: [{
		parent: String,
		displayName: String
	}]
    
});



module.exports = mongoose.model("NestDeviceModel", NestDeviceSchema, "NestDevice");