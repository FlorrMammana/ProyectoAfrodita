import {useState} from "react"
/*class Welcome extends Component {
    constructor() {
      super();
  
      this.state = {
        title: "Hola Mundo",
      };
  
      // tenemos que enlazar el método al contexto actual
      this.updateText = this.updateText.bind(this);
    }
  
    updateText() {
      this.setState({
        title: "Hello World",
      });
    }
  
    render() {
      return <h1 onClick={this.updateText}>{this.state.title}</h1>;
    }
  }
*/
const Welcome = () => {

    const titulo = "Hola mundo"

    let [title, setTitle] = useState(titulo);

    const updateText = () => {

       setTitle("Hello World")
    }

    return(
        <h1 onClick={updateText}>{title}</h1>
        )

  } 

  export default Welcome