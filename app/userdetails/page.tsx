// 'use client'
import Script from "next/script"

export default function Page(){
    return(
        <div>
            <Script
            src="/location.tsx"
          
            />
            <h1>Get user getLocation</h1>
        </div>
    )
}