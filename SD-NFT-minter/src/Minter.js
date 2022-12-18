import { useEffect, useState } from "react";
import { connectWallet, getCurrentWalletConnected, mintNFT, readContract } from "./util/interact.js";

const Minter = (props) => {

  //State variables
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [url, setURL] = useState("");
  const [NFTnum, setNFTnum] = useState("");

  useEffect(async () => {
    const { address, status } = await getCurrentWalletConnected();
    const NFTnum = await readContract();
    setWallet(address);
    setStatus(status);
    setNFTnum(NFTnum);
    setURL("https://ipfs.filebase.io/ipfs/Qme7Bb8vjjbEDJK2apW6XdTZpTRNiGGieth5JReBbwRbYd/" + NFTnum + ".png");
  }, []);

  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();
    setStatus(walletResponse.status);
    setWallet(walletResponse.address);
  };

  const onMintPressed = async () => {
    const { status } = await mintNFT(url, name, description);
    setStatus(status);
  };

  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setWallet(accounts[0]);
          setStatus("👆🏽 Write a message in the text-field above.");
        } else {
          setWallet("");
          setStatus("🦊 Connect to Metamask using the top right button.");
        }
      });
    } else {
      setStatus(
        <p>
          {" "}
          🦊{" "}
          <a target="_blank" href={`https://metamask.io/download.html`}>
            You must install Metamask, a virtual Ethereum wallet, in your
            browser.
          </a>
        </p>
      );
    }
  }


  return (
    <div className="Minter">
      <button id="walletButton" onClick={connectWalletPressed}>
        {walletAddress.length > 0 ? (
          "Connected: " +
          String(walletAddress).substring(0, 6) +
          "..." +
          String(walletAddress).substring(38)
        ) : (
          <span>Connect Wallet</span>
        )}
      </button>

      <br></br>
      <h1 id="title">Stable Diffusion NFT Minter</h1>
      <h3>
        Here is the next NFT to be minted if you like it you can press "Mint."
      </h3>
      <p>NFT Number {NFTnum} </p>
      <div>
        <img
          src={url}
          alt="nft"
        />
      </div>

      <button id="mintButton" onClick={onMintPressed}>
        Mint NFT
      </button>
      <p id="status">
        {status}
      </p>
    </div>
  );
};


export default Minter;
