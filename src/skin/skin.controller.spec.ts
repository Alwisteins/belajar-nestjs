import { Test, TestingModule } from '@nestjs/testing';
import { SkinController } from './skin.controller';

describe('SkinController', () => {
  let controller: SkinController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SkinController],
    }).compile();

    controller = module.get<SkinController>(SkinController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
