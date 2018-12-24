 {/* // var my_js_data = JSON.parse('{"field1": "string value", "field2": 100}'); */}
 let chart = new CanvasJS.Chart("chartContainer",
 {
     legend: {
         maxWidth: 350,
         itemWidth: 120,
     },
     data: [
     {
         type: "pie",    
         legendText: "{indexLabel}",
         dataPoints: [
             { y: st, indexLabel: "Thể chất(STR)" },
             { y: knl, indexLabel: "Trí tuệ(KNL)" },
             { y: cre, indexLabel: "Sáng tạo(CRE)" },
             { y: per, indexLabel: "Tính cách(PER)"},
             { y: soc, indexLabel: "Xã hội(SOC)" }
         ]
     }
     ]
 });
 chart.render();