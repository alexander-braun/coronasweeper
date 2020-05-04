import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getPosts } from '../../actions/posts'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'

function Bestlist({ lvl, getPosts, posts: { posts, loading }}) {

    useEffect(() => {
        getPosts()
    }, [getPosts])

    const generateSurvivors = () => {

        // Get all times and sort them but only if lvl is the same as current difficulty
        let values = Object.values(posts).map(post => {
            if(post['lvl'] === String(lvl)) return post['time']
        }).sort().slice(0, 5)

        // If no survivors
        console.log(values)
        if(values[0] === undefined) return (
            <div className="no_survivors">No survivors yet for this difficulty</div>
        )

        // Create the survivorlist 
        let survivors = []
        for(let value of values) {
            Object.keys(posts).map(index => {
                if(posts[index]['time'] === value) {
                    survivors.push(
                        <div className="recordholder" key={uuidv4()}>
                            <div className="leftlist">
                                <div className="username">{values.indexOf(posts[index]['time']) + 1 + '.' + posts[index]['user']}</div>
                                <div className="difficulty">{`Lvl ${posts[index]['lvl']}`}</div>
                            </div>
                            <div className="time">{posts[index]['time']}<span style={{fontSize:'.5rem', marginLeft:'2px', color:'#c71010'}}>s</span></div>
                        </div>
                    )
                }
            })
        }
        return survivors
    }

    return (
        <React.Fragment>
            <div className="bestlist">
            🤘🤘🤘 Survivors 🤘🤘🤘
            </div>
            <div className="list">
                {
                    generateSurvivors()
                }
            </div>
        </React.Fragment>
    )
}

Bestlist.propTypes = {
    getPosts: PropTypes.func.isRequired,
    posts: PropTypes.object.isRequired,
    lvl: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
    posts: state.posts,
    lvl: state.difficulty
})

const mapActionToProps = {
    getPosts
}

export default React.memo(connect(mapStateToProps, mapActionToProps)(Bestlist))