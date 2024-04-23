// const heading = React.createElement('h1',{id:'heading'},'Hello world')
const parent= React.createElement('div', {id:'heading'},[
    React.createElement('div' , {id : 'child1'},[
        React.createElement('h1' ,{} , 'hello React'),
    React.createElement('h2' ,{} , 'hello React2'),
    ]),
    React.createElement('div',{id:'child2'},[
        React.createElement('h1' ,{} , 'hello React3'),
    React.createElement('h2' ,{} , 'hello React4'),
    ]),
    React.createElement('div',{id:'child2'},[
        React.createElement('h1' ,{} , 'hello React3'),
    React.createElement('h2' ,{} , 'hello React4'),
    ]),
    React.createElement('div',{id:'child2'},[
        React.createElement('h1' ,{} , 'hello React3'),
    React.createElement('h2' ,{} , 'hello React4'),
    ]),
    React.createElement('div',{id:'child2'},[
        React.createElement('h1' ,{} , 'hello React3'),
    React.createElement('h2' ,{} , 'hello React4'),
    ]),
    React.createElement('div',{id:'child2'},[
        React.createElement('h1' ,{} , 'hello React3'),
    React.createElement('h2' ,{} , 'hello React4'),
    ]),
    React.createElement('div',{id:'child2'},[
        React.createElement('h1' ,{} , 'hello React3'),
    React.createElement('h2' ,{} , 'hello React4'),
    ])
])



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parent)