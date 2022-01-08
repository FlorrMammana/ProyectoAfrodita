
const Footer = ({data : {copy, author}}) => {
    return(
        <footer>
            <p className="text-center">{copy} - {author}</p>
        </footer>
    )
}

export default Footer