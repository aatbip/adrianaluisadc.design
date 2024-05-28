"use client"

export function IframeComponent ({link}: {link:string;}) {
    return (
        <iframe src={link} width="100%" height="100%" allowFullScreen></iframe>

    )
  }