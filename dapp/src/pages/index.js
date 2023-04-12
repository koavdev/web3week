import { useState } from 'react';
import Head from 'next/head';
import Footer from '@/components/Footer';
import { doLogin } from '@/services/Web3Service';
import { shortenAddress } from '@/utils/shortenAddress';



export default function Home() {

  const [wallet, setWallet] = useState("");
  const [error,setError] = useState("");

  function btnLoginClick(){
    doLogin()
      .then(wallet => setWallet(wallet))
      .catch(err => setError(err.message));
  }

  return (
    <>
      <Head>
        <title>Donate Crypto | Index</title>
        <meta charSet='utf-8' />
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='container px-4 py-5'>
        <div className='row flex-lg-row-reverse align-items-center py-5 g-5'>
          <div className='col-10 col-sm-8 col-lg-6'>
            <img className='d-block mx-lg-auto img-fluid' height="500" src='https://images.unsplash.com/photo-1520694478166-daaaaec95b69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'/>
          </div>
          <div className='col-lg-6'>
            <h1 className='display-5 fw-bold text-body-emphasis lh-1 mb-3'>Donate Crypto</h1>
            <p className='lead'>Your decentralized donations platform.</p>
            <p className='lead mb-3'>Connect your wallet, create your campaign or donate for already exists.</p>
            <div className='d-grid gap-2 d-md-flex justify-content-md-start'>
              {!wallet ? (
                <button type='button' className='btn btn-primary btn-lg px-4 me-md-2' onClick={btnLoginClick()}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/1200px-MetaMask_Fox.svg.png" width="64" className='me-3' />
                  Conectar com a Metamask
                </button> 
              ) : (
                <button type='button' className='btn btn-primary btn-lg px-4 me-md-2'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/1200px-MetaMask_Fox.svg.png" width="64" className='me-3' />
                  Connected on: {shortenAddress(wallet)}
                </button>
              )}
                           
            </div>

            {error}
          </div>
        </div>
        <Footer>

        </Footer>
      </div>
        

      </>
  )
}
