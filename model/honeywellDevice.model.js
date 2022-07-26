const mongoose = require("mongoose");

var HoneyWellDeviceSchema = new mongoose.Schema({

    locationID: {
        type: String
    },
	name: {
		type: String
	},
	country: {
		type: String
	},
	zipcode: {
		type: String
	},
	devices: [{
		displayedOutdoorHumidity: {
			type: Number
		},
		vacationHold: {
			enabled: Boolean
		},
		currentSchedulePeriod: {
			day: String,
			period: String
		},
		scheduleCapabilities: {
			availableScheduleTypes: [String],
			schedulableFan: Boolean
		},
		scheduleType: {
			scheduleType: String,
			scheduleSubType: String
		},
		scheduleStatus: String,
		allowedTimeIncrements: Number,
        settings: {
			hardwareSettings: {
				brightness: Number,
				maxBrightness: Number
			},
            fan: {
				allowedModes: [String],
				changeableValues: {
					mode: String
				}
			},
            temperatureMode: {
				air: Boolean
			},
			specialMode: {},
			devicePairingEnabled: Boolean
		},
		deviceOsVersion: String,
		deviceClass: String,
		deviceType: String,
		deviceID: String,
		deviceInternalID: Number,
		userDefinedDeviceName: String,
		name: String,
		isAlive: Boolean,
		isUpgrading: Boolean,
		isProvisioned: Boolean,
		macID: String,
		deviceSettings: {},
		service: {
			mode: String
		},
		deviceRegistrationDate: String,
		dataSyncStatus: String,
		deviceSerialNo: String,
		units: String,
		indoorTemperature: Number,
		outdoorTemperature: Number,
		allowedModes: [String],
		deadband: Number,
		hasDualSetpointStatus: Boolean,
		minHeatSetpoint: Number,
		maxHeatSetpoint: Number,
		minCoolSetpoint: Number,
		maxCoolSetpoint: Number,
		changeableValues: {
			mode: String,
			heatSetpoint: Number,
			coolSetpoint: Number,
			thermostatSetpointStatus: String,
			nextPeriodTime: String,
			endHeatSetpoint: Number,
			endCoolSetpoint: Number,
			heatCoolMode: String
		},
        operationStatus: {
			mode: String,
			fanRequest: Boolean,
			circulationFanRequest: Boolean
		},
        deviceModel: String
	}]
	
    
});



module.exports = mongoose.model("HoneyWellDeviceModel", HoneyWellDeviceSchema, "HoneyWellDevice");