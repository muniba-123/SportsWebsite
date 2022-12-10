import React, { Component } from "react";
import playerImg from "../../Assets/images/player-img.png";

const playersData=[
    {
        playerImg:playerImg,
        name:"17_shou",
        team:"17Gaming",
        region:"China",
        age:17,
        sns:123
    },
    {
        playerImg:playerImg,
        name:"17_shou",
        team:"17Gaming",
        region:"China",
        age:17,
        sns:123
    },
    {
        playerImg:playerImg,
        name:"17_shou",
        team:"17Gaming",
        region:"China",
        age:17,
        sns:123
    },
    {
        playerImg:playerImg,
        name:"17_shou",
        team:"17Gaming",
        region:"China",
        age:17,
        sns:123
    },
    {
        playerImg:playerImg,
        name:"17_shou",
        team:"17Gaming",
        region:"China",
        age:17,
        sns:123
    },
]
const columns=[
    "Player","Team","Region","Age","SNS"
]
class Table extends Component {
    constructor(props){
        super(props);
        
    }
  render() {
    // const {data,columns}=this.props;
    return (
      <table>
        <thead>
            {columns.map(col=><th>{col}</th>
                )}
        </thead>
        <tbody>
           {playersData.map(item=>(
          
           <tr>
            <td className="position-relative">
                    <img src={item.playerImg} width={40} height={40} className="tbl-img"/>
                    {item.name}
                
            </td>
            <td>{item.team}</td>
            <td>{item.region}</td>
            <td>{item.age}</td>
            <td>{item.sns}</td>
           </tr>
           )
           )} 
           </tbody>
        
       
      </table>
    );
  }
}

export default Table;
