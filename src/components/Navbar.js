import React , { Component} from 'react' 
import Navitems from './NavItems.js'

class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            'NavItemActive': ''
        }
   }

   render(){
       return(
           <nav>
               <ul>
                 <Navitems item = "Home" tolink="/"></Navitems>
                 <Navitems item = "About" tolink="/about"></Navitems>
                 <Navitems item = "Education" tolink="/education"></Navitems>
                 <Navitems item = "Skills" tolink="/skills"></Navitems>
                 <Navitems item = "Contact" tolink="/contact"></Navitems>
               </ul>
           </nav>
       )
   }
}

export default Navbar