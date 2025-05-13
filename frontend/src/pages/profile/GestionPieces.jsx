import React from "react";
import { NavLink, Outlet } from "react-router-dom";

import Axios from "@/baseUrl";
import { useState } from "react";
import { useEffect } from "react";
//import axios from "axios";

const GestionPieces = () => {
  const [pieces, setPieces] = useState([]);

  //console.log(Axios);
  useEffect(() => {
    Axios.get("/getusers")
      .then((res) => {
        setPieces(res.data);
        console.log(res.status);
      })
      .catch((err) => {
        console.log(err);
      });
    /*
Axios.get("/my_pieces/").then((response) => {
  console.log(response)
  //setData
})
 */
  }, []);

  return (
    <div className="gestion_layout">
      {pieces &&
        pieces.map((piece) => (
          <div key={piece.id}>
            <h1 className="text-4xl">{piece.name}</h1>
          </div>
        ))}


<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates non explicabo unde atque vel necessitatibus delectus doloremque recusandae? Soluta eaque possimus debitis sapiente voluptate, quibusdam voluptas corrupti obcaecati. Repellendus, recusandae! Fuga sint voluptates veniam corporis quo autem nisi doloribus, excepturi explicabo repudiandae commodi iusto corrupti natus, ratione ad! Architecto laborum labore ullam debitis nesciunt fuga dolorum consequuntur provident iste eos. Quidem similique dicta minima quo omnis accusantium corporis, impedit ipsum sed repudiandae officiis earum culpa illum mollitia repellendus voluptates sequi? Repudiandae sequi vel quam, distinctio adipisci mollitia quisquam alias deserunt? Culpa doloremque corporis quos consectetur voluptas corrupti, dicta deleniti unde numquam quaerat laboriosam cupiditate nam, velit, error eum ipsum facere quo dolor maxime iste. Similique vel earum ad veniam animi!

Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates non explicabo unde atque vel necessitatibus delectus doloremque recusandae? Soluta eaque possimus debitis sapiente voluptate, quibusdam voluptas corrupti obcaecati. Repellendus, recusandae! Fuga sint voluptates veniam corporis quo autem nisi doloribus, excepturi explicabo repudiandae commodi iusto corrupti natus, ratione ad! Architecto laborum labore ullam debitis nesciunt fuga dolorum consequuntur provident iste eos. Quidem similique dicta minima quo omnis accusantium corporis, impedit ipsum sed repudiandae officiis earum culpa illum mollitia repellendus voluptates sequi? Repudiandae sequi vel quam, distinctio adipisci mollitia quisquam alias deserunt? Culpa doloremque corporis quos consectetur voluptas corrupti, dicta deleniti unde numquam quaerat laboriosam cupiditate nam, velit, error eum ipsum facere quo dolor maxime iste. Similique vel earum ad veniam animi!

Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates non explicabo unde atque vel necessitatibus delectus doloremque recusandae? Soluta eaque possimus debitis sapiente voluptate, quibusdam voluptas corrupti obcaecati. Repellendus, recusandae! Fuga sint voluptates veniam corporis quo autem nisi doloribus, excepturi explicabo repudiandae commodi iusto corrupti natus, ratione ad! Architecto laborum labore ullam debitis nesciunt fuga dolorum consequuntur provident iste eos. Quidem similique dicta minima quo omnis accusantium corporis, impedit ipsum sed repudiandae officiis earum culpa illum mollitia repellendus voluptates sequi? Repudiandae sequi vel quam, distinctio adipisci mollitia quisquam alias deserunt? Culpa doloremque corporis quos consectetur voluptas corrupti, dicta deleniti unde numquam quaerat laboriosam cupiditate nam, velit, error eum ipsum facere quo dolor maxime iste. Similique vel earum ad veniam animi!</p>
      

<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates non explicabo unde atque vel necessitatibus delectus doloremque recusandae? Soluta eaque possimus debitis sapiente voluptate, quibusdam voluptas corrupti obcaecati. Repellendus, recusandae! Fuga sint voluptates veniam corporis quo autem nisi doloribus, excepturi explicabo repudiandae commodi iusto corrupti natus, ratione ad! Architecto laborum labore ullam debitis nesciunt fuga dolorum consequuntur provident iste eos. Quidem similique dicta minima quo omnis accusantium corporis, impedit ipsum sed repudiandae officiis earum culpa illum mollitia repellendus voluptates sequi? Repudiandae sequi vel quam, distinctio adipisci mollitia quisquam alias deserunt? Culpa doloremque corporis quos consectetur voluptas corrupti, dicta deleniti unde numquam quaerat laboriosam cupiditate nam, velit, error eum ipsum facere quo dolor maxime iste. Similique vel earum ad veniam animi!

Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates non explicabo unde atque vel necessitatibus delectus doloremque recusandae? Soluta eaque possimus debitis sapiente voluptate, quibusdam voluptas corrupti obcaecati. Repellendus, recusandae! Fuga sint voluptates veniam corporis quo autem nisi doloribus, excepturi explicabo repudiandae commodi iusto corrupti natus, ratione ad! Architecto laborum labore ullam debitis nesciunt fuga dolorum consequuntur provident iste eos. Quidem similique dicta minima quo omnis accusantium corporis, impedit ipsum sed repudiandae officiis earum culpa illum mollitia repellendus voluptates sequi? Repudiandae sequi vel quam, distinctio adipisci mollitia quisquam alias deserunt? Culpa doloremque corporis quos consectetur voluptas corrupti, dicta deleniti unde numquam quaerat laboriosam cupiditate nam, velit, error eum ipsum facere quo dolor maxime iste. Similique vel earum ad veniam animi!

Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates non explicabo unde atque vel necessitatibus delectus doloremque recusandae? Soluta eaque possimus debitis sapiente voluptate, quibusdam voluptas corrupti obcaecati. Repellendus, recusandae! Fuga sint voluptates veniam corporis quo autem nisi doloribus, excepturi explicabo repudiandae commodi iusto corrupti natus, ratione ad! Architecto laborum labore ullam debitis nesciunt fuga dolorum consequuntur provident iste eos. Quidem similique dicta minima quo omnis accusantium corporis, impedit ipsum sed repudiandae officiis earum culpa illum mollitia repellendus voluptates sequi? Repudiandae sequi vel quam, distinctio adipisci mollitia quisquam alias deserunt? Culpa doloremque corporis quos consectetur voluptas corrupti, dicta deleniti unde numquam quaerat laboriosam cupiditate nam, velit, error eum ipsum facere quo dolor maxime iste. Similique vel earum ad veniam animi!</p>
      

<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates non explicabo unde atque vel necessitatibus delectus doloremque recusandae? Soluta eaque possimus debitis sapiente voluptate, quibusdam voluptas corrupti obcaecati. Repellendus, recusandae! Fuga sint voluptates veniam corporis quo autem nisi doloribus, excepturi explicabo repudiandae commodi iusto corrupti natus, ratione ad! Architecto laborum labore ullam debitis nesciunt fuga dolorum consequuntur provident iste eos. Quidem similique dicta minima quo omnis accusantium corporis, impedit ipsum sed repudiandae officiis earum culpa illum mollitia repellendus voluptates sequi? Repudiandae sequi vel quam, distinctio adipisci mollitia quisquam alias deserunt? Culpa doloremque corporis quos consectetur voluptas corrupti, dicta deleniti unde numquam quaerat laboriosam cupiditate nam, velit, error eum ipsum facere quo dolor maxime iste. Similique vel earum ad veniam animi!

Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates non explicabo unde atque vel necessitatibus delectus doloremque recusandae? Soluta eaque possimus debitis sapiente voluptate, quibusdam voluptas corrupti obcaecati. Repellendus, recusandae! Fuga sint voluptates veniam corporis quo autem nisi doloribus, excepturi explicabo repudiandae commodi iusto corrupti natus, ratione ad! Architecto laborum labore ullam debitis nesciunt fuga dolorum consequuntur provident iste eos. Quidem similique dicta minima quo omnis accusantium corporis, impedit ipsum sed repudiandae officiis earum culpa illum mollitia repellendus voluptates sequi? Repudiandae sequi vel quam, distinctio adipisci mollitia quisquam alias deserunt? Culpa doloremque corporis quos consectetur voluptas corrupti, dicta deleniti unde numquam quaerat laboriosam cupiditate nam, velit, error eum ipsum facere quo dolor maxime iste. Similique vel earum ad veniam animi!

Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates non explicabo unde atque vel necessitatibus delectus doloremque recusandae? Soluta eaque possimus debitis sapiente voluptate, quibusdam voluptas corrupti obcaecati. Repellendus, recusandae! Fuga sint voluptates veniam corporis quo autem nisi doloribus, excepturi explicabo repudiandae commodi iusto corrupti natus, ratione ad! Architecto laborum labore ullam debitis nesciunt fuga dolorum consequuntur provident iste eos. Quidem similique dicta minima quo omnis accusantium corporis, impedit ipsum sed repudiandae officiis earum culpa illum mollitia repellendus voluptates sequi? Repudiandae sequi vel quam, distinctio adipisci mollitia quisquam alias deserunt? Culpa doloremque corporis quos consectetur voluptas corrupti, dicta deleniti unde numquam quaerat laboriosam cupiditate nam, velit, error eum ipsum facere quo dolor maxime iste. Similique vel earum ad veniam animi!</p>
      
    </div>

    
  );
};

export default GestionPieces;
