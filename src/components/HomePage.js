import { selectedPost } from '../redux/actions/postActionCreator'
import { fetchData } from '../redux/actions/apiActionCreator'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const HomePage = () => {

    const { loading, posts, error } = useSelector(state => state.posts);
    // const choosenPost = useSelector(state => state.selectedPost)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchData());
    }, [])

    if (loading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        <h1>{error}</h1>
    }

    const showDetails = (post) => {
        dispatch(selectedPost(post))
        navigate(`item/:${post.id}`)
    }

    return (
        <div>
            <div>
                <p style={{ paddingLeft: '25px' }}>Social Media App</p>
                <hr />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '22vw 22vw 22vw 22vw', gap: '2vw', marginTop: '20px', marginLeft: '2vw', marginBottom: '20px' }}>
                {
                    posts.map((post, index) => (
                        <div key={index} onClick={() => showDetails(post)} style={{ border: '1px solid white', borderRadius: '15px' }}>
                            <img src={`https://picsum.photos/200?random=${post.id}`} style={{ width: '100%', borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }} />
                            <div style={{ paddingLeft: '10px', paddingRight: '10px' }}>
                                <h5 style={{ fontSize: '1.3vw' }}>User ID : {post.id}</h5>
                                <h5 style={{ fontSize: '1.3vw' }}>Title : {post.title.slice(0, 16)}...</h5>
                                <p style={{ fontSize: '1.3vw' }}><b>Body :</b> {post.body.slice(0, 70)} <b>Read More...</b></p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default HomePage





