
import './App.css';
import React, { Component } from "react";
import TodoItems from './components/Todoitems/Todoitems';
import AddItem from './components/Additem/Additem';


class App extends Component
{
    state = {
        items : [
            {id:1, nameoftask:"Fajr", time:'04:52' },
            {id:2, nameoftask:"Running", time:'05:30' },
            {id:3, nameoftask:"BreakFast", time:'06:30' }
        
        ]
    }
    deleteItem = (id)=>
    {
        let items = this.state.items.filter(item => {
        return item.id !== id; 
        /* IF ID != THIS ID LEAVE IT  */
        })
        this.setState({items})
    }
    addItem = (item) =>
    {
        item.id = Math.random();
        let items = this.state.items
        items.push(item);
        this.setState({items})

    }
    render(){
        return(
            <div className='container'>
                <h1 className='text-center'>Todo List</h1>
            <TodoItems items={this.state.items} deleteItem={this.deleteItem}/>
            <AddItem addItem = {this.addItem}/>
            </div>
        )
    }
}


export default App;
