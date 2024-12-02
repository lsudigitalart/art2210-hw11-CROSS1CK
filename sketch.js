let CrashIncidents, dry, wet = [];
const cityBounds = { minLat: 30.2290, maxLat: 30.6838, minLon: -91.2555, maxLon: -90.9980 };
const aspectRatio = (cityBounds.maxLon - cityBounds.minLon) / (cityBounds.maxLat - cityBounds.minLat);

function preload() {
  CrashIncidents = loadTable("Baton_Rouge_Traffic_Crash_Incidents_20241202.csv", "header");
}

function setup() {
  createCanvas(800, 800 / aspectRatio);
  dry = CrashIncidents.findRows("Dry", "ROAD SURFACE");
  wet = CrashIncidents.findRows("Wet", "ROAD SURFACE");

}

function draw() {
  background(0);
  noStroke();

  for (let i = 0; i < dry.length; i++) {
    let x = map(dry[i].obj.LONGITUDE, cityBounds.minLon, cityBounds.maxLon, 0, width);
    let y = map(dry[i].obj.LATITUDE, cityBounds.minLat, cityBounds.maxLat, height, 0);
    fill("Grey")
		circle(x, y, 2);
  }

	for (let i = 0; i < wet.length; i++) {
    let x = map(wet[i].obj.LONGITUDE, cityBounds.minLon, cityBounds.maxLon, 0, width);
    let y = map(wet[i].obj.LATITUDE, cityBounds.minLat, cityBounds.maxLat, height, 0);
    fill(0,0,255)
		circle(x, y, 2);
  }
}