import React from 'react'
import CardList from '../../src/Components/Card-list/Card-list.component';
import Search from '../../src/Components/Search/Search.component';
//import Card from '../../src/Components/Card/Card.component';
import '../Pages/Home.styles.css'


class Home extends React.Component{
    constructor(){
        super();
        this.state = {
            monsters: [],
            searchField: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ monsters: users }));
    }

    handleSearch =(event)=>{
        this.setState({searchField:event.target.value})
    }

    render(){
        const{monsters,searchField}=this.state
        const filteredMonsters = monsters.filter((monster) => monster.name.toLowerCase().includes(searchField.toLowerCase()))
        return(
            <>
            <div className='App'>
                <h1>Monsters Rollodex</h1>
                <Search handleSearch={this.handleSearch} />
                <CardList monsters={filteredMonsters} />
            </div>
            </>
        )
    }
}

export default Home








