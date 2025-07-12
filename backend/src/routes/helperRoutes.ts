import express from 'express';
import { getHelpers, getHelperById, createHelper, updateHelper, deleteHelper } from '../controllers/helperController';

const router = express.Router();

router.get('/', getHelpers);
router.get('/:id', getHelperById);
router.post('/', createHelper);
router.put('/:id', updateHelper);
router.delete('/:id', deleteHelper);

export default router;