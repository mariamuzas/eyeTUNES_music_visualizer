const Song = ({title, comment}) => {
    return (
        <li>
            <p>{title}</p>
            <p>{comment}</p>
        </li>
    )
}

export default Song;