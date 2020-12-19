import React, {Component} from 'react'
import portada from './../../../img/mePortada.jpg'
import Vars from './../../../vars'
import './cover.css'
import { BsArrowDownShort } from "react-icons/bs";
import ContainerViewPort from '../../../components/containerviewPort/containerviewPort';


export default class Cover extends Component
{
    constructor(props)   
    {
        super(props)
        this.cover = React.createRef()
        this.titleCover = React.createRef()
        this.onFocusViewPort = this.onFocusViewPort.bind(this)

    }

    render()
    {
        return (
            <div className="container column" id="cover" ref={this.cover}>
                <div className="container row" id="body" >
                    <img className="text-left" id="portadaImg" src={portada}  alt="Leonel Vélez"></img>
                    <section >
                        <h1 className="text-rigth" ref={this.titleCover}>
                            {Vars.ParagraphHome.title}
                        </h1>
                    </section>
                </div>                
            <div id="footer">
                
                <BsArrowDownShort color="black" size="60px" >                    
                </BsArrowDownShort>                             
            </div>                
                <ContainerViewPort type={'cover'} references={this.cover} documentInfo={this.props.documentInfo} onFocusViewPort={this.onFocusViewPort} ></ContainerViewPort>
                <ContainerViewPort type={'titleCover'} references={this.titleCover} documentInfo={this.props.documentInfo} onFocusViewPort={this.onFocusViewPort} ></ContainerViewPort>
            </div>
        );
    }
    onFocusViewPort = (e)=>{
        if(e.type === 'cover')
        {
            this.props.onFocusViewPort({colorHeader:{menu:'black', nav:'black'}, type:e.type})
        }else{
            if(window.matchMedia('(max-width:900px)').matches)
            {
                
                this.props.onFocusViewPort({colorHeader:{menu:'white', nav:'white'}, type:e.type})
            }
            
            
        }
        
    }
}