
const Footer = ({data : {copy, author}}) => {
    return(
        <footer>
            <p>{copy} - {author}</p>
        </footer>
    )
}

export default Footer