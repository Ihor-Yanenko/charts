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
// // };

const options: EChartsOption = {
    graphic: [
        /* Title */
        {
            type: 'group',
            bounding: 'raw',
            width: 400,
            children: [
                {
                    type: 'text',
                    left: 'center',
                    top: 8,
                    style: {
                        fill: "#007B9E",
                        text: 'Water volume',
                        fontSize: 16,
                    },
                    zlevel: 4,
                },
                {
                    type: 'rect',
                    zlevel: 3,
                    shape: { x: 1, y: 5, width: 398, height: 20 },
                    style: {
                        lineWidth: 1,
                        fillOpacity: 0,
                        stroke: "#005C76"
                    }
                }
            ]
        },
        /* Bar */
        {
            type: 'group',
            bounding: 'raw',
            zlevel: 2,
            width: 400,
            height: 500,
            children: [
                {
                    type: 'rect',
                    shape: { x: 0, y: 0, width: '100%', height: '100%' },
                    style: {
                        fill: {
                            type: "radial",
                            x: 0.5,
                            y: 0.5,
                            r: 0.8,
                            colorStops: [
                                { offset: 0, color: "rgba(255, 255, 255, 0.498)" },
                                { offset: 0.46, color: "rgba(0, 193, 249, 0.502)" },
                                { offset: 0.55, color: "rgba(0, 187, 241, 0.450)" },
                                { offset: 0.64, color: "rgba(0, 180, 232, 0.398)" },
                                { offset: 0.73, color: "rgba(0, 170, 219, 0.347)" },
                                { offset: 0.82, color: "rgba(0, 157, 202, 0.295)" },
                                { offset: 0.91, color: "rgba(0, 138, 178, 0.244)" },
                                { offset: 1, color: "rgba(0, 110, 141, 0.192)" },
                            ],
                        }
                    },
                },
                {
                    type: 'circle',
                    shape: {
                        cx: 200, // X-coordinate of the center
                        cy: 200, // Y-coordinate of the center
                        r: '100%',  // Radius of the circle
                    },
                    // style: {
                    //     fill: '#007B9E', // Background color of the circle
                    //     stroke: '#000', // Border color
                    //     lineWidth: 2,   // Border width
                    // },

                    style: {
                        fill: '#00B8EC',
                        // borderColor: '#9D9D9E', // Border color (customize as needed)
                        // borderWidth: 2,
                    },
                }
            ]
        }
    ],
};


export function TankVolume({ width, height }) {
    console.log(width, height);
    const options: EChartsOption = {
        graphic: [
            /* Title */
            {
                type: 'text',
                left: 'center',
                top: 12,
                style: {
                    fill: "#00B8EC",
                    text: 'Water Volume',
                    fontSize: 16,
                    verticalAlign: "middle"
                },
                zlevel: 4,
            },
            {
                type: 'rect',
                zlevel: 3,
                shape: { x: 2, y: 5, width: width - 4, height: 30 },
                style: {
                    lineWidth: 2,
                    fillOpacity: 0,
                    stroke: "#005C76"
                }
            },
            /* Bar */
            {
                type: 'rect',
                shape: { x: 0, y: 0, width, height: height - 104 },
                style: {
                    fill: {
                        type: "radial",
                        x: 0.5,
                        y: 0.5,
                        r: 0.8,
                        colorStops: [
                            { offset: 0, color: "rgba(255, 255, 255, 0.498)" },
                            { offset: 0.46, color: "rgba(0, 193, 249, 0.502)" },
                            { offset: 0.55, color: "rgba(0, 187, 241, 0.450)" },
                            { offset: 0.64, color: "rgba(0, 180, 232, 0.398)" },
                            { offset: 0.73, color: "rgba(0, 170, 219, 0.347)" },
                            { offset: 0.82, color: "rgba(0, 157, 202, 0.295)" },
                            { offset: 0.91, color: "rgba(0, 138, 178, 0.244)" },
                            { offset: 1, color: "rgba(0, 110, 141, 0.192)" },
                        ],
                    },
                    opacity: 0.6,
                },
            },
            // Bottom circle
            {
                type: 'circle',
                shape: {
                    r: width / 2,
                },
                style: {
                    fill: '#007B9E',
                    stroke: '#00B8EC',
                    lineWidth: 2,
                    strokeOpacity: 0.6,
                    lineCap: 'butt',
                    lineJoin: 'miter'
                },
                left: 'center',
                top: '62%',
                scaleY: 0.275,
                zlevel: -1
            
            },
            {
                type: 'text',
                left: 'center', // Center horizontally
                top: '20%',  // Position at the bottom
                style: {
                    text: `{header|Total Water}\n{label|Available:}\n{value|700k bbls}\n{label|% Water for\nNext Stage:}\n{value|81}`,
                    rich: {
                        header: {
                            fontSize: 14,
                            fontWeight: 'bold',
                            fill: '#00B8EC',
                            align: 'center'
                        },
                        label: {
                            fontSize: 14,
                            fontWeight: 'bold',
                            fill: '#00B8EC',
                            align: 'center'
                        },
                        value: {
                            fontSize: 20,
                            fontWeight: 'bold',
                            fill: '#00B8EC',
                            align: 'center',
                            padding: 16
                        },
                    },
                    align: 'center',
                    verticalAlign: 'middle'
                }
            },
            // {
            //     type: 'line',
            //     shape: {
            //         x1: 50, // X-position of the left axis
            //         y1: 0,  // Start at the top
            //         x2: 50, // X-position remains the same
            //         y2: height - 104 // Extend to the bottom of your bar
            //     },
            //     style: {
            //         stroke: '#005C76', // Line color
            //         lineWidth: 2 // Line thickness
            //     }
            // },
            // /* Y-Axis Ticks and Labels */
            // {
            //     type: 'text',
            //     left: -30, // Position left of the y-axis
            //     top: 0, // First tick at the top
            //     style: {
            //         text: '100%',
            //         fill: '#005C76',
            //         fontSize: 12,
            //         align: 'right'
            //     }
            // },
            // {
            //     type: 'text',
            //     left: -30,
            //     top: (height - 104) / 2, // Middle tick
            //     style: {
            //         text: '50%',
            //         fill: '#005C76',
            //         fontSize: 12,
            //         align: 'right'
            //     }
            // },
            // {
            //     type: 'text',
            //     left: -30,
            //     top: height - 104, // Bottom tick
            //     style: {
            //         text: '0%',
            //         fill: '#005C76',
            //         fontSize: 12,
            //         align: 'right'
            //     }
            // }
        ],
    };
    return (<ReactECharts option={options}/>);
}

