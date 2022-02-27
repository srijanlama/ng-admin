import { ApexNonAxisChartSeries, ApexChart, ApexPlotOptions, ApexAxisChartSeries, ApexStroke, ApexDataLabels, ApexXAxis, ApexLegend, ApexFill, ApexGrid, ApexYAxis, ApexTooltip, ApexResponsive, ApexTitleSubtitle, ApexAnnotations, ApexMarkers, ApexStates, } from "ng-apexcharts";

export interface ApexChartOptions {
    series: ApexAxisChartSeries | ApexNonAxisChartSeries;
    chart: ApexChart;
    plotOptions: ApexPlotOptions;
    labels: string[];
    colors: string[];
    stroke: ApexStroke;
    dataLabels: ApexDataLabels;
    xaxis: ApexXAxis;
    legend: ApexLegend;
    tooltip: ApexTooltip;
    fill: ApexFill;
    grid: ApexGrid;
    title: ApexTitleSubtitle;
    annotations: ApexAnnotations;
    markers: ApexMarkers;
    states: ApexStates;
    responsive: ApexResponsive[];
    yaxis: ApexYAxis | ApexYAxis[];
    subtitle: ApexTitleSubtitle
}

export interface Range {
    min: number;
    max: number;
}

export interface Point {
    x: number;
    y: number;
}

export interface ApexLinearChartData {
    [key: string]: number[] | Point[] | [number, number][]
}

export interface ApexNonLinearChartData {
    [key: string]: number[]
}

