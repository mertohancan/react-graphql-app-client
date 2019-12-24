import React, {useState, useContext} from 'react';
import { Button, Form } from 'semantic-ui-react';
import {useMutation} from '@apollo/react-hooks';
import gql from 'graphql-tag';

import { useForm } from '../util/hooks';

import {AuthContext} from '../context/auth';

function Register(props){

    const context = useContext(AuthContext);
    const [errors, setErrors] = useState({});



    const {onChange, onSubmit, values} = useForm(registerUserCallBack, {
        username: '',
        email:  '',
        password: '',
        confirmPassword: ''
    });


    const [addUser, {loading}] = useMutation(REGISTER_USER, {
        update(_, {data:{register: userData}}){
            context.login(userData)
            props.history.push('/');
        },
        onError(err){
            setErrors(err.graphQLErrors[0].extensions.exception.errors)
            console.log('error:', errors)
        },
        variables: values
    })


    function registerUserCallBack(){
        addUser();
    }
   
 
    return(
       
         <div style={{width:"50%", margin:"auto"}}>
             {
                 loading ? 
                 (
                    <h1>Loading..</h1>
                 )
                 :
                 (
                     
                <div>
                 <Form noValidate onSubmit={onSubmit}>
                    <Form.Input
                        label="Mail"
                        placeholder="Mail adresinizi girin."
                        name="email"
                        value={values.email}
                        onChange={onChange}
                      
                        
                    />
    
                    <Form.Input
                        label="Kullanıcı Adı"
                        placeholder="Kullanıcı adınızı girin."
                        name="username"
                        value={values.username}
                        onChange={onChange}
                    
                        
                    />
    
                    <Form.Input
                        type="password"
                        label="Şifre"
                        placeholder="Şifrenizi girin."
                        name="password"
                        value={values.password}
                        onChange={onChange}
                    
                        
                    />
    
                <Form.Input
                        type="password"
                        label="Şifre"
                        placeholder="Şifrenizi tekrar girin."
                        name="confirmPassword"
                        value={values.confirmPassword}
                        onChange={onChange}
                   
                        
                    />
                    <Button style={{marginTop:25}} type="Submit" primary>
                        Kayıt Ol
                    </Button>
                </Form>


                {
               Object.keys(errors).length > 0 && (
                <div className="ui error message">
                  <ul className="list">
                      {
                          Object.values(errors).map((e, i)=>{
                          return <li key={i}>{e}</li>
                          })
                      }
                  </ul>
                </div>
                    )
                }
             </div>

                 )
             }
             
         </div>
    
    )
}

const REGISTER_USER = gql`
 mutation register(
     $email: String!
     $username: String!
     $password: String!
     $confirmPassword: String!
 ){
  register(
      registerInput: {
          email: $email
          username: $username
          password: $password
          confirmPassword: $confirmPassword
      }
  ){
      id email username createdAt token
  }
 }
`

export default Register;