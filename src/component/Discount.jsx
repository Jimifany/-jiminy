import React, { Component } from "react";
import echarts from "echarts";
class EchartsTest extends Component {
    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例sssssss
        var myChart = echarts.init(document.getElementById('mains'))
        // 绘制图表
        myChart.setOption(
          {
            grid: {
              top: '25%',//距上边距
      
              // left: '25%',//距离左边距
      
              // right: '25%',//距离右边距
      
              // bottom: '25%',//距离下边距
      
            },
            title: {
              text: 'XX同学的日周考成绩统计图',
              subtext: '仅供参考',
              textStyle: {
                color: '#477A74'
              }
            },
            tooltip: {
              trigger: 'axis',
              position: 'top',
              axisPointer: {
                type: 'cross',
                label: {
                  backgroundColor: '#6a7985'
                }
              }
            },
            legend: {
              y: '25px',
              data: ['技能', '理论']
            },
            toolbox: {
                show: true,
                y: '40px',
                feature: {
                    dataZoom: {
                        yAxisIndex: 'none'
                    },
                    dataView: {readOnly: false},
                    magicType: {type: ['line', 'bar']},
                    restore: {},
                    saveAsImage: {}
                }
            },
            xAxis: [
              {
                type: 'category',
                data: [
                  '08-01',
                  '08-02',
                  '08-03',
                  '08-04',
                  '08-05',
                  '08-06',
                  '08-07',
                  '08-08',
                  '08-09',
                  '08-10',
                  '08-11',
                  '08-12',
                  '08-13'
                ]
              }
            ],
            yAxis: [
              {
                type: 'value',
                axisLabel: {
                  formatter: '{value}'
                }
              }
            ],
            series: [
              {
                name: '理论',
                type: 'line',
                color: '#AAB45F',
                symbol: 'circle',
                data: [22, 60, 90, 25, 28, 75, 79, 82.2, 50.5, 20, 60, 21, 23],
                markPoint: {
                  data: [
                    { type: 'max', name: '最高分' },
                    { type: 'min', name: '最低分' }
                  ]
                },
                markLine: {
                  data: [{ type: 'average', name: '平均值' }]
                }
              },
              {
                name: '技能',
                type: 'line',
                symbol: 'circle',
                data: [
                  23,
                  50.6,
                  70,
                  21,
                  22,
                  76.7,
                  79,
                  36.05,
                  50.5,
                  61,
                  35,
                  20,
                  3.3
                ],
                markPoint: {
                  data: [{ name: '最高', value: 79, xAxis: 6, yAxis: 79 }]
                },
                markLine: {
                  data: [
                    { type: 'average', name: '平均值' },
                    [
                      {
                        symbol: 'none',
                        x: '90%',
                        yAxis: 'max'
                      },
                      {
                        symbol: 'circle',
                        label: {
                          normal: {
                            position: 'start',
                            formatter: '最大值'
                          }
                        },
                        type: 'max',
                        name: '最高点'
                      }
                    ]
                  ]
                }
              }
            ]
          },
          true,
          window.onresize = myChart.resize
        )
      }
  render() {
    return (
          <div id="mains" className='main'></div>
    );
  }
}
export default EchartsTest;
