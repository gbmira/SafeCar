import styled from "styled-components";


export const DivLogin = styled.div`

*{
padding: 0;
margin: 0;
box-sizing: border-box;
font-family: sans-serif;

}

.input-group{
display: flex;
flex-direction: column;

justify-content: space-between;
padding: 1rem 0;
}
.input-box{
display: flex;
width: 50vh;
flex-direction: column;
margin-bottom: 1.1rem;

}
.input-box input { 
margin: 0.6rem;
padding: 0.8rem 1.2rem;
border: none;
border-radius: 10px;
box-shadow: 1px 1px 6px #00001c;
}
.input-box textarea{
width: 75vh;
box-shadow: 1px 1px 6px #00001c;
margin: 0.6rem;
padding: 0.8rem 1.2rem;
border: none;
border-radius: 10px;
}
.input-box select{
width: 20vh;
box-shadow: 1px 1px 6px #00001c;
margin: 0.6rem;
padding: 0.8rem 1.2rem;
border: none;
border-radius: 10px;
}

.input-box input:hover{
background-color: #eeeeee75;
}


.container {
width: 100%;
height: 100vh;
display: flex;
box-shadow: 5px 5px 10px rgba(0,0,0,.212) ;
}
.form-image {
width: 100%;
display: flex;
justify-content: center;
align-items: center;
align-items: center;
background-color: #ffffff;
height: 100%;
}
.form-image img {
width: 137.8vh;
height: 100%;
}
.form {
  color: white;
width: 50%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background-color: #181818;
padding: 4rem;

}
.title {
margin-bottom: 3rem;
display: flex;
justify-content: space-around;
}

button{
border: #ffffff;
width: 100%;
background-color: #3d3d3d;
color: white;
font-size: 25px;
padding: 10px;
border-radius: 20px;
box-shadow: 5px 5px 10px #2a2a2a55 ;
font-weight: bold;
}
button:hover{
  background-color: rgb(17, 48, 118);


}

`


export const DivCam = styled.div`
display: flex;
align-items: center;
justify-content: center;
position: relative;
margin-left: 200px;
flex-direction: column;
font-family: sans-serif;
padding-bottom: 200px;

.title{
  position: relative;
  top: 50px;
  p{
    font-size: 20px;
    font-weight: bold;
    color: white;
  }
}

h1{
  font-weight: bold;
  color: #6F84D2;
  font-size: 35px;

}


.webcam{
  display: flex;
  margin-top: 10vh;


}




`

export const DivPlano = styled.div`
margin: 0;
padding: 0;
font-family: sans-serif;

.titulo {
  font-size: 30px;
  margin-left: 25%;
  margin-top: 30px;
  background-color: #243882;
  width: 70%;
  color: white;
  font-weight: bold;
  text-align: center;
  border-radius: 5px;
  padding: 5px;

}
.painel{
  background-color: #222222;
  box-shadow: 3px 3px 10px black;
  border-radius: 10px;
  margin-left: 25%;
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  padding: 100px;
  width: 60%;
 

}
.planos{
  width: 50%;
  padding: 50px;
  color: white;
  background-color: #243882;
  justify-content: center;
  align-items: center;
  box-shadow: 3px 3px 10px black;

  margin-bottom: 30px;
  border-radius: 20px;
  width: 85%;
}
.planos h1{
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  justify-content: space-around;
}
`

export const DivControle = styled.div`
.container .title {
  display: flex;
}
.container .title h1{
  display: flex;
  font-family: sans-serif;

}

`
export const DivPlanilha = styled.div`
font-family: sans-serif;
font-size: 25px;

justify-content: center;
margin-top: 100px;
margin-bottom: 100px;
display: flex;

.editar   {
 margin-left: 20px;
  
  
}
a {
  margin: 15px;
  
}
.icone:hover{
  color: #243882;
}

table{
  padding-left: 27%;

}

th{
  padding: 20px;
  background-color: #243882;
  color: white;
  font-size: 35px;
  font-weight: bold;
}
td{
  width: 120;
  text-align: center;
  height: 10px;
  padding: 20px;
}
tfoot{
  background-color: #243882;
  color: white;
  font-size: 35px;
  font-weight: bold;

  
}
`

export const DivMenuLateral = styled.div`
display: flex;
*{
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  list-style: none;
  text-decoration: none;
  width: 100%;
}
.subMenu{
  display: flex;
  background-color: #0a0a0a;
  box-shadow: 2px 6px 6px 3px #0a0a0a;
  padding: 100px;
  
  position: fixed;
  justify-content: center;
  
  height: 100%;
  width: 10%;
  top: 0;

  ul{
  width: 100%;
  margin-bottom: 400px;

 

  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-content: space-between;
  padding-right: 120px;
}
li {
  font-size: 30px;
  width: 100%;
  margin-top: 5vh;
  




}
li:hover {
  a{
    color:#3e5197;
    font-weight: bold;
  }
}
a{
  color: white;
}

.title {
  text-align: left;
  width: 400px;
  font-weight: bold;
  color: #6f84d2;
  font-size: 30px;

  
}

  
}

`
export const DivAreaUsuario = styled.div`
display: flex;
*{
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  list-style: none;
  text-decoration: none;
}

span{
  color: #5471db;
  font-size: 50px;
  font-weight: bold;
}


.center {
  margin: 3%;
  background-color: #222222;
  box-shadow: 2px 6px 6px 0px #000000;
  border-radius: 10px;
  height: 100%;
  margin-left: 25%;
  position: absolute;
  padding-bottom: 67vh;
  width: 70%;
}
.secao-principal {

  padding: 30px;
  font-size: 30px;
  h1{
    width: 100%;
    color: white;
    font-weight: bold;
    text-align: left;
    margin-top: 30px;
    font-size: 50px;
    background-color: #181818;
    border-radius: 10px;
    padding-left: 10px;
    padding-bottom: 10px;
    padding-top: 10px;
    

    span{
      font-size: 70px;
      font-weight: bold;
      color: #5471db;
    }
    
  }

}
.secao-principal .infos{
  border-radius: 20px;
  color: white;
  margin-top: 40px;
  background-color: #181818;
  padding: 20px;
  
  height: 137vh;

  p{
    color: white;
    padding: 7px;
    margin-top: 20px;
    font-size: 25px;
  }
  
}
p{
  font-size: 30px;
  color: black;
 
}

img{
  display: flex;
  left: 100vh;
  top: 124vh;
  width: 49%;
  position: absolute;
  
}

iframe{
  margin-left: 10vh;
  margin-top: 10vh;
  border-radius: 30px;
}



`

export const DivInfoPessoal = styled.div`
display: flex;
*{
  color: white;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  list-style: none;
  text-decoration: none;
}
span{
  color: #5471db;
  font-size: 50px;
  font-weight: bold;
}


.center {
  margin: 3%;
  background-color: #222222;
  box-shadow: 2px 6px 6px 0px #000000;
  border-color: #243882;
  border-radius: 10px;
  height: 100%;
  margin-left: 25%;
  position: absolute;
  padding-bottom: 50px;
  width: 70%;
}
.secao-principal {
  padding: 30px;
  font-size: 30px;
  h1{
    width: 100%;
    color: white;
    font-weight: bold;
    text-align: left;
    margin-top: 30px;
    font-size: 50px;
    background-color: #181818;
    border-radius: 10px;
    padding-left: 10px;
    padding-bottom: 10px;
    padding-top: 10px;
    

    span{
      font-size: 70px;
      font-weight: bold;
      color: #5471db;
    }
    
  }

}
.secao-principal .infos{
  border-radius: 20px;
  color: white;
  margin-top: 40px;
  background-color: #181818;
  padding: 20px;
  height: 67vh;

  p{
    color: white;
    padding: 7px;
    font-size: 45px;
  }
  
}
p{
  font-size: 30px;
  color: black;
 
}

img{
  display: flex;
  left: 111vh;
  top: 59%;
  width: 44%;
  position: absolute;
  
}



`




export const DivPrincipal = styled.div`
display: flex;
*{
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  list-style: none;
  text-decoration: none;
}
.subMenu{
  display: flex;
  background-color: #dedede;
  box-shadow: 2px 6px 6px 3px #9b9b9b;
  position: fixed;
  padding: 100px;
  display: flex;
  height: 68.5vh;
  width: 10%;
}
ul{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-content: space-evenly;
}
li {
  font-size: 30px;
  width: 100%;




}
li:hover {
  a{
    color:#243882;
    font-weight: bold;
  }
}
a{
  color: black;
}
.center {
  margin: 3%;
  background-color: #FFF;
  box-shadow: 2px 6px 6px 3px #9b9b9b;
  border-radius: 10px;
  width: 70%;
}
.secao-principal {
  padding: 30px;

}
.secao-principal .infos{
  border-radius: 20px;
  color: white;
  margin-top: 40px;
  background-color: #243882;
  height: 62vh;
  
}
p{
  font-size: 30px;
  padding: 30px;
 
}



`

export const DivProposta = styled.div`

font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
width: 100%;
background-color: #222222;
color: white;
position: static;
padding-top: 150px;
font-size: 20px;
padding-bottom: 150px;
display: flex;
margin-bottom: 90px;
img{
  width: 180%;
  padding-right: 50px;
  padding-top: 10px;
}
p{
  margin-top: 20px;
  font-size: 30px;
  width: 85%;
}
.text{
  margin-left: 40px;
  margin-top: 90px;
}



`

export const DivBody = styled.body`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
height: 70%;
`
export const DivUser = styled.div`
*{

  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}

.input-group{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1rem 0;
  width: 70vh;
}
.input-box{
  display: flex;
  flex-direction: column;
  margin-bottom: 1.1rem;

}
.input-box input { 
  margin: 0.6rem;
  padding: 0.8rem 1.2rem;
  border: none;
  border-radius: 10px;
  box-shadow: 1px 1px 6px #00001c;
}
.input-box textarea{
  width: 85vh;
  box-shadow: 1px 1px 6px #00001c;
  margin: 0.6rem;
  padding: 0.8rem 1.2rem;
  border: none;
  border-radius: 10px;
}
.input-box select{
  width: 20vh;
  box-shadow: 1px 1px 6px #00001c;
  margin: 0.6rem;
  padding: 0.8rem 1.2rem;
  border: none;
  border-radius: 10px;
}

.input-box input:hover{
  background-color: #eeeeee75;
}


.container {
  height: 100%;
  display: flex;
  box-shadow: 5px 5px 10px rgba(0,0,0,.212) ;
}
.form-image {
display: flex;
justify-content: center;
align-items: center;
align-items: center;
background-color: #181818;
height: 100vh;


}
.form-image img {
width: 110%;
height: 100%


}
.form {
  color: white;
  
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #181818;
  padding: 4rem;

}
.title {
  margin-bottom: 3rem;
  display: flex;
  justify-content: space-around;
}

button{
  border: #CDCCCA;
  width: 100%;
  background-color: #CDCCCA;
  color: black;
  font-size: 25px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 5px 5px 10px rgba(0,0,0,.212) ;
  font-weight: bold;
  

}
button:hover{
  background-color: #A50A09;


}
`

export const DivRegistro = styled.div`
*{

  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}

.input-group{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1rem 0;
}
.input-box{
  display: flex;
  flex-direction: column;
  margin-bottom: 1.1rem;

}
.input-box input { 
  margin: 0.6rem;
  padding: 0.8rem 1.2rem;
  border: none;
  border-radius: 10px;
  box-shadow: 1px 1px 6px #00001c;
}
.input-box textarea{
  width: 85vh;
  box-shadow: 1px 1px 6px #00001c;
  margin: 0.6rem;
  padding: 0.8rem 1.2rem;
  border: none;
  border-radius: 10px;
}
.input-box select{
  width: 20vh;
  box-shadow: 1px 1px 6px #00001c;
  margin: 0.6rem;
  padding: 0.8rem 1.2rem;
  border: none;
  border-radius: 10px;
}

.input-box input:hover{
  background-color: #eeeeee75;
}


.container {
  width: 100%;
  height: 100vh;
  display: flex;
  box-shadow: 5px 5px 10px rgba(0,0,0,.212) ;
}
.form-image {
width: 100%;
display: flex;
justify-content: center;
align-items: center;
align-items: center;
background-color: #181818;
height: 100vh;
}
.form-image img {
width: 100%;
height: 100vh;
}
.form {
  color: white;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #181818;
  padding: 4rem;

}
.title {
  margin-bottom: 3rem;
  display: flex;
  justify-content: space-around;
}

button{
  border: #970F23;
  width: 100%;
  background-color: #970F23;
  color: white;
  font-size: 25px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 5px 5px 10px rgba(0,0,0,.212) ;
  font-weight: bold;

}
button:hover{
  background-color: #ba364a;


}
`

export const DivMain = styled.div`

`
export const DivCards = styled.div`
color: white;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
background-color: #222222;
padding-top: 150px;
font-size: 30px;
border-radius: 30px;
box-shadow: 100px, 5px, 5px white;
padding-bottom: 150px;

margin-bottom: 90px;
img{
  width: 100%;
  height: 100%;
  padding-right: 200px;
  border-radius: 50%;
  padding-top: 30px;
}
.cards {
  margin-left: 150px;
  display: flex;
}
.cards div {
  width: 100%;
}
p{
  margin-top: 20px;
  width: 75%;
  font-size: 40px;
}
`
export const DivAbout = styled.div`
width: 85%;
margin-left: 120px;
text-align: center;
font-family: sans-serif;
color: #8b8b8b;
justify-content: center;
margin-top: 65vh;
margin-bottom: 20vh;

h1{
  color: #243782;
  font-size: 40px;
}
p{
  margin-top: 20vh;
  width: 100%;
  justify-content: center;
  text-align: center;
  font-size: 30px;
}



`


export const DivBanner = styled.div`
*{
}
width: 100%;
.banner{
  width: 100%;
    margin: 0;
    padding: 0;
    font-size: 40px;
    height: 300px;
    

}
img{
    top: 0;
    margin: 0;
    padding: 0;
    width: 100%;
}
.texto{
    position: relative;
    top: 65vh;
    font-family:  sans-serif;
    color: white;
    margin-left: 7vh;
}

`
export const DivCard = styled.div`
margin-top: 20vh;
`

export const DivHeader = styled.header`
   font-family : sans-serif;
   padding: 1vh;
   padding-bottom: 30px;
   font-size: 1.5rem;
   background-color: #07070713;
   width: 100%;
   color: #ffffff;
   display: flex;
   list-style: none;
   position: fixed;
   opacity: 0.9;
   justify-content: space-between;
   display: flex;
   .posicao:scroll{

    }

    ul{

      display: flex;
      
    }
    ul li {
      position: relative;
      display: inline;
      margin: 10px 20px 0 15px;
      button {
      border: #070707;
      position: relative;
      bottom: 5px;
      color: white;
      background-color: #2c2c2c;
      border-radius: 3px;
      padding-left: 15px;
      padding-right: 15px;
      padding-bottom: 2px;
      font-size: 25px;
      border-radius: 25px;
      box-shadow: 5px 5px 10px #69696936 ;

   }
   button:hover{
    background-color: #070707;
   }
   :scroll-behavior {
    opacity: 0.1;
   }
     
      
    }
  
     ul li a {
      color: white;
      display: flex;
      justify-content: space-aroud;
      font-size: 25px;
      text-decoration: none;
      padding-top: 25px;
    }
    a:hover{
        color: #a0a4b5;


    }
    .login {
      color: black;
      border-radius: 3px;
      padding-left: 15px;
      padding-right: 15px;
      padding-top: 2px;
      padding-bottom: 2px;
    } 
    img{
        justify-content: space-between;
        width: 100%;
        height: 100%;
        position: relative;
        top: 10px;
        
    }
    h1{
        font-family: sans-serif;
        font-weight: 550;
        letter-spacing: 5px;
        margin-left: 5vh;
        
    }
    .logo img{
      position: relative;
      top: 12px;
      bottom: 20px;
      left: 30px;

    }
    @media screen and (min-width: 375px){
      .logo img{
        width: 300px;
      }
      img {
        width: 300px;
      }
      
    }

`

