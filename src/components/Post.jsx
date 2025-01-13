import React from 'react'

const Post = () => {
    const posts = [1, 2, 3, 4, 5]
    const Day = "Sun"
    const Date = "12"
    const Month = "01"
    const Title = "Soap Sporting at Clean"
    const reference  = "Solid and Structure 1"
    return (
        <div>
            <h2>Posts</h2>
            {
                posts.map((post, index)=> {
                    return (
                    <div key={index}>
                        <div>
                            <span>
                                <p>{Day}</p>
                                <p>{Date}</p>
                            </span>    
                            <p>{Month}</p>            
                        </div>
                        <div>
                            <p>{Title}</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, provident?</p>
                            <p>{reference}</p>
                        </div>
                    </div>)
                })
            }
            <div>
                <a href="/">View All Posts</a>
            </div>
        </div>
    )
}

export default Post