import React , {Component} from "react";
import './Additem.css'
class AddItem extends Component {

    state ={
        nameoftask : '',
        time : ''
    }

    handleChange = (e)=>
    {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    handleSubmit = (e)=>
    {
        e.preventDefault();
        if(e.target.nameoftask.value === '' && e.target.time.value === '')
        {
            return false;
        }else{
            this.props.addItem(this.state)
        this.setState({
            nameoftask : '',
            time : ''
        })
        }
    }


    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Enter name of task" id="nameoftask" onChange={this.handleChange} value={this.state.nameoftask}/>
                    
                    <input type="time" placeholder="Enter time to do that" id="time" onChange={this.handleChange} value={this.state.time}/>
                    
                    <input type="submit" value="Add"/>
                </form>
            </div>
        )
    }
}

export default AddItem;