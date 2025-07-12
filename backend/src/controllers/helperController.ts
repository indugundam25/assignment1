import { Request, Response } from 'express';
import Helper from '../models/Helper';

export const getHelpers = async (req: Request, res: Response) => {
    try {
      const { search } = req.query;
      let query = Helper.aggregate();
      if (search) {
        query.match({ name: new RegExp(search as string, 'i') });
      }
      const helpers = await query.exec();
      res.json(helpers);
    } catch (error) {
      res.status(500).json({ message: error instanceof Error ? error.message : 'Unknown error' });
    }
  };

export const getHelperById = async (req: Request, res: Response) => {
  try {
    const helper = await Helper.findById(req.params.id);
    if (helper) {
      res.json(helper);
    } else {
      res.status(404).json({ message: 'Helper not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error instanceof Error ? error.message : 'Unknown error' });
  }
};

export const createHelper = async (req: Request, res: Response) => {
  const helper = new Helper(req.body);
  try {
    const savedHelper = await helper.save();
    res.status(201).json(savedHelper);
  } catch (error) {
    res.status(400).json({ message: error instanceof Error ? error.message : 'Unknown error' });
  }
};

export const updateHelper = async (req: Request, res: Response) => {
  try {
    const helper = await Helper.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (helper) {
      res.json(helper);
    } else {
      res.status(404).json({ message: 'Helper not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error instanceof Error ? error.message : 'Unknown error' });
  }
};

export const deleteHelper = async (req: Request, res: Response) => {
  try {
    const helper = await Helper.findByIdAndDelete(req.params.id);
    if (helper) {
      res.json({ message: 'Helper deleted' });
    } else {
      res.status(404).json({ message: 'Helper not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error instanceof Error ? error.message : 'Unknown error' });
  }
};  