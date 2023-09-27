function Coin({ coinFace }) {

  if (coinFace) {
    return (
      <div>
        {coinFace === 'heads'
          // ? <img src={'./HeadsCoin.png'}></img>
          // : <img src={'./TailsCoin.png'}></img>
          ? "HEADS"
          : "TAILS"
        }
      </div>
    );
  }
}

export default Coin;