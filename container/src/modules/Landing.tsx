import React, { useEffect, useRef } from 'react'
import { mount } from 'landing/Landing'
import useRouter from '../hooks/useRouter'

const Landing = () => {
    const ref = useRef<HTMLDivElement>(null)
    const { navigateFunc } = useRouter()

    useEffect(() => {
        mount(ref.current, { navigateFunc })
    }, [])

    return <div ref={ref} />
}

export default Landing
