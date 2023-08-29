import { ThemeToggle } from "./ThemeToggle";
import { Gallery } from "./Gallery";
import { SearchForm } from "./SearchForm";
import { GlobalContextContainer } from "./Context";





const App = () => {
  const {bgcColor}=GlobalContextContainer()

  const mainContainer = 'mainContainer';
  const light = bgcColor ? 'dark' : "light";
  const combinedClass=`${mainContainer} ${light}`
 
  return<div className={combinedClass} style={{backgroundColor: `${bgcColor? "black": "white"}`}}>
  <div className="contentContainer">
  <ThemeToggle/>
    <h3 style={{color: `${bgcColor? "white": "black"}`}}>Unsplash Images</h3>
  
  <SearchForm/>
  <Gallery/></div> </div>  
};
export default App;
