import Coin from "./Coin";
import flipCoin from "./flip";

/** Flips a coin and keeps track of heads and tails
 *
 *  Props: coin images? or list of coins
 *
 *  State: coinFace: heads or tails
 *         headsCounter: number
 *         tailsCounter: number
 *         numFlips ?????
 *
 *  App -> Flipper -> Coin
 */
function Flipper() {
  const [coinFace, setCoinFace] = useState(null);
  const [headsCount, setHeadsCount] = useState(0);
  const [tailsCount, setTailsCount] = useState(0);

  function handleClick(evt) {
    const result = flipCoin();
    setCoinFace(result);
    result === "heads"
      ? setHeadsCount(headsCount + 1)
      : setTailsCount(tailsCount + 1);
  }

  return (
    <div>
      <h1>Let's flip a coin!</h1>
      <Coin coinFace={coinFace} />
      <button onClick={handleClick}>Flip meeee!</button>
      <p>Out of {headsCount + tailsCount}, there have been {headsCount} heads and {tailsCount} tails.</p>
    </div>);
}

export default Flipper;