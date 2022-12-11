import React from "react";
import {
  Route,
  Routes,
} from "react-router-dom";
import Layout from "../Components/Common/Layout";
import Esports from "../Components/Esports/Esports";
import Events from "../Components/Events/Events";
import GlobalEvents from "../Components/Events/GlobalEvents";
import Home from "../Components/Home/Home";
import News from "../Components/News/News";
import Players from "../Components/Players/Players";
import Stats from "../Components/Stats/Stats";
import Teams from "../Components/Teams/Teams";

let AppRoutes = () => {
  return (
    <>
        <Layout>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/home" exact element={<Home />} />
            <Route path="/teams" exact element={<Teams />} />
            <Route path="/players" exact element={<Players />} />
            <Route path="/stats" exact element={<Stats />} />
            <Route path="/news" exact element={<News />} />
            <Route path="/pubgesports" exact element={<Esports />} />
            <Route path="/globalevents" exact element={<GlobalEvents />} />
            <Route path="/allevents" exact element={<Events />} />
            <Route path="/pgc2022" exact element={<GlobalEvents />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Layout>
    </>
  );
};
export default AppRoutes;
