import React, { Component } from 'react'
export default class VCode extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ...this.initState()
    }
  }

  initState(){
    return {
      data: this.getRandom(109,48,4),
      rotate: this.getRandom(75,-75,4),
      fz: this.getRandom(8,20,4),
      color: [this.getRandom(100,255,3),this.getRandom(100,255,4),this.getRandom(100,255,3),this.getRandom(100,255,3)]
    }
  }

  getRandom(max, min, num) {
    const asciiNum = ~~(Math.random()*(max-min+1)+min)
    if(!Boolean(num)){
      return asciiNum
    }
    const arr = []
    for(let i = 0; i < num; i++){
      arr.push(this.getRandom(max, min))
    }
    return arr
  }
  componentDidMount(){
    this.props.parent.getData(this,this.state.data)
  }
  canvas=(a)=>{
    this.props.parent.getData(this,a)
  }
  render() {
    let a = this.state.data;
    return (
         <div style={{position: "relative",overflow: "hidden",float:"left",paddingLeft:20,paddingTop:5}} >
        <canvas id="bgi" style={{position: "absolute",top: 0,width: "100%",height: "100%",marginLeft:30}} width="200" height="200"></canvas>
        {this.state.data.map((v,i) => 
          <div
            key={i}
            style={{
              display:"inline-block",
              marginLeft: 10,
              transform:`rotate(${this.state.rotate[i]}deg)`,
              fontSize: `${this.state.fz[i]}px`,
              color: `rgb(${this.state.color[i].toString()})`
            }}
            onMouseEnter={() => {this.setState({refresh:true})}}
          >
            {String.fromCharCode(v > 57 && v < 84 ? v + 7 : ( v < 57 ? v : v + 13 ))}
          </div>  
        )}
      {
        this.state.refresh
        ? <div 
            style={{
              fontSize: 12,
              textAlign: "center",
              position: "absolute",
              top: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgb(125,125,125,0.7)",
              color: "red",
              lineHeight: 45,
              cursor: "pointer",
            }}
            onClick={() => {
              this.setState(()=>({...this.initState(),refresh: false}))
              this.canvas(a)
            }
          }
            onMouseLeave={() => {this.setState({refresh: false})}}
          > 看不清？点击刷新  
          </div> 
        : null}
      </div>
    )
  }

}