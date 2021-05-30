import styled from 'styled-components'

export const FormContainer =styled.form`

    width: 100%;
    margin: 0 auto;
    max-width: 700px;
    padding: 2rem 1rem ;
    h2{
        text-align: center;
        color: gray;
        margin: 30px 0;
    }

        .container {
                div{
                    display: flex;
                    width: 100%;
                    

                    label{
                        font-size: 1.5rem;
                        border: solid gray 1px;
                        color: gray;
                        display: flex;
                        align-items: center;
                        width: 100%;
                        padding: .8rem 2rem;
                        margin-bottom: 20px;
                        border-radius: 4px;   

                    }

                    input{
                        font-size: 1rem;
                        outline: none;
                        width: 100%;
                        border: none;
                        margin-left: 20px;
                    }

                    .date:first-child{
                        margin-right: 20px;
                    }

                    input[type=”text”]{
                        margin-left: 20px;
                    }

                    label + label{ 
                        margin-left: 20px;
                    }
                }
            }

        button{
            width: 150px;
                    }



`
