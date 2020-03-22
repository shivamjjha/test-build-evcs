import React, { Component } from 'react'
import './App.css'
import {Textfield , Button, Card} from 'react-mdl';
import ReactMDL from 'react-mdl';
// import OtpInput from 'react-otp-input';
import { Link } from 'react-router-dom';



 class Sign extends Component {
   
    constructor(props){
        super(props);

        this.state={
            activelog : 0,
            imageUploaded:null
        };
    }
        changeState(activeId){
            this.setState({activelog: activeId});
        }

        fileSelector(event){
            this.setState( {imageUploaded: event.target.files[0]
        }
        )
        }

        toggleinup(){

           if(this.state.activelog===0) {
               return( 
               <div>
                <Card shadow={0} style={{width:'100%' , height:'500px'}}>   
                <form className='sign-in-form'>
                     <i style={{fontSize:'40px' , marginRight:'20px'}} className='fa fa-phone-square'></i>
                     <Textfield
                     style={{fontSize:'60px'}}
                     onChange={() => {}}
                     pattern="-?[0-9]*(\.[0-9]+)?"
                     error="Input is not a number!"
                     label="Contact Number..."
                     maxLength='10'
                     style={{width: '300px'}}
                     
                     />

                     <h4>Enter Enter verification code </h4>
                    <div className='otp-boxes'>
                        <div style={{display:'flex' , alignItems:'center' }}>
                            <input className='otp-input' style={{width:'3rem', height:'3rem' , fontSize:'2rem' , textAlign:'center'}} maxLength='1'  ></input>
                        </div>
                        <div style={{display:'flex' , alignItems:'center' }}>
                            <input className='otp-input' style={{width:'3rem', height:'3rem' , fontSize:'2rem' , textAlign:'center'}} maxLength='1' ></input>
                        </div>
                        <div style={{display:'flex' , alignItems:'center' }}>
                            <input className='otp-input' style={{width:'3rem', height:'3rem' , fontSize:'2rem' , textAlign:'center'}} maxLength='1' ></input>
                        </div>
                        <div style={{display:'flex' , alignItems:'center' }}>
                            <input className='otp-input' style={{width:'3rem', height:'3rem' , fontSize:'2rem' , textAlign:'center'}} maxLength='1' ></input>
                        </div>                     <div style={{display:'flex' , alignItems:'center' }}>
                            <input className='otp-input' style={{width:'3rem', height:'3rem' , fontSize:'2rem' , textAlign:'center'}} maxLength='1' ></input>
                        </div>                        
                        <div style={{display:'flex' , alignItems:'center' }}>
                            <input className='otp-input' style={{width:'3rem', height:'3rem' , fontSize:'2rem' , textAlign:'center'}} maxLength='1' ></input>
                        </div>

                     </div>
                        <Button raised accent ripple style={{ background:'red' }} onClick={()=>this.changeState(1)}>SUBMIT</Button>
                        <Link className='login-link'>Already have an Account ?</Link>

                </form>
                </Card>
            </div>
               )
           }

           else if(this.state.activelog === 1){
             return (
                 <div className="addVehicleInfo">
                            <form className="form-elements">
                            <Textfield
                                style={{fontSize:'60px'}}
                                onChange={() => {}}
                                label= "Good Name..."
                                maxLength='10'
                                style={{width: '400px' , color:'black' }}
                            />
                            <br/>
                            <Textfield
                                style={{fontSize:'60px'}}
                                onChange={() => {}}
                                pattern="-?[0-9]*(\.[0-9]+)?"
                                error="Input is not a number!"
                                label="Contact Number..."
                                maxLength='10'
                                disabled
                                style={{width: '400px'}}
                             /> 
                            <br/>
                            <Textfield
                                style={{fontSize:'60px'}}
                                onChange={() => {}}
                                label= "EMAIL_ID..."
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                error="enter a valid email-address"
                                style={{width: '400px' , color:'black' }}
                            />
                        <Button raised accent ripple style={{ background:'red'  }} onClick={()=>this.changeState(2)}>ADD VEHICLE INFO</Button>
                        </form>

                 </div>
             )   
            }

            else if(this.state.activelog === 2){
                return (
                  <div>
                            <Textfield
                                style={{fontSize:'60px'}}
                                onChange={() => {}}
                                label= "REG NO."
                                maxLength=''
                                style={{width: '400px' , color:'black' }}
                            />
                            <br/>
                            <label style={{fontSize:'0.3em'}}>UPLOAD RC : </label><br/>
                            <input type='file' onChange ={ (event) =>(this.fileSelector(event))} ></input>

                            <br/>
                       <Button raised accent ripple  style={{ background:'red' }}> SUBMIT </Button>
                  </div>
                )               

               }

        
        }
    

    render() {
        return (
            <div className ='Sign'> 
                 <header className='logo-header'>
                     <img src='logo.jpg' alt='GATS-logo' />
                 </header>       

             <div className='Sign-content'>
                    {this.toggleinup()}         
             </div>
        
            </div>

     )
    }
}

export default Sign;
