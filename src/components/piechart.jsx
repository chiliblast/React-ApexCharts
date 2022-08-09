import React, { Component } from "react";
import Chart from "react-apexcharts";
class Piechart extends Component {

 
  constructor(props) {console.log(props)
    super(props);

    let _series = [43, 26, 31];

    this.state = {
      
      series: _series,

      data:{

        type:'Population',
        icon: require(`../assets/Multi-People-Ic.svg`).default,

        field:[
          {id:0,name:"Adimns",value:3},
          {id:1,name:"Managers",value:5},
          {id:2,name:"Players",value:120},
          {id:3,name:"Unassigned",value:8}
        ]
      },



      options: {
        chart: {
          type: "donut",
          height: 350        
        },
        theme: {
          mode: "dark"
        },
        /*responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                size: 200
              },
              legend: {
                position: "bottom"
              }
            }
          }
        ],*/
        labels: [
          _series[0] + "% <span style='color:#8d826c'>Axie</span>",
          _series[1] + "% <span style='color:#8d826c'>Pegaxy</span>",
          _series[2] + "% <span style='color:#8d826c'>Other</span>"
        ],
        dataLabels: {
          enabled: false
        },
        colors: ["#d4a858", "#a261ff", "#2dd2d2"],
        stroke: {
          show: false
        },
        title: {
          text: "Population",
          align: "left",
          margin: 0,
          offsetX: 120,
          offsetY: 10,
          floating: false,
          style: {
            fontSize: "10px",
            fontFamily: "Poppins",
            color: "#efe5d2"
          }
        },
        legend: {
          show: true,
          fontSize: "10px",
          fontFamily: "Poppins",
          offsetX: 0,
          offsetY: 20,
          markers: {
            radius: 1,
            strokeWidth: 0,
            strokeColor: "#4f4f4f",
            width: 12,
            height: 12,
            offsetX: -5,
            offsetY: 1
          },
          labels: {
            colors: ["#EFE5D2"],
            useSeriesColors: false
          },
          itemMargin: {
            horizontal: 10,
            vertical: 3
          }
        }
      }
    };
  }

  getTotal(){
    let total=0;
    let field=this.state.data.field;
    for(let i=0;i<field.length;i++){
      total=total+field[i].value;
    }
    return total;
  }

  render() {
    return (
      <div className="rounded apexcharts-theme-dark p-1 m-1 row">
        <div className="col-5">
          <div style={{fontSize:14}}>Total {this.state.data.type}:</div>
          <div><img style={{marginTop:-10,height:20}} src={this.state.data.icon} /><span style={{fontSize:21,marginLeft:10}}>{this.getTotal()}</span></div>
          {this.state.data.field.map(field => <div key={field.id}><span style={{color:'#8d826c'}}>{field.name}:</span> {field.value}</div>)}
        </div>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="donut"
          className="col-7"
        />
      </div>
    );
  }
}

export default Piechart;
