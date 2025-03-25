import { ReactECharts } from "../ReactEcharts.tsx";
import {EChartsOption} from "echarts";

// const options: EChartsOption = {
//     title: {
//         text: 'Water Volume',
//         left: 0,
//         right: 0,
//         top: 0,
//         textStyle: {
//             color: '#FFFFFF',
//             fontSize: 18,
//             fontWeight: 'bold',
//         },
//         zlevel: 15,
//         borderColor: '#007B9E',
//         borderWidth: 2,
//         padding: [5, 145]
//     },
//     backgroundColor: "black",
//     tooltip: {
//         show: false,
//     },
//     // legend: {
//     //     textStyle: { color: "#ffff" },
//     // },
//     xAxis: [
//         {
//             data: ["Water Tank"],
//             axisTick: { show: false },
//             axisLine: { show: false },
//             // axisLabel: {
//             //     inside: true,
//             //     verticalAlign: 'top',
//             //     width: '100%',
//             //     height: 50
//             // }
//         },
//     ],
//     yAxis: {
//         splitLine: { show: false },
//         axisTick: { show: false },
//         axisLine: { show: false },
//         axisLabel: { show: false },
//     },
//     animationEasing: "elasticOut",
//     series: [
//         {
//             type: 'pictorialBar',
//             zlevel: 100,
//             data: [{
//                 value: 1,
//                 symbol: 'rect',
//                 itemStyle: {
//                     h
//                 }
//             }],
//
//         },
//         {
//             type: "pictorialBar",
//             emphasis: {
//                 scale: false,
//             },
//             label: {
//                 show: true,
//                 position: "insideTop",
//                 formatter: "Water volume",
//                 fontSize: 16,
//                 color: "#007B9E",
//                 // align: "center",
//                 borderColor: "#007B9E",
//                 borderWidth: 1,
//                 width: "100%",
//             },
//             zlevel: 10,
//             data: [
//                 {
//                     value: 1000,
//                     symbol: "rect",
//                     symbolRepeat: false,
//                     // symbolSize: ["100%", "100%"],
//                     symbolMargin: 2,
//                     itemStyle: {
//                         color: {
//                             type: "radial",
//                             x: 0.5,
//                             y: 0.5,
//                             r: 0.8,
//                             colorStops: [
//                                 { offset: 0, color: "rgba(255, 255, 255, 0.498)" },
//                                 { offset: 0.46, color: "rgba(0, 193, 249, 0.502)" },
//                                 { offset: 0.55, color: "rgba(0, 187, 241, 0.450)" },
//                                 { offset: 0.64, color: "rgba(0, 180, 232, 0.398)" },
//                                 { offset: 0.73, color: "rgba(0, 170, 219, 0.347)" },
//                                 { offset: 0.82, color: "rgba(0, 157, 202, 0.295)" },
//                                 { offset: 0.91, color: "rgba(0, 138, 178, 0.244)" },
//                                 { offset: 1, color: "rgba(0, 110, 141, 0.192)" },
//                             ],
//                         },
//                     },
//                 },
//             ],
//         },
//         {
//             type: 'pictorialBar',
//             barGap: '-100%',
//             symbol: 'circle',
//             itemStyle: {
//                 color: '#00B8EC',
//                 borderColor: '#9D9D9E', // Border color (customize as needed)
//                 borderWidth: 2,
//             },
//             silent: true,
//             symbolOffset: [0, '50%'],
//             zlevel: 9,
//             data: [{
//                 value: 1,
//                 symbolSize: ['100%', 60]
//             }],
//         },
//     ],
// };

// const options: EChartsOption = {
//     graphic: [
//         /* Title */
//         {
//             type: 'group',
//             bounding: 'raw',
//             width: 400,
//             children: [
//                 {
//                     type: 'text',
//                     left: 'center',
//                     top: 8,
//                     style: {
//                         fill: "#007B9E",
//                         text: 'Water volume',
//                         fontSize: 16,
//                     },
//                     zlevel: 4,
//                 },
//                 {
//                     type: 'rect',
//                     zlevel: 3,
//                     shape: { x: 1, y: 5, width: 398, height: 20 },
//                     style: {
//                         lineWidth: 1,
//                         fillOpacity: 0,
//                         stroke: "#005C76"
//                     }
//                 }
//             ]
//         },
//         /* Bar */
//         {
//             type: 'group',
//             bounding: 'raw',
//             zlevel: 2,
//             width: 400,
//             height: 500,
//             children: [
//                 {
//                     type: 'rect',
//                     shape: { x: 0, y: 0, width: '100%', height: '100%' },
//                     style: {
//                         fill: {
//                             type: "radial",
//                             x: 0.5,
//                             y: 0.5,
//                             r: 0.8,
//                             colorStops: [
//                                 { offset: 0, color: "rgba(255, 255, 255, 0.498)" },
//                                 { offset: 0.46, color: "rgba(0, 193, 249, 0.502)" },
//                                 { offset: 0.55, color: "rgba(0, 187, 241, 0.450)" },
//                                 { offset: 0.64, color: "rgba(0, 180, 232, 0.398)" },
//                                 { offset: 0.73, color: "rgba(0, 170, 219, 0.347)" },
//                                 { offset: 0.82, color: "rgba(0, 157, 202, 0.295)" },
//                                 { offset: 0.91, color: "rgba(0, 138, 178, 0.244)" },
//                                 { offset: 1, color: "rgba(0, 110, 141, 0.192)" },
//                             ],
//                         }
//                     },
//                 },
//                 {
//                     type: 'circle',
//                     shape: {
//                         cx: 200, // X-coordinate of the center
//                         cy: 200, // Y-coordinate of the center
//                         r: '100%',  // Radius of the circle
//                     },
//                     // style: {
//                     //     fill: '#007B9E', // Background color of the circle
//                     //     stroke: '#000', // Border color
//                     //     lineWidth: 2,   // Border width
//                     // },
//
//                     style: {
//                         fill: '#00B8EC',
//                         // borderColor: '#9D9D9E', // Border color (customize as needed)
//                         // borderWidth: 2,
//                     },
//                 }
//             ]
//         }
//     ],
// };

const options: EChartsOption = {
    graphic: [
        {
            type: 'group',
            shape: { width: 500, height: 700 },
            children: [
                {
                    type: 'rect',
                    style: {
                        fill: {

                        }, // Background color for the rectangle
                        stroke: '#000', // Border color
                        lineWidth: 2,   // Border width
                    },
                }
            ]
        },
    ],
};

export function TankVolume() {
    return (<ReactECharts option={options}/>);
}
