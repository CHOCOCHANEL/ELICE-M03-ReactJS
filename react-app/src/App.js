import logo from './logo.svg';
import './App.css';

function Header(){
  return <header><h1><a href="/">WWW</a></h1></header>
}

function Nav(props){
  const topics = props.data;
  let list = topics.map(topic => <li key={topic.id}><a href={'/read/'+topic.id}>{topic.title}</a></li>);

  return <nav>
    <ol>
        {list}
    </ol>
  </nav>
}

function Article(props){
  return <article>
    <h2>{props.title}</h2>
    <p>{props.body}</p>
  </article>
}

function App() {
  const topics = [
    {id: 1, title: 'html', body: 'html is ...'},
    {id: 2, title: 'css', body: 'css is ...'},
    {id: 3, title: 'javascript', body: 'javascript is ...'},
  ];

  return (
    <div>
      <Header></Header>
      <Nav data={topics}></Nav>
      <Article title="Welcome" body="Hello, WEB!"></Article>

      <img src="a.png"></img>
      <a href="http://info.cern.ch">web</a>
    </div>
  );
}

export default App;
