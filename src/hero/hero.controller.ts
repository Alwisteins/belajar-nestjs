import { Controller, Get, Post, Req, Res, HttpCode } from '@nestjs/common';
import { Request, Response } from 'express';

type Heroes = {
  id: number;
  name: string;
  type: string[] | string;
};

let heroes: Heroes[] = [
  {
    id: 1,
    name: 'ling',
    type: 'assasin',
  },
  {
    id: 2,
    name: 'chou',
    type: 'fighter',
  },
  {
    id: 3,
    name: 'franco',
    type: 'tank',
  },
  {
    id: 4,
    name: 'yin',
    type: ['fighter', 'assasin'],
  },
];

@Controller('hero')
export class HeroController {
  @Get()
  index(@Res({ passthrough: true }) response: Response): string {
    response.cookie('pass', 'new heroes');
    return 'Welcome new heroes!';
  }

  @Get('list')
  findAll(@Res() response: Response): void {
    response.json(heroes);
  }

  @Post('list/add')
  create(@Req() request: Request, @Res() response: Response) {
    const { id, name, type } = request.body;
    heroes.push({ id, name, type });
    response.status(201).json(request.body);
  }
}
