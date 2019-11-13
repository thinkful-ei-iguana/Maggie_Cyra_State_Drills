import React from 'react';


// const sections = [
//     {
//       title: 'Section 1',
//       content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
//     },
//     {
//       title: 'Section 2',
//       content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
//     },
//     {
//       title: 'Section 3',
//       content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
//     },
//   ]


class Accordion extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.handleClick = this.handleClick.bind(this);
    }

    sections = [
        {
        title: 'Section 1',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        },
        {
        title: 'Section 2',
        content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
        },
        {
        title: 'Section 3',
        content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
        },
    ]
    
    state = {
        isOpen: false
    };


    handleClick(e) {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };
    
    


    render() {
        return (
            <ul>
                <li>
                    <button onClick={this.handleClick}>{this.sections[0].title}</button>
                    {this.state.isOpen && <p>{this.sections[0].content}</p>}
                </li>
                <li>
                    <button onClick={this.handleClick}>{this.sections[1].title}</button>
                    {this.state.isOpen && <p>{this.sections[1].content}</p>}
                </li>
                <li>
                    <button onClick={this.handleClick}>{this.sections[2].title}</button>
                    {this.state.isOpen && <p>{this.sections[2].content}</p>}
                </li>
            </ul>
        )
    }

}


export default Accordion;