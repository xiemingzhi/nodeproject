const UndergroundSystem = require('./objectfunctions2.js');
var obj = new UndergroundSystem()
obj.checkIn(10, "Leyton", 3)
obj.checkOut(10, "Paradise", 8)
var param_3 = obj.getAverageTime("Leyton", "Paradise")
