type cityinfo = {
    city: string,
    country: string,
    imageUrl: string
    visited?: boolean;
}

function Card ({ cityInfo }: { cityInfo: cityinfo }) {
    const {city, country, imageUrl, visited = false} = cityInfo
    return (
        <div className="Card-city">
            <img src={imageUrl} alt={` image of ${city}, ${country} `}/>
            <h2>{`${city}, ${country}`}</h2>
            {visited ? <p>Já Fui!</p> : <p>Não Fui.</p>}
        </div>
    )
}

export default Card