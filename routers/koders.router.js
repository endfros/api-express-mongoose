import express from "express"
import fs from 'fs';
import {Koder} from '../models/koders.model.js'

const router = express.Router();


router.get('', async (request, response) => {
    let allKoders = await Koder.find({})

    const {gender,generation,age} = request.query

    let kodersFiltered

    if(gender){
        allKoders = allKoders.filter(koder => koder.gender === gender)
        kodersFiltered = allKoders
    }
    if(generation){
        allKoders = allKoders.filter(koder => koder.generation === generation)
        kodersFiltered = allKoders
    }
    if(age){
        allKoders = allKoders.filter(koder => koder.age === age)
        kodersFiltered = allKoders
    }

    response.json({
        success: true,
        data: {
            koders: kodersFiltered || allKoders
        }
    })
})

router.get('/:idKoder', async (request, response) => {
    const id = request.params.idKoder
    console.log(id)
    const koder = await Koder.find({"_id":id})
    console.log(koder)
    response.json({
        success: true,
        data: {
            koder: koder
        }
    })
})

router.patch('/:idKoder', async (request, response) => {
    const id = request.params.idKoder
    const newDataKoder = request.body
    const updatedKoder = await Koder.findByIdAndUpdate(id,newDataKoder, {new:true})
    response.json({
        success: true,
        data: {
            koder: updatedKoder
        }
    })
})

router.delete('/:idKoder', async (request, response) => {
    const id = request.params.idKoder
    const koderDeleted = await Koder.findByIdAndDelete(id);
    response.json({
        success: true,
        data: {
            koder: koderDeleted
        }
    })
})

router.post('', async (request, response) => {
    const newDataKoder = request.body
    const newKoder = await Koder.create(newDataKoder)
    response.json({
        success: true,
        data: {
            koder: newKoder
        }
    })
})

export default router