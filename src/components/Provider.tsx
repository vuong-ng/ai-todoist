'use client'
import React from 'react'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

type Props = {
    children: React.ReactNode,
}
// (? cache for React Nodes 
const queryClient = new QueryClient();

export default function Provider({children}: Props) {
    return (
    //   so that every react node has access to this cache.
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
