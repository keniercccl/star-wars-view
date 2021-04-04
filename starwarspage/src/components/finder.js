import React from 'react'
import {
  Select,
  MenuItem,
  TextField, Button
} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
  mainfinder:{
    backgroundColor: 'rgba(10, 17, 16, 0.4);'
  },
  searchbutton:{
    
  }
});

const Finder = () => {
  const clases = useStyles();
  return (
    <div className={clases.mainfinder}>
      {/* El componente Select tendra la respuesta de la API para buscar por 
            people, planet, Film, Species, Vehicules, Starships */}
      <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
        >
          <MenuItem value="Seleccionar por"> </MenuItem>
          <MenuItem >Personaje</MenuItem>
          <MenuItem >Pelicula</MenuItem>
          <MenuItem >Raza</MenuItem>
        </Select> 

            {/* Esta es la busqueda que hará la persona */}
        <TextField
          id="standar"
          label="Que buscas"
        />

            {/* Boton para aceptar es para realizar la consulta a la api */}
        <Button variant="outlined" color="primary">
          Buscar
        </Button>
            {/* Boton Limpiar es para reiniciar el Select y el Text Field  */}
        <Button variant="outlined" color="secondary">
          Limpiar
        </Button>
    </div>
  )
}

export default Finder;