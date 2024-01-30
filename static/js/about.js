let populationGraph=document.getElementById('populationGraph');
let trace1 ={};
trace1.type ="pie";
trace1.labels =[];
trace1.values =[];
for(let x=0; x<population.length; x++){
    trace1.labels[x] =population[x]['name'];
    trace1.values[x] =population[x]['count'];
}
let populationData =[];
populationData.push(trace1);
let layout ={margin:{t:10,l:0,}};
Plotly.newPlot(populationGraph, populationData, layout);

let surveyGraph=document.getElementById('surveyGraph');
let trace2 ={};
trace2.type ="pie";
trace2.labels =[];
trace2.values =[];
for(let x=0; x<survey.length; x++){
    trace2.labels[x] =survey[x]['name'];
    trace2.values[x] =survey[x]['count'];
}
let surveyData =[];
surveyData.push(trace2);
let layout2 ={margin:{t:10,l:0,}};
Plotly.newPlot(surveyGraph, surveyData, layout2);
