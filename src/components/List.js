import { Grid } from '@material-ui/core'
import React, {Fragment} from 'react'
import CardProduct from './CardProduct'
import Paginacion from './Paginacion';


const List = ({listaOrdenada,cond})=>{
    let listaFiltrada = null
    if(cond !== ''){
        listaFiltrada = listaOrdenada.filter(l=>{
            return l.condition === cond
        })
    }
    return(
        <Fragment>
            
            <h1>Lista de Productos</h1>
            <Grid container justify='center'>
                {
                    
                        
                        listaFiltrada && listaFiltrada.length ?
                        listaFiltrada.map(d=>{
                            return(
                                <Grid item md={6}>
                                    <CardProduct 
                                        to ={`/Product-Info/${d.title}/${d.id}`} 
                                        title = {d.title} image={d.thumbnail}
                                        price = {d.price}
                                        condition = {d.condition}
                                        />
                                </Grid>
                            )
                        })
                        :
                        listaOrdenada.map(d=>{
                            return(
                                <Grid item md={6}>
                                    <CardProduct 
                                        to ={`/Product-Info/${d.title}/${d.id}`} 
                                        title = {d.title} image={d.thumbnail}
                                        price = {d.price}
                                        condition = {d.condition}
                                        />
                                </Grid>
                            )
                        })
                    
                    
                }
              
           </Grid>
           
           
        </Fragment>
    )
}

export default List