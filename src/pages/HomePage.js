import React from 'react';
import Article from '../components/Article'
const articles = [
    {
        id: 1,
        title: "Czym jest teoria strun",
        author: "Jan Nowak",
        text: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
    },
    {
        id: 2,
        title: "Czym jest paradoks fermiego",
        author: "Jan Kowalski",
        text: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
    },
    {
        id: 3,
        title: "Ciemna materia i ciemna energia?",
        author: "Jan Biskup",
        text: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
    }
]
const HomePage = () => {
    const artList = articles.map(item => (
        <Article key={item.id} {...item} />
    ))
    return (
        <div className="home">
            {artList}
        </div>
    );
}

export default HomePage;