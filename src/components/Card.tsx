type Cityinfo = {
  city: string,
  country: string,
  imageUrl: string
  visited?: boolean;
};

function Card({ cityInfo }: { cityInfo: Cityinfo }) {
  const { city, country, imageUrl, visited = false } = cityInfo;
  return (
    <div className="ard-city">
      <img src={ imageUrl } alt={ city } />
      <h2>{city}</h2>
      <p>{country}</p>
      {visited ? <p>Já Fui!</p> : <p>Não Fui.</p>}
    </div>
  );
}

export default Card;
