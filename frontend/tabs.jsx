import React from 'react'; 

class Tabs extends React.Component{

    constructor(props){
        super(props);
        this.props = props;
        // props = props.bind(this); 
        this.state = {
            index: 0
        };

    }
 
    render() {

        return (
            this.props.tabs.map((tab) => 
                <h1> {tab.title}
                    <article>{tab.content}</article>
                </h1>
            )
    )};
}

export default Tabs; 