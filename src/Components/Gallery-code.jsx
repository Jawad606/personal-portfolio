import  { useState, useEffect } from "react";
import {works} from './Gallery' ;
export default function GalleryCode(){
 const [filter, setFilter] = useState("all");
 const [projects, setProjects] = useState([]);
useEffect(() => {
  setProjects(works);
}, []);
useEffect(() => {
  setProjects([]);
  const filtered = works.map((p) => ({
    ...p,
    filtered: p.catagory.includes(filter),
  }));
  setProjects(filtered);
}, [filter]);
}