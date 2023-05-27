import React from 'react'
import Card from './Card'
import imagen1 from '../assets/react-js.jpg';
import imagen2 from '../assets/java.jpg';
import imagen3 from '../assets/angular.png';

const cards = [
    {
        id:1,
        title:'Curso React',
        image: imagen1,
        instructor:'Benito Samuel'
    },
    {
        id:2,
        title:'Curso Java',
        image: imagen2,
        instructor:'Angela Rios'
    },
    {
        id:3,
        title:'Curso Angular',
        image: imagen3,
        instructor:'Valentin'
    },
]

export default function Cards() {
    /*console.log(cards);*/
  return (
    <div className='container d-flex justify-content-center align-items-center h-100'>
        <div className='row'>
            {
                cards.map(item => (
                <div className='col-md-4' key={item.id}>
                    <Card
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    instructor={item.instructor}
                    >
                    </Card>
                </div>
                )) 
            
            }
        </div>
    </div>
  )
}
