import { GlobalContextContainer } from "./Context";


export const SearchForm=()=>{
    const {bgcColor,value, setValue, fetchData, url, array}=GlobalContextContainer();
    
   


    const formClasses="form-input search-input";
    const valueClass=bgcColor?"white":"black";
    const combinedClass=`${formClasses} ${valueClass}`

    return <form onSubmit={(e)=>{
        e.preventDefault();
        
        setValue(e.target.elements.search.value)
        console.log(value)
    }}>
        <input type="text" placeholder="cat" name="search" className={combinedClass} ></input>
        <button 
        className="btn">submit</button>
    </form>
}