import Header from 'modules/Header'
import Landing from 'modules/Landing'
import React from 'react'
import { Routes, Route } from 'react-router-dom'

function ApplicationRouting() {
    return (
        <Routes>
            <Header></Header>
            <Route path="/" element={<Landing></Landing>}></Route>
        </Routes>
    )
}

export default ApplicationRouting
