"use client";

import { getProviders, signIn } from 'next-auth/react'
import React, { useState, useEffect } from 'react';
import Button from './Button';

type Provider = {
  id: string;
  name: string;
  type: string;
  signinUrl: string;
  callbackUrl: string;
  signinUrlParams?: Record<string, string> | null;

}

type Providers = Record<string, Provider>;

const AuthProviders = () => {
  const [Providers, setProviders] = useState<Providers | null>(null);

useEffect(() => {
  const fetchProviders = async () => {
    const res = await getProviders();
    setProviders(res);
  }
  fetchProviders();
},[])

 if(Providers){
  return (
    <div>
      {Object.values(Providers).map((provider:Provider, i ) => (
          <button key={i} title='Sign In' onClick={() => signIn(provider?.id)}>{provider.id}</button>
        )
      )}
    </div>
  )
 }
}

export default AuthProviders