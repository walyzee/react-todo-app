import React from 'react';

class Todo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items : []
        }
    }

    addItem = (e) => {
        e.preventDefault();
        const newItem = {content:this.newItem.value,status:false};
        newItem.content !== '' && this.setState ({
            items : [...this.state.items, newItem]
        })
        this.form.reset();
    }

    validateItem = (id) => {
        this.setState({
            items: this.state.items.map((item, i) =>
              i === id ? {...item, status: !item.status} : item
            )
        }) 
    }

    removeItem = (id) => {
        const removeItems = this.state.items.filter((e,i) => {
            return i !== id
        })
        this.setState({
            items : [...removeItems]
        })
    }

    render () {
        const {items} = this.state;
        return (
        <div>
            <header>
                <h1>To-Do App !</h1>
                <h2>Add New To-Do</h2>
                <form ref={(input) => this.form =input} className="form" onSubmit={this.addItem.bind(this)}>
                    <input ref={(input) => this.newItem =input} type="text" id="input-content" className="input-content" placeholder="Enter new task"/>
                    <button type='submit' id="add-btn" className="add-btn">Add</button>
                </form>
            </header>
            <main id="main-container">
                <div className="title-bloc">
                    <h2 className="task-title">Let's get some work done!</h2>
                    <hr />
                </div>
                {items.map((item,i) => (
                    <div key={i} className="task-bloc">
                        <button className='Valid-btn'  onClick={(e) => this.validateItem(i)}>{item.status ? " Undo " : " Complete "}</button>
                        <button className="del-btn" onClick={(e) => this.removeItem(i)}>Delete</button>
                        <span className={item.status ? 'text-content active' : 'text-content'} >{item.content}</span>
                        <br className="breakline" />
                    </div>
                ))}
            </main>
        </div>

        )
    }
}

export default Todo
