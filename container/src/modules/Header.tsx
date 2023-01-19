import React, { useEffect, useRef } from 'react'
import { mount } from 'header/Header'
import useRouter from '../hooks/useRouter'

const Header = () => {
    const ref = useRef<HTMLDivElement>(null)
    const { navigateFunc } = useRouter()

    useEffect(() => {
        mount(ref.current, { navigateFunc })
    }, [])

    return <div ref={ref} />
}
export default Header
