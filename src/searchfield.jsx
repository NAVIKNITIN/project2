import React , {Component} from 'react';


class Searchfield extends Component{

    // constructor(props){
    //     super(props);

    // }
    render(){
        
        return (
            <React.Fragment>
                <div className="col-md-12" >
                    <div className="form-group">
                        <input type="search" placeholder="enter to search....." className="form-control"
                        onChange={(e)=>this.props.searchproductfilter(e)}></input>

                    </div>
                </div>
            </React.Fragment>
        )
    
}
};
export default Searchfield;
