/*window.onload = function () {

var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	title: {
		text: "Porcentaje de las peticiones del ultimo trimestre"
	},
	data: [{
		type: "pie",
		startAngle: 240,
		yValueFormatString: "##0.00\"%\"",
		indexLabel: "{label} {y}",
		dataPoints: [
			{y: 79.45, label: "Preguntas"},
			{y: 7.31, label: "Quejas"},
			{y: 7.06, label: "Reclamos"},
			{y: 4.91, label: "Solicitudes"},		]
	}]
});
chart.render();

}*/

window.onload = function() {

var chart = new CanvasJS.Chart("chartContainer", {
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	exportEnabled: true,
	animationEnabled: true,
	title: {
		text: "Porcentaje de las peticiones del ultimo trimestre"
	},
	data: [{
		type: "pie",
		startAngle: 25,
		toolTipContent: "<b>{label}</b>: {y}%",
		showInLegend: "true",
		legendText: "{label}",
		indexLabelFontSize: 16,
		indexLabel: "{label} - {y}%",
		dataPoints: [
			{ y: 51.08, label: "Preguntas" },
			{ y: 27.34, label: "Quejas" },
			{ y: 10.62, label: "Reclamos" },
			{ y: 5.02, label: "Solicictudes" },
		]
	}]
});
chart.render();

}
