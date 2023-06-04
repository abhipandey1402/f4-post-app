import { useSelector } from "react-redux"


const PostDetail = () => {

    const choosenPost = useSelector(state => state.selectedPost)

    return (
            <div style={{ marginLeft: '20px' }}>
                <h3>Detail Page For Post With ID {choosenPost.id}</h3>
                <img src={`https://picsum.photos/200?random=${choosenPost.id}`} style={{ borderRadius: '20px' }} />
                <h5>User Id : {choosenPost.id}</h5>
                <h5>Title : {choosenPost.title}</h5>
                <p>Body : {choosenPost.body}</p>
            </div>
    )
}


export default PostDetail


