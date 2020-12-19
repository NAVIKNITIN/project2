import React,{Component} from "react";
import Cards from './cards';
import Searchfield from "./searchfield";
class App extends Component{
    constructor(){
        super();
        // state is a javscript object that contains  data relevent to a component,use to update data,
        // it must be initialised when component is created 
        this.state={
            allData:[],
            searchData:""
        }
    };


    
                        
    // it can be used for fetching the values and returning the data .it renders only one time .   
    componentDidMount(){
        fetch('https://pixabay.com/api/?key=19575457-d79bb13438961bc7935733883&q=yellow+truck&image_type=photo&pretty=true')
        
        .then(response => response.json())
    
        .then(data => this.setState({allData:data.hits}))
        // setState() is a method used to modify the data 
    };


    searchProduct = (e) =>{
        // console.log(e.target.value);
        this.setState({searchData : e.target.value});

    };
    render(){
        let searchfilter = this.state.allData.filter(data => data.user.toLowerCase()
            .includes(this.state.searchData.toLowerCase())); 
            console.log(searchfilter);
        return (
            <div className="container" >
            <div className="col">
                <Searchfield searchproductfilter={this.searchProduct}/>
                <div className = "row">
                    {
                        // The map() method creates a new array with the results of calling a function for every array element.
                        // The map() method calls the provided function once for each element in an array, in order.
                        // Note: map() does not execute the function for array elements without values.
                    searchfilter.map(data => <Cards data={data} key={data.id}/>)
                    
                }
                </div>
            </div>
            </div>
        )
    }
};





export default App;
