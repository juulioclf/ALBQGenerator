import { Routes as RoutesWrapper, Route } from "react-router-dom"
import Home from "../pages/Home"
import Lider from "../pages/Lider"
import TodosAleatorios from "../pages/TodosAleatorios"

export function Routes() {
    return (
        <RoutesWrapper>
            <Route path="/" element={<Home/>}/>
            <Route path="/lider" element={<Lider/>}/>
            <Route path="/aleatorios" element={<TodosAleatorios/>}/>
        </RoutesWrapper>
    )
}