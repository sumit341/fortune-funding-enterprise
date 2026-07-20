import {
  Router,
} from 'express';


import {
  createChallenge,
  getChallenges,
  getChallengeById,
  updateChallenge,
  deleteChallenge,
} from './challenges.controller.js';



export const challengesRouter =
  Router();



challengesRouter.post(
  '/',
  createChallenge
);



challengesRouter.get(
  '/',
  getChallenges
);



challengesRouter.get(
  '/:id',
  getChallengeById
);



challengesRouter.patch(
  '/:id',
  updateChallenge
);



challengesRouter.delete(
  '/:id',
  deleteChallenge
);