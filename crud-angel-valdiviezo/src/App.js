//import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter} from 'reactstrap';
import {useState} from 'react';

const data = [
  {id: 1, personaje: "Naruto", anime: "Naruto"},
  {id: 2, personaje: "Goku", anime: "Dragon Ball"},
  {id: 3, personaje: "Kenshi Himura", anime: "Rurouni Kenshin"},
  {id: 4, personaje: "Monkey D. Luffy", anime: "One Piece"},
  {id: 5, personaje: "Edward Elric", anime: "Fullmetal Alchemist: Brotherhood"},
  {id: 6, personaje: "Seto Kaiba", anime: "Yu-Gi-Oh"},
];

/*
class App extends React.Component {

  state = {
    data: data
  }
  
  render() {
    return (
      <>
        <Container>
          <br/>
          
          <Button color='primary'>Insertar Nuevo Personaje</Button>
        
          <br/> <br/>

          <Table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Personaje</th>
                <th>Anime</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map(
                (elemento) => (
                  <tr>
                    <td>{elemento.id}</td>
                    <td>{elemento.personaje}</td>
                    <td>{elemento.anime}</td>
                    <td>
                      <Button color="primary">Editar</Button>
                      <Button color="danger">Eliminar</Button>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </Table> 
        </Container>
      </>
    )
  }
}

*/

function App() {
  const [nombre,setNombre] = useState("");
  const [edad,setEdad] = useState(0);
  const [pais,setPais] = useState("");
  const [cargo,setCargo] = useState("");
  const [anios,setAnios] = useState(0);

  const mostrarDatos =  () => {
    alert(nombre);
  }

  return(
    <div className='container'>
      <div className='App'>
    </div>

    <br/>
    
      <div className="card text-center">
        <div className="card-header">
          Gestion de empleados
        </div>
        <div className="card-body">
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Nombre:</span>
          <input type="text" class="form-control" placeholder="Ingrese nombre" aria-label="Username" aria-describedby="basic-addon1"
          onChange={(event)=> {
            setNombre(event.target.value);
          }}/>
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Edad:</span>
          <input type="number" class="form-control" placeholder="Ingrese edad" aria-label="Username" aria-describedby="basic-addon1"
          onChange={(event)=> {
            setEdad(event.target.value);
          }}/>
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Pais:</span>
          <input type="text" class="form-control" placeholder="Ingrese Pais" aria-label="Username" aria-describedby="basic-addon1"
          onChange={(event)=> {
            setPais(event.target.value);
          }}/>
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Cargo:</span>
          <input type="text" class="form-control" placeholder="Ingrese su cargo" aria-label="Username" aria-describedby="basic-addon1"
          onChange={(event)=> {
            setCargo(event.target.value);
          }}/>
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Anios de experiencia:</span>
          <input type="number" class="form-control" placeholder="Ingrese los anios" aria-label="Username" aria-describedby="basic-addon1"
          onChange={(event)=> {
            setAnios(event.target.value);
          }}/>
        </div>
        </div>
        <div className="card-footer text-body-secondary">
        <button className='btn btn-success' onClick={mostrarDatos} >Registrar</button>
        </div>
      </div>

      <br/>

      <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Edad</th>
          <th scope="col">Pais</th>
          <th scope="col">Cargo</th>
          <th scope="col">Experiencia</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
      </tbody>
      </table>
    </div>
    
  );
}

export default App;
