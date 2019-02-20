import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Pokeball from '../pokeball.png';
import { connect } from 'react-redux';

class Home extends Component {
    /*state = {
        post: []
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                this.setState({
                    post: res.data.slice(0,10)
                })
            })
    }*/
    render() {
        const { post } = this.props;
        //const { post } = this.state;
        const postList  = post.length ? (
            post.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <img src={Pokeball} alt="pokeball" />
                        <div className="card-content">
                            <Link to={'/' + post.id}>
                                <span className="card-title red-text">{ post.title }</span>
                            </Link>
                            <p>{ post.body }</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center">
                No post yet
            </div>
        );
        return (
            <div className="container home">
                <h4 className="center">HOME</h4>
                { postList }
            </div>
        )
    }
}

// mapea el state de redux y lo convierte a props para este componente
const mapStateToProps = (state) => {
    return {
        post: state.posts
    }
}

// HOC connect
export default connect(mapStateToProps)(Home);