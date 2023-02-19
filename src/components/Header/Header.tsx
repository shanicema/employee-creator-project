import styles from './Header.module.scss';

interface Test {
    hello: boolean;
    world: number;
}

const Header = ({ hello, world }: Test) => {
    
    return (
        <div>
            <h1>{world}</h1>
        </div>
    )
}

// react
<>
    <Header hello={true} world={88} /> 
</>

// Header({ hello: true, world: 0 }) pure js/ts

export default Header;

const array: string[] = [];

<>
  {array.map((str, i) => { //replace str with Employee component
    return <span key={i}>{str}</span> // replace i with employee id
  })}
</>