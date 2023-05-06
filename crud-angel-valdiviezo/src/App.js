import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter} from 'reactstrap';

const data = [
  {id: 1, personaje: "Naruto", anime: "Naruto"},
  {id: 2, personaje: "Goku", anime: "Dragon Ball"},
  {id: 3, personaje: "Kenshi Himura", anime: "Rurouni Kenshin"},
  {id: 4, personaje: "Monkey D. Luffy", anime: "One Piece"},
  {id: 5, personaje: "Edward Elric", anime: "Fullmetal Alchemist: Brotherhood"},
  {id: 6, personaje: "Seto Kaiba", anime: "Yu-Gi-Oh"},
];

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

export default App;
