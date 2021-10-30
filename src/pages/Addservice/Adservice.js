import React from 'react';
import { useForm } from 'react-hook-form';
import './AddService.css'

const axios = require('axios').default;

const Adservice = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post("https://damp-plains-34194.herokuapp.com/package", data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Successfully added");
                    reset();
                }
            })
        reset();

  };
    return (
        <div className="adservice ">
            <h1 className="text-black">Add New Service</h1>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} placeholder="name"/>
                <input {...register("duration")} placeholder="Package Duration"/>
                <input type="number" {...register("Price")} placeholder="Price"/>
                
      <input {...register("image")} placeholder="Image Url"/>
      <textarea {...register("description")} placeholder="Description"/>
      <input className="bg-danger" type="submit" />
    </form>
        </div>
    );
};

export default Adservice;