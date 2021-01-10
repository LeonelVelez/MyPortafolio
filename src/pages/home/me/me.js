import React, {Component} from 'react'
import ContainerCapa from '../../../components/containeCapa/containerCapa';
import ContainerViewPort from '../../../components/containerviewPort/containerviewPort';
import  './me.css';
export default class Me extends Component
{
    constructor(props)
    {
        super(props)
        this.onFocusViewPort = this.onFocusViewPort.bind(this)        
    }

    render()
    {
        return (
            <>
                <ContainerViewPort type={'me'}  documentInfo={this.props.documentInfo} onFocusViewPort={this.onFocusViewPort} >
                    <section id="me" className="container row" >
                        <div className="child"></div>
                        <div className="child" id="imagenIlustra"></div>    
                        <div id="description" className="container column center">
                            <ContainerCapa color="var(--color-secondary)">
                                <h2> Who i'm? How can i help u? </h2>
                                <p> 
                                    Well! I'm software engineer, I'm 22 years old and I have worked on many software proyects in Guayaquil, Ecuador.
                                    As you can see, I can speak both languages (english and spanish), and this is not the only skill I have. Next,  you can check out my skills and Portafolio.
                                    <br></br>
                                    <br></br>
                                    <span id="cita">
                                        "La ignorancia es la cuna del miedo pero a mi no me da miedo preguntar por qué?"
                                        <br></br>
                                        <span id="autor" >- Roberto Musso</span>
                                    </span>
                                    <br></br>         
                                    <div className="container row center" id="buttons">
                                        <button className="button offline ">Checkout my Skills</button>
                                        <button className="button outline ">Or maybe my Porfafolio</button>                                                        
                                    </div>                   
                                    
                                </p>
                            </ContainerCapa>                                                    
                        </div>                                                                    
                    </section>
                </ContainerViewPort>
                
            </>
        );
    }
    onFocusViewPort = (e)=>{
        if(e.type === 'me' && e.match)
        {
            if(window.matchMedia('(max-width: 992px)').matches)
            {
                this.props.onFocusViewPort({colorHeader:{menu:'var(--color-secondary)', nav:'var(--color-secondary)'}, type:e.type})
            }else{
                this.props.onFocusViewPort({colorHeader:{menu:'white', nav:'var(--color-secondary)'}, type:e.type})
            }
            
        }        
    }

}