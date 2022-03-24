
function App() {
    const title = 'Post'
    const paragraph = 'Welcome to the post page.'
    const comments = [
        {id: 1, text: 'this service is awesome.'},
        {id: 2, text: 'i didn\'t like this service.'},
        {id: 3, text: 'it was good.'},
        {id: 4, text: 'not something special.'}
    ]
    return (
        <div>
            <h1 className="blue">{title}</h1>
            <p className="red">{paragraph}</p>
            <h3>Comments ({comments.lenght}):</h3>
            
            <div>
                <ul>
                    {comments.map( comment => {
                        <li>{comment.text}</li>
                    })}   
                </ul>

            </div>
            
        </div> 
    )
}

export default App;