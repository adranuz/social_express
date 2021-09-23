const express = require('express')

const response = require('../../../network/response')
const Controller = require('./')

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const data = await Controller.list()
    response.success(req, res, data, 200)
  } catch (error) { response.error(req, res, error.message, 500) }
})

router.get('/:id', async (req, res) => {
  try {
    const data = await Controller.get(req.params.id)
    response.success(req, res, data, 200)
  } catch (error) { response.error(req, res, error.message, 500) }
})

router.post('/', async (req, res) => {
  try {
    const data = await Controller.upsert({
      name: req.body.name
    })
    response.success(req, res, data, 200)
  } catch (error) { response.error(req, res, error.message, 500) }
})

router.delete('/:id', async (req, res) => {
  try {
    const data = await Controller.remove(req.params.id)
    response.success(req, res, data, 200)
  } catch (error) { response.error(req, res, error.message, 500) }
})

module.exports = router