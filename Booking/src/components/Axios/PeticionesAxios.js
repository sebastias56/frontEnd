import axios from 'axios';
export function getAllProducts()
{
   axios.get('http://apigrp11-env.eba-2kkfuzhu.us-west-2.elasticbeanstalk.com/producto')
     .then(function (response) {
      console.log(response);
     })
     .catch(function (error) {
      console.log(error);
     })
     .then(function () {
     });
}


export function getByIdRequest(id)
{
   axios.get('http://apigrp11-env.eba-2kkfuzhu.us-west-2.elasticbeanstalk.com/producto/' + id)
     .then(function (response) {
      console.log(response);
     })
     .catch(function (error) {
      console.log(error);
     })
     .then(function () {
     });
}

function postRequest()
{
   axios.post('http://apigrp11-env.eba-2kkfuzhu.us-west-2.elasticbeanstalk.com/producto', {
      data: 'Newproducto'
     })
     .then(function (response) {
      console.log(response);
     })
     .catch(function (error) {
      console.log(error);
     })
     .then(function () {
     });
}

function putRequest(id)
{
   axios.put('http://apigrp11-env.eba-2kkfuzhu.us-west-2.elasticbeanstalk.com/producto/' + id, {
      data: 'Newproducto'
     })
     .then(function (response) {
      console.log(response);
     })
     .catch(function (error) {
      console.log(error);
     })
     .then(function () {
     });
}



function deleteRequest(id)
{
   axios.delete('http://apigrp11-env.eba-2kkfuzhu.us-west-2.elasticbeanstalk.com/producto/' + id)
     .then(function (response) {
      console.log(response);
     })
     .catch(function (error) {
      console.log(error);
     })
     .then(function () {
     });
}