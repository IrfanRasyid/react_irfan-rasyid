import React from 'react'
import bsLogo from '../../../assets/bootstrap-logo.svg'
import { ARTICLE } from './title'

const Header = () => {
    const [title, setTitle] = React.useState(ARTICLE.title.en)
    const [description, setDescription] = React.useState(ARTICLE.description.en)

    const changeLanguage = (e) => {
        if (e.target.value === 'en') {
            setTitle(ARTICLE.title.en)
            setDescription(ARTICLE.description.en)
        } else if (e.target.value === 'id') {
            setTitle(ARTICLE.title.id)
            setDescription(ARTICLE.description.id)
        }
    }
    return (
        <>
            <div className="text-center mt-5">
                <img src={bsLogo} />
                <h2 className="mt-2">{title}</h2>
                <p>{description}</p>
            </div>
            <div className="text-center">
                <button className="btn btn-primary me-2" value="en" onClick={changeLanguage}>English</button>
                <button className="btn btn-primary" value="id" onClick={changeLanguage}>Indonesia</button>
            </div>

        </>
    )
}

export default Header